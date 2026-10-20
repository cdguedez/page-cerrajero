# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [0.1.1] - 2026-10-20

### Added
- Sección de **blog** con Content Collections de Astro: listado en `/blog/` y una página estática por artículo.
- Primer artículo: "Claves para mantener la cerradura de tu casa en buen estado".
- Datos estructurados JSON-LD `BlogPosting` en cada artículo, con llamado a WhatsApp al final.
- Enlace **Blog** en el menú de navegación.
- `BaseLayout.astro`: layout compartido con SEO, Open Graph, header, footer y botón flotante de WhatsApp.
- Sitemap automático con `@astrojs/sitemap` (`sitemap-index.xml`).
- Analítica con `@vercel/analytics`.
- `vercel.json` y `astro.config.mjs` (salida estática) para el despliegue en Vercel.
- `guide-blog.md`: guía paso a paso para publicar artículos nuevos.

### Changed
- Migración del proyecto de **Vite + JavaScript vanilla a Astro** (generación de contenido estático).
- Despliegue movido de GitHub Pages a **Vercel**.
- Estructura del código: la landing pasó a `src/pages/index.astro`, los estilos a `src/styles/` y el script a `src/scripts/`.
- Archivos estáticos (imágenes, `favicon.svg`, `robots.txt`) movidos a `public/`.
- `robots.txt` apunta ahora a `sitemap-index.xml`.
- Los enlaces del menú usan rutas absolutas (`/#servicios`) para funcionar también desde el blog.
- README actualizado con Astro y Vercel.

### Improved
- Accesibilidad (Lighthouse): contraste de color suficiente en los botones de WhatsApp (`.btn-whatsapp` y `.card-cta`).

### Removed
- `CNAME` y `sitemap.xml` manual (los reemplaza el sitemap generado), propios de GitHub Pages.
- Archivos de plantilla de Vite (`counter.js`, `vite.svg`, `javascript.svg`, `icons.svg`).
- Dependencia de Vite como herramienta de construcción directa.
