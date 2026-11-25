import { defineConfig } from 'astro/config';

// Free GitHub Pages address for the repo bethanysarana/home.
// When the custom domain is ready: set site to the domain and remove `base`.
export default defineConfig({
  site: 'https://bethanysarana.github.io',
  base: '/home',
  trailingSlash: 'always',
});
