# House rules for Let's Talk About "Home"

Read this, then `docs/SPEC.md` (the implementation specification) and `docs/DESIGN_BRIEF.md` (the visual redesign brief, with its reference image in `design/references/`), before every change.

## What this site is
A build-up and reorganisation of Bethany's WordPress page "Lets talk about 'Home'", not a replacement for it.
The WordPress site is both the content source and the first working version of the visual identity, layouts and interactions.
Keep the existing experience recognisable. Change its scale and structure, not its identity.

## Sources (in order of authority)
1. Bethany's instructions in conversation, recorded in `MIGRATION_NOTES.md` → "Decisions".
2. The latest research report (Report 4) for all figures, denominators and findings. It is not in this public repo; its published figures are recorded in `MIGRATION_NOTES.md`.
3. `source/wordpress/wordpress-export-2026-11-25.xml`, post 90, for all page text, component structure, CSS and interactions. (The mermaid post is not part of this site.)

## Bethany's words
- Never rewrite, paraphrase, shorten, tidy or "improve" Bethany's prose or participants' words. Insert text exactly as given.
- Do not publish placeholder prose. Missing participant assets show a deliberate, obvious "to come" placeholder (design brief §12). Any wording you add yourself (labels, alt text, link text) goes in `MIGRATION_NOTES.md` → "Wording for approval".
- If text looks wrong, say so in your reply. Do not fix it in the file.

## Data rules
- Never invent participant information, biographies, quotes, codes, demographics or links between participants and findings.
- One canonical record per participant in `src/data/participants.ts`. `null` means not yet coded or not supplied.
- Keep researcher interpretation distinct from what participants said (`placeFeelingIsInterpretation`, dashed border).
- Report 4 is published in full, including named accounts of difficult histories (Bethany's decision, 26 Nov 2026).
- Never commit recordings, transcripts or the research reports.

## How the site works
- Astro + TypeScript. Pages in `src/pages/`, components in `src/components/<area>/`, data in `src/data/`, styles in `src/styles/` (tokens in `tokens.css`).
- Design system: WordPress palette (ink, white, off-white, yellow, pale pink, purple, grey); Newsreader for display, Manrope for body, Caveat only for the logo and field-journal notes. Check `/style-guide/` after changing tokens.
- Three directions: editorial (homepage, stories), archive (Visual Archive, research discovery), field journal (fieldnotes, reflections only).
- `src/data/navigation.ts`: a page appears in the menu only when `ready: true`. Never publish empty templates.
- Hosting: GitHub Pages via `.github/workflows/deploy.yml` on every merge to `main`.
- Address: https://bethanysarana.github.io/home/ . For a custom domain, change `site` and remove `base` in `astro.config.mjs`.

## Permanent links
Published URLs are cited in essays. Never change one; add a redirect in `astro.config.mjs` instead.

## Working style
- Bethany works mostly from an iPhone and is new to git. Explain any step she must do in plain language.
- Bethany does not want pull requests: run `npm run build` and `node scripts/check-links.mjs`, test at phone and desktop width, then push directly to `main`.
- Follow the build order in `docs/SPEC.md` §14 and keep `MIGRATION_NOTES.md` up to date.
