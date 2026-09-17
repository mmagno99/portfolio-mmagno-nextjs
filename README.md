# Mmagno Portfolio

Portafolio estático de Marcos González, construido con Astro 5 y Tailwind CSS 4.

## Desarrollo

Requisitos: Node.js 22.12 o superior y pnpm 11.

```sh
pnpm install
pnpm dev
```

La vista local se abre en http://127.0.0.1:4321.

```sh
pnpm check
pnpm build
pnpm test
pnpm preview
```

`pnpm test` valida el HTML generado: rutas, enlaces internos, idiomas, metadatos y contenido sin hidratación. Ejecutar después del build.

## Estructura

- `src/pages/[...route].astro`: rutas estáticas de inicio, proyectos, trayectoria y blog en español, inglés y portugués.
- `src/pages/blog/[slug].astro`: artículos originales en español.
- `src/layouts/Layout.astro`: navegación accesible, SEO, selector de idioma y pie.
- `src/components/`: secciones y tarjetas Astro.
- `src/lib/i18n.ts`: traducción en compilación y textos del nuevo diseño.
- `src/locales/`: diccionarios originales conservados.
- `src/data/projects.ts` y `src/data/work.js`: proyectos con IDs estables. No cambiar IDs existentes al reordenarlos.
- `src/data/about.js` y `src/data/skills.js`: experiencia y herramientas.
- `posts/`: artículos MDX con `slug`, `title`, `image` y `date`.
- `src/styles/global.css`: Tailwind, tokens visuales, animaciones y tipografía de artículos.

## Diseño y comportamiento

Hero oscuro, secciones claras, superficies de cristal, luces índigo/fucsia, tarjetas redondeadas y botones tipo píldora. Plus Jakarta Sans se aloja localmente. Diseño fijo sin modo oscuro.

Los catálogos utilizan cuadrículas adaptables en lugar del carrusel anterior. Las animaciones decorativas respetan `prefers-reduced-motion`. No se utiliza React ni se necesita hidratación para mostrar el contenido. El menú móvil y volver arriba usan JavaScript pequeño; sin JavaScript los enlaces de navegación siguen visibles.

Español conserva las rutas originales. Inglés usa `/en/` y portugués `/pt/`; el selector mantiene la página actual. Los artículos solo existen en español: desde un artículo, cambiar idioma abre el índice de blog del idioma elegido, sin duplicar contenido ni fingir traducciones.

## Publicación

El resultado es `dist/`, listo para alojamiento estático. En Vercel, seleccionar Astro y usar `pnpm build` con directorio de salida `dist`; revisar cualquier configuración previa que fuerce Next.js. No se requiere servidor Node en producción.

El dominio canónico se configura en `astro.config.mjs` (`https://mmagno.dev`). Si cambia, actualizar también `public/robots.txt`. Sitemap generado automáticamente. Configurar el alojamiento para servir `404.html` ante rutas inexistentes.

Las imágenes y PDF existentes siguen alojados en ImageKit, y los enlaces a proyectos externos se conservan. Su disponibilidad depende de esos proveedores. Los cambios de contenido y el año del pie se actualizan al recompilar.
