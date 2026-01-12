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

## Deploy a GitHub Pages
Opción 1 — GitHub Actions (recomendado):
1. En el repositorio, habilita Pages con "GitHub Actions" como fuente.
2. Haz push a `main`. El workflow `.github/workflows/deploy.yml` construye y publica.

Opción 2 — `gh-pages` (manual):
1. Establece `VITE_BASE_PATH=/<repo>/` al construir.
2. Ejecuta:
```bash
setx VITE_BASE_PATH "/<TU_REPO>/"
npm run build
npx gh-pages -d dist
```
3. En Pages, selecciona la rama `gh-pages`.

Nota: Para repos de usuario (username.github.io), usa `VITE_BASE_PATH=/`.
