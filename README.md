# Mukundan Ramesh — Portfolio

Personal portfolio built with [Astro](https://astro.build). Static, zero client
framework, ships almost no JavaScript. Dark/light theming, SEO + Open Graph
metadata, and accessibility built in.

## Develop

```bash
npm install      # once
npm run dev      # http://localhost:4321/mukundan_portfolio/
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Editing content

All copy and links live in **`src/data/content.ts`** — name, role, bio,
experience, skills, projects, impact, and social/contact links. Edit values
there; you rarely need to touch the components.

- **Resume:** drop `resume.pdf` into `public/`, then set `resume: 'resume.pdf'`
  in `content.ts`. Leaving it empty hides the "Download Resume" button.
- **Project links:** fill `github`/`demo` per project in `content.ts`. Links
  only render when a URL is present.
- **Social image:** `public/og.png` (1200×630) is the link preview card.

## Project structure

```
src/
  data/content.ts      ← single source of truth for all content
  layouts/Layout.astro ← <head>, SEO/OG meta, fonts, no-flash theme script
  components/           ← Nav, Hero, About, Experience, Skills, Projects, Impact, Contact, Footer
  styles/global.css     ← design tokens (dark + light) and all styling
  lib/url.ts            ← base-path helper for GitHub Pages
public/                 ← favicon.svg, og.png, (resume.pdf)
.github/workflows/deploy.yml ← auto-deploy to GitHub Pages on push to main
```

## Deploy (GitHub Pages)

Deployment is automatic via GitHub Actions. One-time setup:

1. In the repo on GitHub: **Settings → Pages → Build and deployment → Source**,
   choose **GitHub Actions**.
2. Push to `main`. The workflow builds the site and publishes it to
   **https://mukundnaramesh2605.github.io/mukundan_portfolio/**

The `site` and `base` in `astro.config.mjs` are set for this repo name. If you
rename the repo (e.g. to `mukundnaramesh2605.github.io` for a root user site),
update `base` to `/` and `site` accordingly.
