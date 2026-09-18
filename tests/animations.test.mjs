import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const source = readFileSync('src/components/ScrollAnimations.astro', 'utf8')
  .split('<script>')[1]
  .split('</script>')[0];
const js = ts.transpileModule(source, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.None,
  },
}).outputText;
function setup({ reduced = false, available = true } = {}) {
  class Block {
    constructor(top = 1000) {
      this.top = top;
      this.dataset = { reveal: 'fade' };
      this.classes = new Set();
      this.classList = {
        add: (name) => this.classes.add(name),
        contains: (name) => this.classes.has(name),
      };
      this.props = {};
      this.style = { setProperty: (key, value) => (this.props[key] = value) };
      this.children = [];
      this.parentElement = null;
    }
    getBoundingClientRect() {
      return { top: this.top };
    }
    contains(target) {
      return target === this;
    }
    closest() {
      return this;
    }
  }
  const above = new Block(20),
    below = new Block(),
    group = new Block();
  group.children = Array.from({ length: 9 }, () => new Block());
  const elements = [above, below, ...group.children],
    events = {},
    mediaEvents = {},
    frames = [];
  let callback;
  const observed = new Set();
  class Observer {
    constructor(fn) {
      callback = fn;
    }
    observe(el) {
      observed.add(el);
    }
    unobserve(el) {
      observed.delete(el);
    }
    disconnect() {
      observed.clear();
    }
  }
  const media = {
    matches: reduced,
    addEventListener: (name, fn) => (mediaEvents[name] = fn),
  };
  const window = { addEventListener: () => {} };
  if (available) window.IntersectionObserver = Observer;
  const document = {
    activeElement: null,
    querySelectorAll: (selector) =>
      selector === '[data-stagger]' ? [group] : elements,
    addEventListener: (name, fn) => (events[name] = fn),
  };
  vm.runInNewContext(js, {
    window,
    document,
    matchMedia: () => media,
    HTMLElement: Block,
    Element: Block,
    IntersectionObserver: Observer,
    requestAnimationFrame: (fn) => {
      frames.push(fn);
      return frames.length;
    },
    cancelAnimationFrame: () => {},
    innerHeight: 800,
  });
  frames.forEach((fn) => fn());
  return {
    above,
    below,
    group,
    elements,
    observed,
    media,
    mediaEvents,
    events,
    intersect: (el) => callback([{ target: el, isIntersecting: true }]),
  };
}
test('visible content is never hidden; offscreen cards reveal once on intersection', () => {
  const s = setup();
  assert.ok(s.above.classes.has('is-visible'));
  assert.ok(!s.above.classes.has('reveal-ready'));
  assert.ok(s.below.classes.has('reveal-ready'));
  assert.ok(s.observed.has(s.below));
  s.intersect(s.below);
  assert.ok(s.below.classes.has('is-visible'));
  assert.ok(!s.observed.has(s.below));
  assert.equal(s.group.children[8].props['--reveal-delay'], '400ms');
});
test('reduced motion and missing observer always leave all content visible', () => {
  for (const options of [{ reduced: true }, { available: false }]) {
    const s = setup(options);
    assert.ok(s.elements.every((el) => el.classes.has('is-visible')));
    assert.equal(s.observed.size, 0);
  }
});
test('changing motion preference or focusing a hidden block reveals content', () => {
  const s = setup();
  s.events.focusin({ target: s.below });
  assert.ok(s.below.classes.has('is-visible'));
  s.media.matches = true;
  s.mediaEvents.change();
  assert.ok(s.elements.every((el) => el.classes.has('is-visible')));
  assert.equal(s.observed.size, 0);
});
