# Impulse Landing — mini landing para QR

Sitio estático listo para desplegar en Vercel.

## Archivos
- `index.html`
- `styles.css`
- `script.js`
- `favicon.svg`
- `vercel.json`

## Antes de publicar
Abre `script.js` y cambia:

```js
const CONFIG = {
  whatsappNumber: "50499999999",
  instagramUrl: "https://instagram.com/impulselanding",
  email: "hola@impulselanding.com"
};
```

En `whatsappNumber`, usa el código de país + número sin `+`, espacios ni guiones.

## Publicar en Vercel
1. Descomprime esta carpeta.
2. Súbela a un repositorio de GitHub.
3. En Vercel: Add New → Project → Importa el repositorio.
4. Framework Preset: `Other`.
5. Root Directory: `./`
6. No necesitas Build Command.
7. Deploy.

También puedes arrastrar la carpeta a Vercel si usas su flujo de importación manual.

## QR
Cuando el sitio esté publicado, usa como destino del QR una URL corta como:

`https://tudominio.com/hola`

Si quieres que `/hola` funcione como alias de la portada, el `vercel.json` incluido ya lo redirige internamente al `index.html`.
