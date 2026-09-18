# Impulse Landing — QR Landing V2.2

## Cambios principales
- El navegador demo muestra mejor la experiencia de un sitio publicado:
  - protocolo `https://`
  - dominio visible
  - indicador `LIVE`
  - barra de navegador más realista
- Antes de construir, el usuario escribe el nombre de su proyecto.
- El nombre se refleja automáticamente en:
  - dominio demo
  - navegación
  - hero
  - footer
- Se pueden elegir 4 estilos tipográficos:
  - Modern — Inter
  - Clean — Manrope
  - Tech — Space Grotesk
  - Editorial — DM Serif Display
- La mini landing ahora parece mucho más un sitio real.
- El usuario agrega:
  1. Hero
  2. Servicios
  3. CTA
  4. Footer automático al finalizar
- El CTA principal volvió a la izquierda.
- El botón principal de WhatsApp ahora usa un violeta transparente / glassy.

## Antes de publicar
Edita `script.js`:

```js
const CONFIG = {
  whatsappNumber: "50499999999",
  instagramUrl: "https://instagram.com/impulselanding",
  email: "hola@impulselanding.com"
};
```

## Deploy en Vercel
1. Descomprime el ZIP.
2. Sube los archivos al repositorio.
3. Vercel → Add New → Project.
4. Framework Preset: `Other`.
5. Root Directory: `./`
6. Sin Build Command.
7. Deploy.

`vercel.json` mantiene:
- `/hola`
- `/contacto`
