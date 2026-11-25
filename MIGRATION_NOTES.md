# Migration notes

Record of how the WordPress page "Lets talk about 'Home'" (post 90) is being rebuilt to `docs/SPEC.md`.
Last updated: 25 November 2026, after Phase 4.

## Progress

| Phase | Status |
|---|---|
| 1 Foundation | Done |
| 2 Homepage | Done, except the Fieldnotes introduction (needs Phase 7) |
| 3 Visual Archive | Done |
| 4 Stories | Done, except links to What Emerges ideas (needs Phase 5) |
| 5 What Emerges | Not started (source: Report 2's discussion section) |
| 6 Research | Not started |
| 7 Fieldnotes and About | Not started |
| 8 Validation | Not started |

## Decisions (from Bethany, 25 November 2026)

- Report 4's figures are authoritative wherever they differ from WordPress.
- "Read in depth" covers all 26 conversations. Use 26 as the denominator (language: 3 of 26).
- Eduardo and Arturo both named a place: both stay coded Place.
- What Emerges draws on Report 2's discussion section.
- Participant spelling: Erika (WordPress had Erica).
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
| Per-story limitations beyond the evidence line | Each story shows Report 4's coverage line; the fuller limitations go on The Research (Phase 6) and can be linked from each story then |

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
| Name spelling | Erica | Erika |

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
| Headline findings (8) | The Stories: overview tabs + one page each (same addresses as day 1, /learning/ redirects) | Done |
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
- Story pages: "The people behind this story", "Related stories", "← Previous" / "Next →", tags "Complicates" / "Extends"
- Card back: "The Stories" (navigation label) above story links; round button label "Show artwork"
- Overview panels: link text is each story's own tab label followed by →

## Text to review (kept verbatim, possibly outdated)

- Story 1 (WordPress paragraph): "Only one person names an actual place" — Bethany has confirmed that Eduardo and Arturo both named a place.
- Story 6 (Report 4 §3.6): "Section 4.6 situates this against the literature…" refers to the report, not the website. Could later point to What Emerges.

- Method tab: "I'm interviewing people to explore…" — the traveller dataset is now complete.
- Homepage selection shows the first six cards in WordPress order; change `FEATURED_IDS` in `src/components/home/FeaturedArchive.astro` to choose others.

## Phase 4: The Stories

**Content per story** (`src/content/stories/<slug>.md`):
- Eyebrow, headline and opening paragraph: the WordPress "Headline findings" tab label, quote and paragraph, verbatim.
- Research section: Report 4 §3.x heading and text, verbatim, with quotes.
- Evidence: Report 4's coverage line. Language changed from "3 of 21" to "3 of 26" on Bethany's instruction.

**Left out of the public pages:**
- §3.6, second paragraph ("The range of severity is wide…"): it names participants alongside abuse, alcoholism and bereavement. The finding appears at pattern level and links to no one. Restore it by deleting its entry from `omit` in the generator, if Bethany decides to.
- §3.8, the repeated "Sammy's account adds a sharper mechanism" paragraph (it repeats the paragraph before it).

**Participant links** (`src/data/relationships.ts`): a person is linked to a story only where Report 4's section names them. "Complicates" marks Report 4's stated exceptions (Eduardo in 3.1, Theo in 3.3, Bella in 3.5); "Extends" marks Arturo in 3.5 ("a related but distinct pattern"). Bella and Michel are linked in the data but have no card until their artwork arrives. Story-to-story links only where Report 4 connects the sections (3.1↔3.4, 3.3↔3.4). The build fails if a link points at a missing person or story.

**Homepage:** featured stories = the first three findings; change `FEATURED` in `src/components/home/FeaturedStories.astro`.
