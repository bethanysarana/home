# Let's Talk About "Home"

Website for the project, live at https://bethanysarana.github.io/home/

Built with Astro from the WordPress page "Lets talk about 'Home'". See `docs/SPEC.md` for the specification and `MIGRATION_NOTES.md` for progress, sources and anything awaiting input.

## Publishing

Every merge to `main` rebuilds and publishes the site automatically (about two minutes). Progress shows in the **Actions** tab.

## Editing common things

| To change | Edit |
|---|---|
| A participant's word, codes or biography | `src/data/participants.ts` |
| Gallery filter labels and captions | `src/data/gallery-filters.ts` |
| Which pages appear in the menu | `src/data/navigation.ts` (`ready: true`) |
| Colours, spacing, type sizes | `src/styles/tokens.css` |
| Hero image | `src/data/site.ts` |
| Participant artwork | add `public/participants/<id>.webp` and set `artwork` in `participants.ts` |

## Running it on a computer

```
npm install
npm run dev      # preview at http://localhost:4321/home/
npm run build    # production build into dist/
```
