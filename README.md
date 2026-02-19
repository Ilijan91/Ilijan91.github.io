# Ilijan Militar – Portfolio

Single-page portfolio (SPA) showcasing skills and experience. Built with React, TypeScript, and Vite. Deployable to GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to GitHub Pages

This repo is a **user site** ([Ilijan91.github.io](https://github.com/Ilijan91/Ilijan91.github.io)) — the site is at **https://ilijan91.github.io/** (no subpath). `base` in `vite.config.ts` is set to `'/'`.

### Option A: GitHub Actions (recommended)

1. Push to GitHub and ensure the default branch is `main`.
2. In the repo **Settings → Pages**, set **Source** to **GitHub Actions**.
3. On every push to `main`, the workflow in `.github/workflows/deploy.yml` builds and deploys the site.

### Option B: gh-pages package (manual)

1. In **Settings → Pages**, set source to the `gh-pages` branch.
2. Run: `npm run deploy` — builds and pushes `dist/` to the `gh-pages` branch.

### If you see "Expected a JavaScript module but server responded with MIME type application/octet-stream"

GitHub Pages is serving the **source code** (e.g. from branch `main`) instead of the **built** site. Fix:

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not "Deploy from a branch").
3. Push a commit to `main` so the workflow runs and deploys the built `dist/` folder.
4. Wait for the workflow to finish, then reload https://ilijan91.github.io (hard refresh: Ctrl+Shift+R).

If Source was "Deploy from a branch", the live site was the raw repo (including `index.html` with `/src/main.tsx`), which triggers the MIME type error.

## Content

Edit `src/data/cv.ts` to update experience, skills, education, and contact. Add your CV PDF as `public/Ilijan_Militar_CV.pdf` for the “Download CV” link.
