// Join a path onto the configured base URL without double or missing slashes.
// Astro's import.meta.env.BASE_URL may or may not carry a trailing slash.
const base = import.meta.env.BASE_URL;

export const withBase = (path: string): string =>
  `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
