import { defineConfig } from 'astro/config';

// Two hosts build this site:
// - Netlify (public site): sets NETLIFY=true during its builds; the site sits at the root.
// - GitHub Pages (working preview): bethanysarana.github.io/home/
// When the custom domain is ready: change the Netlify `site` to the domain.
const onNetlify = process.env.NETLIFY === 'true';
const site = onNetlify ? 'https://letstalkabouthome.netlify.app' : 'https://bethanysarana.github.io';
const base = onNetlify ? '' : '/home';

// The eight finding pages published on day 1 lived under /learning/.
// They now live under /stories/ with the same slugs.
const day1 = ['home-isnt-a-place', 'its-never-the-room', 'no-single-answer', 'when-home-is-lost',
  'more-than-one-home', 'hard-talks-often', 'language-remembers', 'starting-over'];
const redirects = Object.fromEntries([
  ['/learning', `${base}/stories/`],
  ...day1.map((slug) => [`/learning/${slug}`, `${base}/stories/${slug}/`]),
]);

export default defineConfig({
  site,
  base: base || '/',
  trailingSlash: 'always',
  redirects,
});
