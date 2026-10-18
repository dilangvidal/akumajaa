# Akumajaa

Landing page del servicio de atención al cliente multicanal: agentes que atienden los
canales del cliente e implementaciones de la plataforma que los unifica.

## Stack

- **Astro 7** en modo estático. No hay servidor en producción: solo HTML y CSS, lo que
  reduce al mínimo la superficie de ataque.
- **Tailwind CSS 4** mediante `@tailwindcss/vite`.
- **TypeScript** en modo estricto.
- **Cero JavaScript** enviado al navegador y cero recursos externos (ni fuentes ni CDN).

## Comandos

```bash
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo en http://localhost:4321
pnpm build       # genera el sitio estático en dist/
pnpm preview     # sirve dist/ para revisarlo antes de publicar
```

## Qué debes reemplazar antes de publicar

Casi todo el contenido editable vive en **`src/config/site.ts`**. Busca los comentarios
`REEMPLAZAR`:

| Dato | Dónde |
| --- | --- |
| Enlace para agendar (Calendly, Cal.com) | `src/config/site.ts` → `contact.bookingUrl` |
| Correo de contacto | `src/config/site.ts` → `contact.email` |
| Teléfono | `src/config/site.ts` → `contact.phone` |
| Ciudad y país | `src/config/site.ts` → `contact.location` |
| Dominio real | `src/config/site.ts` → `url` y `astro.config.mjs` → `site` |
| Canales que realmente cubres | `src/config/site.ts` → `channels` |
| Cifras de la sección oscura | `src/config/site.ts` → `metrics` |

Sobre `metrics`: las cifras actuales son de ejemplo. Si todavía no tienes datos reales,
conviene **quitar esa sección** de `src/pages/index.astro` antes de publicar; una métrica
inventada cuesta más credibilidad de la que suma.

### Color de marca

La paleta está en `src/styles/global.css`, en el bloque `@theme`. Cambia los valores de
`--color-brand-*` y se actualiza todo el sitio. El acento actual es un teal `#0f766e`.

### Logo

Ahora mismo el logo es la letra «A» sobre un cuadro de color, definida en
`src/components/Header.astro`, `src/components/Footer.astro` y `public/favicon.svg`.
Reemplázalos cuando tengas la identidad visual.

## Seguridad

- `public/_headers` trae las cabeceras para Netlify y Cloudflare Pages: CSP,
  HSTS, `X-Frame-Options`, `Permissions-Policy` y políticas cross-origin. Si publicas en
  otro hosting, traslada esas cabeceras a su configuración.
- El HTML incluye además el CSP en una etiqueta `meta`, pero **solo en la compilación de
  producción**: el servidor de desarrollo necesita sus propios scripts para la recarga en
  caliente. `frame-ancestors` y `X-Frame-Options` solo funcionan como cabecera HTTP real,
  por eso viven únicamente en `_headers`.
- `pnpm audit` debe seguir dando cero vulnerabilidades. Revísalo al actualizar.

## Publicar

`pnpm build` deja el sitio en `dist/`. Ese directorio se puede subir tal cual a Netlify,
Cloudflare Pages, Vercel o cualquier hosting estático.
