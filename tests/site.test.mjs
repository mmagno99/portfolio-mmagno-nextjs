import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('.vercel/output/static');
const catalogs = await Promise.all(
  [
    ['personal-projects', 'src/data/projects.ts'],
    ['projects-bbx', 'src/data/work.js'],
    ['projects-tdi', 'src/data/tdi.ts'],
  ].map(async ([category, file]) => ({
    category,
    ids: [...(await readFile(file, 'utf8')).matchAll(/\bid:\s*'([^']+)'/g)].map(
      (match) => match[1],
    ),
  })),
);

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
  assert.equal(
    files.length,
    37 + catalogs.reduce((total, catalog) => total + catalog.ids.length * 3, 0),
  );
  for (const prefix of ['', 'en/', 'pt/']) {
    for (const route of [
      '',
      prefix ? 'projects/' : 'proyectos/',
      prefix ? 'about/' : 'acerca-de/',
      'blog/',
      'personal-projects/',
      'projects-bbx/',
      'projects-tdi/',
      'cotizacion/',
      ...catalogs.flatMap(({ category, ids }) =>
        ids.map((id) => `${category}/${id}/`),
      ),
    ]) {
      await access(path.join(root, prefix, route, 'index.html'));
    }
  }
  for (const slug of [
    'que-hace-un-front-end-developer',
    'que-hace-un-back-end-developer',
    'como-mejorar-tu-perfil-como-developer',
    'rendimiento-sitio-web',
  ])
    for (const prefix of ['', 'en/', 'pt/'])
      await access(path.join(root, prefix, 'blog', slug, 'index.html'));
});
test('every page has static content, one main heading and canonical metadata', () => {
  for (const { file, html } of pages) {
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, file);
    assert.match(html, /<main[^>]*id="main"/);
    assert.match(html, /<link rel="canonical" href="https:\/\/mmagno.dev/);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.doesNotMatch(
      html,
      /__NEXT_DATA__|href="(?:undefined|javascript:|function)/,
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
    if (rel.includes('projects-bbx/' + catalogs[1].ids[0] + '/'))
      for (const prefix of ['', '/en', '/pt'])
        assert.ok(
          html.includes(`href="${prefix}/projects-bbx/${catalogs[1].ids[0]}"`),
        );
  }
});
test('blog is pre-rendered with syntax highlighting and correct language', () => {
  const article = pages.find(
    (p) =>
      p.file ===
      path.join(root, 'blog', 'que-hace-un-front-end-developer', 'index.html'),
  );
  assert.match(article.html, /<html lang="es">/);
  assert.match(article.html, /astro-code/);
  assert.match(article.html, /Un <strong>Front-end Developer<\/strong>/);
});

test('articles retain their translated language and language switch points to the same article', () => {
  for (const lang of ['en', 'pt']) {
    const article = pages.find(
      (p) =>
        p.file ===
        path.join(
          root,
          lang,
          'blog',
          'que-hace-un-front-end-developer',
          'index.html',
        ),
    );
    assert.match(article.html, new RegExp(`<html lang="${lang}">`));
    assert.ok(
      article.html.includes(
        lang === 'en'
          ? 'What does a front-end developer do?'
          : 'O que faz um desenvolvedor front-end?',
      ),
    );
    assert.ok(
      article.html.includes('href="/en/blog/que-hace-un-front-end-developer"'),
    );
    assert.ok(
      article.html.includes(
        'hreflang="pt" href="https://mmagno.dev/pt/blog/que-hace-un-front-end-developer"',
      ),
    );
  }
});
test('React is isolated to the quote pages and TDI placeholders are disclosed', () => {
  for (const { file, html } of pages) {
    if (file.includes(`${path.sep}cotizacion${path.sep}`))
      assert.match(html, /<astro-island/);
    else assert.doesNotMatch(html, /<astro-island/);
    if (file.includes('sitio-corporativo'))
      assert.match(html, /demostración|Demonstration|demonstração/);
  }
});

test('Spanish navigation, metadata and permanent redirects use the new routes', async () => {
  for (const [oldRoute, newRoute] of [
    ['projects', 'proyectos'],
    ['about', 'acerca-de'],
  ]) {
    const page = pages.find(
      (p) => p.file === path.join(root, newRoute, 'index.html'),
    );
    assert.ok(page);
    assert.ok(
      page.html.includes(
        `rel="canonical" href="https://mmagno.dev/${newRoute}"`,
      ),
    );
    assert.ok(
      page.html.includes(
        `hreflang="x-default" href="https://mmagno.dev/${newRoute}"`,
      ),
    );
    assert.ok(page.html.includes(`href="/en/${oldRoute}"`));
    for (const { html } of pages)
      assert.ok(!html.includes(`href="/${oldRoute}"`));
  }
  const config = JSON.parse(
    await readFile('.vercel/output/config.json', 'utf8'),
  );
  for (const target of ['/proyectos', '/acerca-de'])
    assert.ok(
      config.routes.some(
        (route) =>
          route.status === 301 &&
          Object.values(route.headers ?? {}).includes(target),
      ),
      target,
    );
});

test('all 12 articles have intentional localized SEO and valid structured data', () => {
  const articles = pages.filter(({ html }) =>
    html.includes('"@type":"BlogPosting"'),
  );
  assert.equal(articles.length, 12);
  const descriptions = new Set();
  for (const { file, html } of articles) {
    const json = html.match(
      /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/,
    );
    assert.ok(json, file);
    const data = JSON.parse(json[1]);
    assert.equal(data['@type'], 'BlogPosting');
    assert.ok(data.description.length > 70);
    assert.ok(data.keywords.length > 5);
    assert.ok(data.url.startsWith('https://mmagno.dev/'));
    assert.match(html, /name="twitter:description"/);
    assert.match(html, /property="article:published_time"/);
    assert.ok(data.image[0].startsWith('https://'));
    descriptions.add(data.description);
    if (file.includes('rendimiento-sitio-web')) {
      assert.match(html, /LCP/);
      assert.match(html, /INP/);
      assert.match(html, /CLS/);
      assert.ok(html.includes(`href="/en/blog/rendimiento-sitio-web"`));
      assert.ok(html.includes(`href="/pt/blog/rendimiento-sitio-web"`));
    }
  }
  assert.equal(descriptions.size, 12);
});
