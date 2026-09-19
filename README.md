# Impulse Landing

Sitio estático preparado para GitHub y Cloudflare Workers.

## Archivos principales

- `index.html` — estructura del sitio
- `styles.css` y `refinement.css` — diseño adaptable
- `script.js` — WhatsApp e idioma ES/EN
- `favicon.png` — favicon oficial
- `wrangler.jsonc` — configuración de Cloudflare

## Antes de publicar

Abre `script.js` y cambia `whatsappNumber` por el número real, con código de país y sin `+`, espacios ni guiones.

## Publicar con Cloudflare

1. Sube todos los archivos a la raíz de tu repositorio de GitHub.
2. En Cloudflare Workers & Pages, conecta el repositorio.
3. Deja el comando de despliegue como `npx wrangler deploy`.
4. Cloudflare detectará `wrangler.jsonc` y publicará los archivos estáticos.

No incluye archivos ni configuración de Vercel.
