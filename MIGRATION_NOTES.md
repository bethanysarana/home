# Migration notes

Record of how the WordPress page "Lets talk about 'Home'" (post 90) is being rebuilt to `docs/SPEC.md`.
Last updated: 25 November 2026, after Phases 1–3.

## Progress

| Phase | Status |
|---|---|
| 1 Foundation | Done |
| 2 Homepage | Done, except featured stories (needs Phase 4) and Fieldnotes introduction (needs Phase 7) |
| 3 Visual Archive | Done, except related-story links on cards (needs Phase 4) |
| 4 Stories | Not started |
| 5 What Emerges | Not started (use Report 2's discussion section as well as Report 4's) |
| 6 Research | Not started |
| 7 Fieldnotes and About | Not started |
| 8 Validation | Not started |

## Decisions (from Bethany, 25 November 2026)

- Report 4's figures are authoritative wherever they differ from WordPress.
- "Read in depth" covers all 26 conversations. Use 26 as the denominator (language: 3 of 26).
- Eduardo and Arturo both named a place: both stay coded Place.
- Report 2 has a discussion section to draw on for What Emerges.
- All publication approvals granted (participant feedback quotes included).
- Hero image: the original WordPress cover photo, supplied separately.
- Further missing information is to come from Bethany.

## Source inventory

| Source | Location | Used for |
|---|---|---|
| Implementation specification | `docs/SPEC.md` | Architecture, build order, acceptance criteria |
| WordPress export | `source/wordpress/wordpress-export-2026-11-25.xml` | All page text, components, CSS, interactions, gallery data. Author email addresses removed because the repo is public; nothing else changed |
| Media zip (30 images) | resized into `public/` | Participant artwork, project photo, diagrams |
| Hero photo | `public/images/hero/sarans-office.webp` | Homepage hero |
| Report 4 (latest) | not in repo | Figures, denominators, findings, method, limitations |
| Report 2 (earlier) | not in repo | Cross-checks; its discussion section for What Emerges |

## Assets recovered

- 24 participant artworks → `public/participants/<id>.webp` (900px)
- Wonderland gateway photo (WordPress "The Focus Photo") → `public/images/project/wonderland-gateway.webp`
- Analysis doodle → `public/diagrams/thematic-analysis.webp`
- Conversation drawing (WordPress `Intro_2`) → `public/images/research/conversation-drawing.webp`
- Hero → `public/images/hero/sarans-office.webp`
- Not used yet: `Intro_!`, `Analysis_process`, `20250321_164552-EDIT` (landscape; not Siquijor, not on the current WordPress page)

## Missing or incomplete

| Item | Effect |
|---|---|
| Michel's artwork | Michel's record exists but his card is not shown |
| Bella's artwork, final word and word category | Bella's record exists but her card is not shown |
| Four find/create codes (Report 4: 19 of 26; gallery holds 15 including Bella) | Those people show "Not yet coded" |
| Validated demographics for 26 people (WordPress charts cover 25) | Needed for Phase 6 charts |
| Card-back biographies | Card backs show each person's codes until supplied |
| Contact details | Footer has none |
| Favicon | Browser default icon |
| Participant-to-finding links | Phase 4, from Report 4's attributions |

## Conflicts resolved

| Item | WordPress | Used on the new site |
|---|---|---|
| Participants | 25 | 26 |
| Word category coverage | 25 of 26 | 26 of 26 |
| Find/create | 18 of 26 | 19 of 26 |
| Childhood home | 19 of 26 | 20 of 26 |
| Difficulty | 9 of 27 | 9 of 26 |
| Language | 3 of 21 | 3 of 26 |
| Reinvention | 3 of 27 | 3 of 26 |
| Project status | "Phase 1: In progress" | Traveller dataset complete (not shown on the homepage) |
| Name spelling | Erica | Erica kept as the id; Report 4 spells it Erika. **Needs confirming** |

## Section mapping (WordPress → new site)

| WordPress section | New location | Status |
|---|---|---|
| Cover: heading, background paragraph, question | Home → Hero | Done |
| "Follow as I experiment…" | Home, below hero | Done |
| Ten-button in-page menu | Replaced by site navigation (spec §1) | Done |
| What this project is (Belonging / The Shift / Method) | Home → Project introduction | Done |
| Who I'm talking to: Travellers card | Home → Project snapshot | Done |
| Demographic charts | The Research §9.2 | Phase 6 |
| Phase 2: Locals / People in between | The Research §9.2 | Phase 6 |
| How a conversation works + three questions | The Research §9.3 | Phase 6 |
| How I make sense of it all (seven-step diagram) | The Research §9.4 | Phase 6 |
| Travellers gallery, intro and tabs | Visual Archive | Done |
| Gallery filters and cards | Visual Archive | Done (layers now combine, per spec) |
| Headline findings (8) | The Stories | Phase 4 |
| "Live update: outdated (delete later)" | Archived in the export only; not migrated | — |
| What this can (and can't) tell you | The Research §9.6 | Phase 6 |
| Where will this go? | Fieldnotes or Research | Phase 6/7 |
| What I'm loving so far (4 cards) | Fieldnotes | Phase 7 |
| Emerging feedback (2 quotes; "lalalalal." not migrated) | Fieldnotes | Phase 7 |
| Scroll-to-top button | Every page | Done |
| Comments, "More posts" | Not migrated | — |

## Changes to WordPress behaviour, and why

- **Gallery filters combine.** WordPress let you use one layer at a time; the spec (§5.2) requires both together.
- **Cards flip** to show the person's codes (spec §5.3). Hover flips on mouse devices; tap, click, Enter or Space everywhere.
- **Tabs** are rebuilt as accessible tabs (arrow keys, screen-reader roles) with the same look.
- **Gallery on phones** shows two columns instead of one, so the archive isn't a single 24-card column.
- **Hero text** has a soft shadow so it stays readable over the photo.

## Wording for approval

Wording I added that isn't from WordPress, the spec or the reports:

- Alt text for the Wonderland photo: "A woman walking along a garden path beneath a wooden archway decorated with red discs"
- Card back, for uncoded values: "Not yet coded" (adapted from the WordPress count line "not yet coded on this theme")
- Screen-reader text on each card: "show how this answer was coded"
- Homepage link to the archive: "Visual Archive →" (navigation label)
- Mobile menu button label: "Menu"; skip link: "Skip to content"; scroll button: "Back to top" (from WordPress)

## Text to review (kept verbatim, possibly outdated)

- Method tab: "I'm interviewing people to explore…" — the traveller dataset is now complete.
- Homepage selection shows the first six cards in WordPress order; change `FEATURED_IDS` in `src/components/home/FeaturedArchive.astro` to choose others.
