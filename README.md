# Carrillo Recicla — GitHub Pages

Frontend estático con el diseño original del estudio. `docs/` contiene únicamente HTML, CSS y JavaScript público. No contiene respuestas, claves de investigador, claves de Google Sheets ni credenciales de Google.

## Publicación

Crear el repositorio público `carrillo-recicla` en la cuenta `danielcontreras1906c`, con una rama `main`. Publicar esta carpeta y activar Settings → Pages → Deploy from a branch → main → /docs.

El bundle usa rutas relativas y también funciona en otro nombre de repositorio sin reconstrucción. El enlace de investigador es `#investigador` dentro de la misma página.

## Datos

La página llama al servidor actual para guardar las respuestas y leer los resultados protegidos. El servidor conserva las mismas claves, registros y conexión con Google Sheets. El origen permitido de GitHub Pages se configura como `PAGES_ORIGIN=https://danielcontreras1906c.github.io`. No usar comodines en CORS.

## Reconstrucción

En el repositorio del servidor: `node scripts/build-github-pages.mjs`. El script genera el frontend desde las pantallas originales, adapta navegación y llamadas a la API y conserva el enlace completo del repositorio al compartir por WhatsApp. La carpeta pública no incluye código del servidor ni secretos.

Este repositorio también incluye el código legible en `src/`. Para editarlo por separado: `npm install`, modificar las pantallas y ejecutar `npm run build`; después, incluir los cambios de `src/` y `docs/` en el mismo commit. Se requiere Node 22.13 o posterior. Conservar el archivo `docs/.nojekyll` al publicar.
