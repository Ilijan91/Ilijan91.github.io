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

The app is configured for a **project site** at `https://<username>.github.io/ilijan-cv-portfolio-web/` (see `base` in `vite.config.ts`).

### Option A: GitHub Actions (recommended)

1. Push the repo to GitHub and ensure the default branch is `main`.
2. In the repo **Settings → Pages**, set **Source** to **GitHub Actions**.
3. On every push to `main`, the workflow in `.github/workflows/deploy.yml` builds and deploys the site.

### Option B: gh-pages package (manual)

1. In **Settings → Pages**, set source to the `gh-pages` branch.
2. Run: `npm run deploy`  
   This builds and pushes `dist/` to the `gh-pages` branch.

### User/org site (`username.github.io`)

If the repo is named `username.github.io`, set `base: '/'` in `vite.config.ts` and deploy as above.

## Content

Edit `src/data/cv.ts` to update experience, skills, education, and contact. Add your CV PDF as `public/Ilijan_Militar_CV.pdf` for the “Download CV” link.
