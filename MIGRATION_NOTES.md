# Migration notes

Record of how the WordPress page "Lets talk about 'Home'" (post 90) is being rebuilt to `docs/SPEC.md`.
Last updated: 26 November 2026, after the visual redesign of the homepage and Project Gallery.

## Progress

| Phase | Status |
|---|---|
| 1 Foundation | Done |
| 2 Homepage | Done, except the Fieldnotes introduction (needs Phase 7) |
| 3 Project Gallery | Done |
| 4 Stories | Done and redesigned (editorial), except links to What Emerges ideas (needs Phase 5) |
| 5 What Emerges | Not started (source: Report 2's discussion section) |
| 6 Research | Built 26 Nov 2026; placeholders for ethics, full references, 26th person's demographics |
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
| Travellers gallery, intro and tabs | Project Gallery | Done |
| Gallery filters and cards | Project Gallery | Done (layers now combine, per spec) |
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
- Homepage link to the archive: "Project Gallery →" (navigation label)
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
- (Both omissions reversed on 26 Nov 2026: everything is published. Generator: `scripts/make_stories.py`.)

**Participant links** (`src/data/relationships.ts`): a person is linked to a story only where Report 4's section names them. "Complicates" marks Report 4's stated exceptions (Eduardo in 3.1, Theo in 3.3, Bella in 3.5); "Extends" marks Arturo in 3.5 ("a related but distinct pattern"). Bella and Michel are linked in the data but have no card until their artwork arrives. Story-to-story links only where Report 4 connects the sections (3.1↔3.4, 3.3↔3.4). The build fails if a link points at a missing person or story.

**Homepage:** featured stories = the first three findings; change `FEATURED` in `src/components/home/FeaturedStories.astro`.

## Visual redesign: homepage and Project Gallery (26 November 2026)

Source: `docs/DESIGN_BRIEF.md` and `design/references/home-design-directions.png`. Editorial direction for the homepage, archive direction for the Project Gallery. Field-journal touches only in small details (handwritten names, the route motif, the tilted fingerprint prints).

**Design system:** `src/styles/tokens.css`, viewable at `/style-guide/` (not in the menu, not indexed).
- Palette from the WordPress theme presets: ink #111111, white, off-white #FBFAF3, yellow #FFEE58, pale pink #F6CFF4, purple #503AA8, grey #686868. One derived shade, deep purple #2B1F63, for large dark fields.
- Terracotta and cream (from the earlier custom components) are retired, as the brief lists the theme palette only. Their old variable names now point at purple and off-white so the remaining pages still work.
- Type: Newsreader (display serif) + Manrope (body). Caveat for the logo and handwritten names only.
- Corners reduced to 2–4px; no gradient overlays on photographs.

**Homepage:** editorial hero (title, "How do we narrate our own lives?", introduction, photo); Karolina's quote on pink; all eight stories in a varied grid; Belonging / The Shift / Method as a numbered sequence beside the Wonderland photo (all three visible, no tabs); Who I'm talking to with Travellers (26) and the two Phase 2 groups; a Project Gallery band; Where will this go?
- The opening quote is verified: Report 4 §3.1, "Home is a feeling that you carry with you." — Karolina.
- The background paragraph ("As a Doctor of Applied Health Research…") is no longer on the homepage; it belongs on About.
- Story images are the fingerprints of people Report 4 names in each story (`STORY_IMAGE` in `src/data/relationships.ts`, checked at build). Story 6 has no image.

**Project Gallery:** purple opening with the title and 26; Gallery purpose and Interpretation guide side by side (no longer tabs); the same filters and logic; cards show name, fingerprint, final word, colour, shape and word category; backs add the full colour/shape, any extra line printed on the artwork, the three codes and story links.
- Names now appear on cards (brief §7).
- Colour and shape are transcribed from the text printed on each fingerprint, spelling as printed (including "chimey" and "burgandy").
- Michel and Bella now appear with an obvious "Artwork to come" placeholder (brief §12) instead of being hidden, so the archive shows all 26.

**Story visuals (decided by Bethany, 26 Nov 2026):** each story's image will be a piece of data art Bethany is still making. TEMPORARY: until it arrives, the homepage story cards are typographic blocks in palette colours (deep purple, pink, yellow, off-white), with no images. Fingerprints are no longer used as story illustrations. When the artwork arrives, add it under `public/images/stories/<slug>.webp`, add an image field to each story, and update `src/components/home/StoriesGrid.astro`.

**Published in full (Bethany, 26 Nov 2026):** the §3.6 paragraph naming Guilia, Michel, Ellie and Sammy is restored, and those four are now linked to "Hard talks, often". The repeated Sammy paragraph in §3.8 is also restored, as written in Report 4.

**Story 1:** Arturo is linked to "Home isn't a place" alongside Eduardo (both named a place). The WordPress paragraph still says "Only one person names an actual place"; awaiting Bethany's replacement wording.

**Still missing for the archive:** card-back introductions (50–90 words each), Michel's artwork, and Bella's artwork, final word and codes.

**Wording added in the redesign (for approval):**
- Header button "Explore the project" (from the brief); section eyebrows "01 The Stories", "02 The project", "03 The people", "04 Project Gallery"; "Read the story →"
- "Explore the stories" (from the brief)
- Hero photo alt text: "A thatched wooden shelter looking out over bamboo huts and A-frame cabins, with a pot of tea on the table"
- Cards: "Artwork to come", "Final word to come", back button "Back to [name]'s fingerprint", screen-reader text "show more about [name]'s answer"

## Stories redesign (26 November 2026)

Editorial story pages (design brief §8) and an overview of story blocks matching the homepage.

- **Each story keeps one palette colour** everywhere it appears (`src/data/story-tones.ts`).
- **Opening quotes** (`src/data/stories.ts`) are quotes already in each story's Report 4 text, copied exactly. Chosen: Guilia (Home isn't a place), Michel on Stockholm (It's never the room), Pau (No single answer), Eduardo (When home is lost), Ellie (More than one home), Michel on language (Language remembers), Miri (Starting over). "Hard talks, often" has no quote in Report 4, so it opens without one. **TEMPORARY (Bethany, 26 Nov 2026): these quotes need replacing; Bethany will supply new ones later. Edit `openingQuote` in `src/data/stories.ts`.**
- **Evidence box removed (Bethany, 26 Nov 2026):** it reduced the qualitative process to categorisation. Story pages now show a visible placeholder, "How I make sense of it all" (`src/components/stories/ResearchProcessLink.astro`), which becomes a link to The Research automatically once `research/` is ready. The coverage lines were also removed from the story blocks on the homepage and overview. The coverage figures stay in each story's frontmatter (`evidence`) for use on The Research page, and the §4.7 limitation sentences belong there too.
- **The people behind this story:** full archive cards (Michel and Bella with their "to come" placeholders).
- **The overview replaces the WordPress eight-tab component** with the same story blocks as the homepage, showing every story at once; WordPress intro and footer text kept.

**Wording added (for approval):** "From the research", placeholder "The Research · page to come" / "Placeholder: this will link to the research process, how the conversations were recorded and how the analysis was made." / link text "How the conversations were recorded and analysed →", "The people behind this story", "Related stories", "← Previous" / "Next →", "Read the story →", overview eyebrow "The Stories · 26 conversations".

## What Emerges (26 Nov 2026)
- Page `/what-emerges/`, built from Report 2 by `scripts/make_ideas.py` (run: `python3 scripts/make_ideas.py <report2.md> src/content/ideas`). Text copied exactly: opening = §4.1 Summary; each idea = §3 heading + §4 Discussion paragraphs; closing = §4.8 Conclusion. §4.6 and §4.7 are left for The Research page.
- Ideas and sources: 1 Feeling/relationship/activity = §3.1 + §4.2 ¶1, §4.4 ¶1 · 2 Belonging and safety = §3.2 + §4.3 ¶2 · 3 Finding and creating = §3.3, no discussion paragraph · 4 Movement and continuity = §3.5 + §4.2 ¶2, §4.3 ¶1 · 5 Loss = §3.4 + §4.5 · 6 Language = §3.7 + §4.4 ¶2 · 7 Reinvention and identity = §3.8, no discussion paragraph.
- **Needs Bethany:** Report 2 §4 has no paragraph on finding and creating home, or on reinvention and identity. Both show a "Discussion to come" placeholder until she supplies text.
- People per idea: those named in the discussion paragraphs, then the people behind the linked stories. Names link to their card in the Project Gallery (`#p-<id>`).
- Related ideas pairings are Claude's choice; for approval.
- Section captions and in-report cross-references removed (Bethany, 26 Nov 2026). Deleted words only: "in Section 3.7" (Language), "(Section 3.6)" (Loss), "in Section 4.6" (Movement and continuity); listed in `CUTS` in scripts/make_ideas.py.
- Wording added (for approval): "Story"/"Stories", "People", "Related ideas", "Conclusion", placeholder "Discussion to come" / "Placeholder: discussion text for this idea to come."

## The Research (26 Nov 2026)
- Page `/research/`, archive direction. Text in `src/data/research.json`, generated by `scripts/make_research.py` (run: `python3 -I scripts/make_research.py source/wordpress/wordpress-export-2026-11-25.xml <report4.md> src/data/research.json`). Every sentence copied exactly.
- Sources: 01 origins = Report 4 "Project background" + "Objectives"; groups = WordPress "Who I'm talking to". 02 charts = WordPress chart data (`src/data/demographics.ts`, 25 people; matches Report 4's 44% aged 20–24 and two in three female). 03 = WordPress "How a conversation works" + three questions, then Report 4 "Participation" and "Interviews". 04 = WordPress "How I make sense of it all", doodle, marker positions and step texts. 05 = Report 4 "Data analysis" incl. Table 1. 06 = Report 4 §4.4. 07 accordion = WordPress "A note on me" + Report 4 §4.7 proximity paragraph; Report 4 §4.7 sample and coverage paragraphs (replace the WordPress "who I've spoken to" text, which uses the old 25 figures); WordPress "How I'm starting to organise…" + Report 4 §4.7 quote-selection and gallery paragraphs. 08 = placeholders + works named in the site's text.
- Doodle markers are purple (terracotta retired; decision pending). Step 6 keeps the WordPress/doodle wording "Drafting the Story"; the spec's "Cross-participant comparison and iterative theme development" needs Bethany's text.
- **Needs Bethany:** ethics text (consent and recording, anonymity and publication decisions, handling sensitive disclosures, methodological notes); full references; 26th person's demographics.
- **Past tense (Bethany, 26 Nov 2026):** text about the completed traveller conversations is in the past tense. Report 4 "Interviews" verbs changed (list in `TENSE`, scripts/make_research.py). Locals, future plans, researcher facts and the introduction keep their tense.
- **Text to review (not changed):** Report 4 text on this page still mentions "Section 4", "Section 5" and "Section 4.1"; Table 1's intro says "five core theoretical assumptions" but the table has four rows; Report 4 §4.7 repeats the proximity and quote-selection paragraphs (only one of each is used).
- Links into The Research: story pages ("How I make sense of it all" → `#how-i-make-sense`); What Emerges, Movement and continuity ("What this can (and can't) tell you" → `#limitations`); homepage "Who I'm talking to" ("More on what that means →" → `#limitations`) and "Method" ("How the research works →" → `#conversations`); menu and footer.
- Wording added (for approval): section titles "Project origins", "Who took part", "How the analysis was done", "Researcher position and reciprocity", "Ethics and references", subheads "Objectives", "Consent and recording", "Anonymity and publication decisions", "Handling sensitive disclosures", "Methodological notes", "References"; accordion title "Who took part, and who has not", "How the analysis is organised"; "26 conversations"; "On this page"; references caption "Works named in the text on this site, as named there."; placeholders "Placeholder: text to come.", "Placeholder: full references to come.", "Placeholder: demographics for the 26th participant to come."; alt text for the drawing and doodle; link texts "More on what that means →", "How the research works →", "Limitations of the research →".

## Fieldnotes and About (26 Nov 2026)
- `scripts/make_fieldnotes.py` (run: `python3 -I scripts/make_fieldnotes.py source/wordpress/wordpress-export-2026-11-25.xml <report4.md> src/data`) writes `src/data/fieldnotes-wp.json` and `src/data/about.json`. Text copied exactly. The WordPress placeholder quote "lalalalal" is never published.
- **Fieldnotes** `/fieldnotes/`: the four "What I'm loving so far!" cards (text revealed on hover, focus or tap; sideways scroll on phones; purple, pink, yellow and white instead of terracotta) and the two "Emerging feedback" quotes, labelled "Participant feedback". Published reflections appear above them once any exist.
- **Fieldnote format:** one Markdown file per reflection in `src/content/fieldnotes/`, images in `public/fieldnotes/<file name>/`. Up to three layered images at the top (caption and handwritten note each), paragraphs, `✎` lines as handwritten notes, `![alt](/path "Caption")` as captioned photos. Instructions are at the top of `src/content/fieldnotes/format-example.md`, which stays a draft and is shown only on the hidden preview `/style-guide/fieldnote-format/`.
- **About** `/about/`: WordPress intro paragraph and "How do we narrate our own lives?" (moved off the homepage); Report 4 introduction paragraph; the specification's facts as tags; Report 4 "Project background" (Wonderland) and "Envisaged impact" paragraphs; the two strands, titled with the specification's wording, linking to The Stories, What Emerges, The Research, Fieldnotes and the Project Gallery; WordPress "Follow as I experiment…" under strand 2; Report 4 §4.8 first paragraph (knowledge, literature, art). The homepage hero photo is reused.
- **About needs rewriting (Bethany, 26 Nov 2026).** The current page is a stand-in built from existing text; Bethany will supply new About text.
- **Text to review (not changed):** the §4.8 paragraph on About says "the coded, transcript-grounded findings above", which referred to the report.
- Wording added (for approval): "Participant feedback", "Background", "Where it began", "Two strands", card "+" control, preview page title "Fieldnote format (preview)", all placeholder text in format-example.md.

## Homepage quote carousel (26 Nov 2026)
- The Karolina band is now a carousel of ten quotes in the same format (quote, name, story link, fingerprint), chosen by Claude for emotional pull, in this order: Karolina, Eduardo, Michel, Miri, Bella, Sammy, Eduardo, Ellie, Theo, Guilia. Quotes copied exactly from Report 4 §3 by `scripts/make_quotes.py` (`python3 -I scripts/make_quotes.py <report4.md> src/data/home-quotes.json`); change the order or the picks in `PICKS` there.
- Michel and Bella have no artwork yet, so their slides show "Artwork to come".
- Swipe or scroll sideways on phones; ← / → buttons and arrow keys; no autoplay.
- Wording added (for approval): "1 / 10" counter, button labels "Previous quote" / "Next quote" (screen readers only).

## Project Gallery (26 Nov 2026)
- "Visual Archive" renamed "Project Gallery" everywhere on the site, in these notes and in CLAUDE.md (not in Bethany's SPEC.md or DESIGN_BRIEF.md). Address changed from `/visual-archive/` to `/project-gallery/`; the old address redirects (`astro.config.mjs`).
- Homepage hero buttons ("The Stories", "Project Gallery") removed (Bethany, 26 Nov 2026).
- **Carousel pending (Bethany, 26 Nov 2026):** four quotes removed (Eduardo "The home that I call home…", Michel "…Language, I would say, is home.", Miri "I can rebirth myself…", Bella "It's about acknowledging that your time is limited…"). Bethany will supply replacements; the carousel shows six until then.
