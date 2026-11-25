import { defineConfig } from 'astro/config';

// Free GitHub Pages address for the repo bethanysarana/home.
// When the custom domain is ready: set `site` to the domain and remove `base`.
const base = '/home';

// The eight finding pages published on day 1 lived under /learning/.
// They now live under /stories/ with the same slugs.
const day1 = ['home-isnt-a-place', 'its-never-the-room', 'no-single-answer', 'when-home-is-lost',
  'more-than-one-home', 'hard-talks-often', 'language-remembers', 'starting-over'];
const redirects = Object.fromEntries([
  ['/learning', `${base}/stories/`],
  ...day1.map((slug) => [`/learning/${slug}`, `${base}/stories/${slug}/`]),
]);

export default defineConfig({
  site: 'https://bethanysarana.github.io',
  base,
  trailingSlash: 'always',
  redirects,
});
