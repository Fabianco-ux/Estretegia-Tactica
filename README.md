# Estrategia Táctica — Vite + React + TypeScript

Interfaz principal sin sidebar, fondo blanco y tarjetas en degradado azul (azul oscuro → azul neón). Navegación mediante tarjetas y dos botones principales.

## Módulos
- Finanzas — Optimización de costos, proyecciones y control de objetivos
- Producción — Eficiencia de procesos, inventarios y calidad
- Marketing — Campañas, segmentación y predicción de clientes
- RRHH — Gestión del talento y clima laboral
- Innovación — Tendencias, proyectos y desarrollo de productos
- Cumplimiento — Normativas, riesgos y reportes regulatorios

## Requisitos
- Node.js 18+
- GitHub repo con Pages habilitado

## Desarrollo
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy único a GitHub Pages (rama `gh-pages`)
Se utiliza el paquete `gh-pages` para publicar el contenido de `dist` en la rama `gh-pages`. Asegúrate de configurar la base correctamente para tu repositorio.

1. Configura la base del proyecto para Pages (Windows):
```bash
setx VITE_BASE_PATH "/<TU_REPO>/"
```
	- Para este proyecto: `setx VITE_BASE_PATH "/Estretegia-Tactica/"`
	- En macOS/Linux (solo para la sesión actual):
```bash
VITE_BASE_PATH="/<TU_REPO>/" npm run build
```

2. Construye y publica:
```bash
npm run build
npm run deploy
```

3. En GitHub → Settings → Pages, selecciona Source: Branch `gh-pages` y Folder `/` (root).

Notas:
- Para repositorios de usuario (username.github.io), usa `VITE_BASE_PATH=/`.
- En desarrollo local `npm run dev` no requiere `VITE_BASE_PATH`.
