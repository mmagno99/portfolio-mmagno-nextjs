import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist');
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((e) =>
        e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name),
      ),
    )
  ).flat();
}
const files = (await walk(root)).filter((f) => f.endsWith('.html'));
const pages = await Promise.all(
  files.map(async (file) => ({ file, html: await readFile(file, 'utf8') })),
);

test('all original content and localized portfolio routes are generated', async () => {
  assert.equal(files.length, 58);
  for (const prefix of ['', 'en/', 'pt/']) {
    for (const route of [
      '',
      'projects/',
      'about/',
      'blog/',
      'personal-projects/',
      'projects-bbx/',
      'personal-projects/0/',
      'personal-projects/1/',
      ...Array.from({ length: 10 }, (_, i) => `projects-bbx/${i}/`),
    ]) {
      await access(path.join(root, prefix, route, 'index.html'));
    }
  }
  for (const slug of [
    'que-hace-un-front-end-developer',
    'que-hace-un-back-end-developer',
    'como-mejorar-tu-perfil-como-developer',
  ])
    await access(path.join(root, 'blog', slug, 'index.html'));
});
test('every page has static content, one main heading and canonical metadata', () => {
  for (const { file, html } of pages) {
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, file);
    assert.match(html, /<main[^>]*id="main"/);
    assert.match(html, /<link rel="canonical" href="https:\/\/mmagno.dev/);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.doesNotMatch(
      html,
      /astro-island|__NEXT_DATA__|href="(?:undefined|javascript:|function)/,
    );
  }
});
test('all internal navigation and stylesheet targets exist', async () => {
  for (const { file, html } of pages) {
    for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)[^\"]*"/g)) {
      const target = decodeURIComponent(match[1]);
      const full = path.join(root, target);
      const candidates = [full, path.join(full, 'index.html')];
      let found = false;
      for (const candidate of candidates) {
        try {
          await access(candidate);
          found = true;
          break;
        } catch {}
      }
      assert.ok(found, `${file}: missing ${target}`);
    }
  }
});
test('language switching preserves project details and translations are present', () => {
  for (const { file, html } of pages) {
    const rel = path.relative(root, file).replaceAll('\\', '/');
    const lang = rel.startsWith('en/')
      ? 'en'
      : rel.startsWith('pt/')
        ? 'pt'
        : 'es';
    assert.match(html, new RegExp(`<html lang="${lang}">`));
    assert.doesNotMatch(
      html,
      />\s*(?:navbar\.nav\d|home\.\w+|projects\.\w+)\s*</,
    );
    if (rel.includes('projects-bbx/9/'))
      for (const prefix of ['', '/en', '/pt'])
        assert.ok(html.includes(`href="${prefix}/projects-bbx/9"`));
  }
});
test('blog is pre-rendered with syntax highlighting and correct language', () => {
  const article = pages.find((p) =>
    p.file.includes('que-hace-un-front-end-developer'),
  );
  assert.match(article.html, /<html lang="es">/);
  assert.match(article.html, /astro-code/);
  assert.match(article.html, /Un <strong>Front-end Developer<\/strong>/);
});
