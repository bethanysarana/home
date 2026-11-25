# House rules for Let's Talk About "Home"

Read this before every change to this repository.

## Bethany's words
- Never rewrite, paraphrase, shorten, tidy or "improve" Bethany's prose or participants' words. Insert text exactly as given, including spelling and punctuation.
- Anything you add yourself (headings, captions, link text, labels) must be marked `[PLACEHOLDER: ...]` until Bethany approves it, unless she supplied the wording.
- If text looks like it has an error, point it out in your reply. Do not fix it in the file.

## How the site works
- Astro site. Content lives in `src/content/<section>/` as Markdown files. Fields are defined in `src/content.config.ts`.
- Sections: `conversations`, `learning`, `art`, `other-side`, `dispatches`.
- `draft: true` keeps a file off the public site. Use it for anything unfinished.
- A section only appears in the menu once it has at least one published (non-draft) item. Never add empty sections to the menu.
- `themes:` tags link items across sections and generate `/themes/<tag>/` pages. Reuse existing tag spellings; list them before inventing new ones.
- Hosting: GitHub Pages, published automatically by `.github/workflows/deploy.yml` on every merge to `main`.
- Current address: https://bethanysarana.github.io/home/ . When a custom domain is added, change `site` and remove `base` in `astro.config.mjs`.

## Permanent links
- Published URLs are permanent because they are cited in essays. Never rename a published file or change its URL. If a move is unavoidable, add a redirect in `astro.config.mjs` (`redirects`).

## Working style
- Bethany works mostly from an iPhone and is new to git. Explain any step she must do herself in plain language, one screen at a time.
- Work on a branch and open a pull request. Run `npm run build` before opening it and fix any errors.
- The repository is public: never commit audio recordings or full transcripts.
