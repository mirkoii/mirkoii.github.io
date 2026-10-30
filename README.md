# Mirko · Interactive CV

React, strict TypeScript, Vite, Tailwind CSS, Lucide and Motion. A responsive, accessible CV for Mehdi Rostami with an interactive architecture illustration, persistent system-aware theme, project filters and a print layout. Vite base is `/` for https://mirkoii.github.io/.

## Local development

Use Node 24 (`nvm use`), then `npm ci` and `npm run dev`.

- `npm run format:check` — Prettier formatting checks
- `npm run lint` — ESLint and React hooks checks
- `npm test` — content provenance regression checks
- `npm run build` — TypeScript and production bundling
- `npm run preview` — preview the production build

## Editing the CV

Edit `src/data/cv.ts`. Keep factual claims sourced; update `public/sources.html` alongside new evidence. Do not import forked CV template biographies or infer employment history, degrees, tenure or client outcomes. The experience timeline contains repository milestones, not employment. Education is intentionally empty pending verified details. The certificate is labeled as owner-shared repository evidence. No private contact data is included.

Update `index.html` metadata/JSON-LD when changing identity or title. Public assets live in `public/`. No external fonts, runtime APIs, analytics, cookies or backend are required. Print / save CV opens the browser print dialog; select Save as PDF for a portable CV. All project cards print regardless of the active screen filter (see implementation notes if changing filters).

## Review and deployment

CI validates pull requests. Deployment is **manual only**, from `main`, with the explicit approval checkbox enabled. No merge or deployment has been authorized. After reviewing and approving the PR, set Settings → Pages → Source to GitHub Actions, configure required reviewers on the `github-pages` environment, then explicitly approve and dispatch Deploy CV. The workflow does not deploy on push or PR. GitHub environment reviewers provide additional protection where available.

See `docs/verification.md` for checks and review notes. Original starter files were backed up in `/tmp/mirko-original-*` during the rebuild.
