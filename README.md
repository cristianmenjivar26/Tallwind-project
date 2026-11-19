# Tailwind Project

Proyecto de ejemplos responsivos con React, TypeScript, Vite y Tailwind CSS. La página principal enlaza a los ejemplos App, Flex y Grid. Grid muestra una, dos o tres columnas según el ancho de pantalla.

## Desarrollo local

```sh
npm install
npm run dev
```

## Verificación y compilación

```sh
npm run lint
npm run build
```

## Publicación en GitHub Pages

El workflow de GitHub Actions en `.github/workflows/deploy.yml` compila y publica el sitio al hacer push a `main`. En GitHub, habilita **Settings > Pages > Build and deployment > Source: GitHub Actions**. La acción configura la ruta base del proyecto automáticamente para que funcione en GitHub Pages.
