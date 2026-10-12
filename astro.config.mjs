// @ts-check
import { defineConfig } from 'astro/config';

// Project page on GitHub Pages: served at https://<user>.github.io/<repo>/
// `site` + `base` make asset URLs and sitemaps resolve correctly.
export default defineConfig({
  site: 'https://mukundnaramesh2605.github.io',
  base: '/mukundan_portfolio',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
