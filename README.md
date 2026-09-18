Build de prueba
Preview Original
# Impulse Landing — V2.3

Esta versión reconstruye la experiencia principal y simplifica el mini constructor.

## Cambios principales

### 1. Hero a pantalla completa
La primera sección ahora ocupa toda la pantalla:
- headline grande
- copy breve
- CTA a WhatsApp
- CTA a trabajos
- enlace discreto hacia el constructor

### 2. Constructor interactivo movido debajo del hero
La experiencia de "construir una landing" ya no compite con el mensaje principal.

### 3. Constructor más simple y amigable
El usuario:
1. escribe el nombre del proyecto
2. elige uno de 3 estilos tipográficos
3. agrega 3 partes esenciales:
   - Presentación / Hero
   - Servicios
   - Contacto / CTA

No hay pasos innecesarios como navegación o footer manuales.

### 4. Vista live más real
Incluye:
- `https://`
- dominio dinámico
- vista desktop
- vista mobile
- contenido adaptado al nombre del proyecto

### 5. Explicación educativa
La interacción ayuda a entender qué es una landing page:
- presenta una idea
- explica lo que ofreces
- guía hacia una acción

### 6. Página general simplificada
- se eliminó el formulario largo
- contacto final más directo
- CTA principal sigue siendo WhatsApp
- trabajos y servicios permanecen

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

El `vercel.json` mantiene:
- `/hola`
- `/contacto`
