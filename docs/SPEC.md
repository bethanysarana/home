# LET'S TALK ABOUT “HOME”
## Website implementation specification for Claude Code

**Project:** Let's Talk About “Home”  
**Implementation target:** GitHub-hosted multi-page website  
**Recommended stack:** Astro, TypeScript, CSS, Markdown/MDX  
**Deployment:** GitHub Pages via GitHub Actions  
**Primary objective:** Migrate, reorganise and extend the existing WordPress website without discarding its content, visual structures or interactions.

---

# 0. INSTRUCTIONS TO CLAUDE CODE

You are building an existing project website into a proper multi-page, interconnected website.

This is NOT a redesign from scratch.

The existing WordPress export is both:
1. A source of project content.
2. The design and interaction prototype for the new website.

The existing layouts, styling, components, interactions, information hierarchy and visual conventions have been deliberately developed. Preserve and extend them.

The purpose of the rebuild is to distribute the existing long-scroll content across dedicated pages, improve navigation, connect related stories and ideas, and create room for the project to develop.

Do not replace existing components with generic website templates merely because they are easier to implement.

## Mandatory working rules

1. Inspect the repository before making changes.
2. Inspect the supplied WordPress XML export and extract its actual content, HTML, CSS, image references and JavaScript behaviour.
3. Reuse existing assets wherever available.
4. Preserve the visual identity and component structures described in this specification.
5. Do not invent participant biographies, quotations, research findings, demographic values or participant classifications.
6. Do not silently change research denominators or reinterpret findings.
7. Use the latest project research information in this specification when it supersedes older WordPress text.
8. Keep participant records separate from their visual presentation. Each participant must have one canonical record.
9. Make all interactive components responsive and keyboard accessible.
10. Do not use placeholder content in the published site.
11. Do not remove content simply because it does not fit the new navigation. Relocate it, archive it, or flag it for editorial review.
12. Do not publish the site until the build and validation checks pass.

If a source asset or piece of information is missing, record it in a migration report. Do not fabricate a replacement.

## First action

Inspect the existing repository and identify:
- Existing project files.
- Existing WordPress export file.
- Existing images and other assets.
- Existing package configuration.
- Existing GitHub Pages configuration.
- Any existing design or content work.

If the repository is empty, scaffold the project using the architecture below.

Create a file called `MIGRATION_NOTES.md` documenting:
- What source material was found.
- What assets were recovered.
- What content was migrated.
- What content remains incomplete.
- Any assumptions or decisions requiring human approval.

---

# 1. WEBSITE INFORMATION ARCHITECTURE

Create the following top-level pages.

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Introduce the project and direct visitors into it |
| The Stories | `/stories/` | Present the eight principal findings as narrative pages |
| Individual story | `/stories/[slug]/` | Develop each finding in detail |
| What Emerges | `/what-emerges/` | Explore the conceptual ideas connecting the stories |
| Visual Archive | `/visual-archive/` | Preserve and develop the existing participant gallery |
| Fieldnotes | `/fieldnotes/` | Personal reflections, project process and participant feedback |
| Individual fieldnote | `/fieldnotes/[slug]/` | Individual reflective articles |
| The Research | `/research/` | Research background, participants, methods, analysis and limitations |
| About | `/about/` | Researcher background, project origins and purpose |

Main navigation:

Home / The Stories / What Emerges / Visual Archive / Fieldnotes / The Research / About

The navigation must be consistent across all pages.

Use actual page links, not the old WordPress in-page anchor navigation.

On mobile, implement an accessible collapsible navigation menu.

## Important distinction

The Stories, What Emerges and Visual Archive pages have different jobs:

- The Stories explain what participants' accounts reveal.
- What Emerges explores the broader ideas and relationships between those accounts.
- The Visual Archive allows visitors to explore individual participants and their visual fingerprints.

These sections must link to one another.

---

# 2. TECHNICAL ARCHITECTURE

Use Astro with TypeScript.

Use:
- Astro for page generation and layouts.
- TypeScript for data models and interactive components.
- Astro components for reusable layouts and presentation.
- Client-side JavaScript only where interaction requires it.
- Markdown or MDX for long-form editorial content.
- CSS variables for the design system.
- GitHub Actions for deployment to GitHub Pages.

Do not introduce a large front-end framework unless a genuine implementation requirement emerges.

## Required directory structure

Create the following structure:

```text
/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── project/
│   │   └── research/
│   ├── participants/
│   ├── diagrams/
│   ├── fonts/
│   └── favicon/
│
├── src/
│   ├── components/
│   │   ├── navigation/
│   │   │   ├── Header.astro
│   │   │   ├── MainNavigation.astro
│   │   │   └── Footer.astro
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── ProjectIntroduction.astro
│   │   │   ├── ProjectSnapshot.astro
│   │   │   └── FeaturedStories.astro
│   │   │
│   │   ├── gallery/
│   │   │   ├── GalleryIntroduction.astro
│   │   │   ├── GalleryFilters.ts
│   │   │   ├── ParticipantGallery.astro
│   │   │   ├── ParticipantCard.astro
│   │   │   └── GalleryInterpretationGuide.astro
│   │   │
│   │   ├── stories/
│   │   │   ├── StoryCard.astro
│   │   │   ├── StoryHeader.astro
│   │   │   ├── StoryEvidence.astro
│   │   │   ├── ParticipantReferences.astro
│   │   │   └── RelatedStories.astro
│   │   │
│   │   ├── research/
│   │   │   ├── DemographicPanel.astro
│   │   │   ├── DemographicCharts.ts
│   │   │   ├── ConversationProcess.astro
│   │   │   ├── AnalysisDiagram.astro
│   │   │   ├── AnalysisStepPanel.astro
│   │   │   └── LimitationsAccordion.astro
│   │   │
│   │   ├── interactions/
│   │   │   ├── PillTabs.astro
│   │   │   ├── ExpandablePanel.astro
│   │   │   ├── QuoteCarousel.astro
│   │   │   └── ScrollToTop.astro
│   │   │
│   │   └── shared/
│   │       ├── SectionHeading.astro
│   │       ├── ContentContainer.astro
│   │       ├── ImageWithCaption.astro
│   │       ├── RelatedLinks.astro
│   │       └── Breadcrumbs.astro
│   │
│   ├── content/
│   │   ├── participants/
│   │   ├── stories/
│   │   ├── ideas/
│   │   ├── fieldnotes/
│   │   └── research/
│   │
│   ├── data/
│   │   ├── participants.ts
│   │   ├── gallery-filters.ts
│   │   ├── demographics.ts
│   │   ├── analysis-steps.ts
│   │   ├── navigation.ts
│   │   └── relationships.ts
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ReadingLayout.astro
│   │   └── ExplorationLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── stories/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── what-emerges/
│   │   │   └── index.astro
│   │   ├── visual-archive/
│   │   │   └── index.astro
│   │   ├── fieldnotes/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── research/
│   │   │   └── index.astro
│   │   └── about.astro
│   │
│   └── styles/
│       ├── tokens.css
│       ├── global.css
│       ├── typography.css
│       ├── components.css
│       └── responsive.css
│
├── scripts/
│   ├── validate-content.ts
│   └── check-links.ts
│
├── MIGRATION_NOTES.md
├── README.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

You may adjust the structure if a technical reason requires it, but retain the separation between content, data, components and pages.

---

# 3. DESIGN SYSTEM

The existing WordPress website uses a light, spacious, warm visual language.

Do not introduce a generic SaaS, corporate portfolio or academic-template aesthetic.

## Typography

Primary typeface: Manrope.

Use the supplied variable font files if available. Otherwise configure a sensible sans-serif fallback.

Body text:
- Approximately 1.125–1.375rem.
- Line height around 1.45–1.55.
- Slight negative letter spacing.
- Comfortable reading width.

Use expressive serif typography selectively for participant words, quotations or visual emphasis where the original design uses it.

## Colours

Create CSS variables using these existing colours:

```css
:root {
  --colour-white: #FFFFFF;
  --colour-charcoal: #2D2D2D;
  --colour-dark: #1A120C;

  --colour-terracotta: #8B402B;
  --colour-terracotta-dark: #733321;

  --colour-cream: #FAF8F5;
  --colour-sand: #E6D2B5;
  --colour-warm-white: #FBFAF3;

  --colour-yellow: #FFEE58;
  --colour-pink: #F6CFF4;
  --colour-purple: #503AA8;
  --colour-grey: #686868;
}
```

Do not force all accent colours into every page. Retain the existing terracotta and cream treatment in components where it is already established.

## Layout dimensions

```css
:root {
  --content-width: 645px;
  --wide-width: 1340px;

  --page-padding: clamp(20px, 4vw, 50px);

  --radius-small: 4px;
  --radius-medium: 8px;
  --radius-large: 12px;
}
```

Create two principal layout types:

**Reading layout**
- Maximum width around 645px.
- Used for long-form text, findings and reflective writing.

**Exploration layout**
- Maximum width around 1340px.
- Used for galleries, charts, diagrams and visual interactions.

Keep generous spacing and avoid unnecessarily dense layouts.

---

# 4. HOMEPAGE IMPLEMENTATION

Route: `/`

Build the homepage using the existing WordPress structures.

## Component 1: Hero

Recreate the existing cover-image design:

- Full-width image.
- Rounded corners.
- Warm dark gradient overlay, concentrated towards the bottom.
- Centred white text.
- Text width around 800px.
- Responsive height and image crop.

Existing heading:

“Understanding place, belonging, and identity”

Existing central question:

“How do we narrate our own lives?”

Retain the project introduction, updating it only where the latest project position requires it.

## Component 2: Project introduction

Rebuild the existing two-column image and text component.

The image sits beside three selectable tabs:

1. Belonging
2. The Shift
3. Method

Clicking a tab changes the text panel without navigating away.

Retain the terracotta pill styling, active state and warm cream text panel.

On mobile, stack the image and text. Tabs must wrap rather than overflow.

## Component 3: Project snapshot

Introduce the completed traveller research:

- 26 conversations.
- Mobile volunteer community.
- Qualitative autobiographical narrative approach.
- Independent research project.

Link to the full research explanation.

Do not describe the project as still recruiting for the completed traveller dataset.

## Component 4: Featured stories

Display a selection of the eight findings.

Use the existing visual style rather than generic corporate cards.

Each preview links to its full story page.

## Component 5: Featured visual archive

Show a small selection of actual participant visual cards.

Each links to `/visual-archive/`.

## Component 6: Fieldnotes introduction

Retain the personal nature of the project and link to Fieldnotes.

## Component 7: Footer

Include navigation, About, research context and contact details only where supplied.

---

# 5. VISUAL ARCHIVE — PRIORITY FEATURE

Route: `/visual-archive/`

This page must preserve the original WordPress gallery and its two-layer filtering system.

It is one of the signature features of the website.

## 5.1 Introduction

Retain the existing introduction:

At the end of each interview, once the conversation was fully developed, participants were asked to capture their intuitive sense of home as a word, colour and shape.

These are described as visual fingerprints of belonging.

Retain the two existing introductory tabs:

- Gallery purpose
- Interpretation guide

The Gallery purpose panel explains that each card represents an individual and that the archive allows individual experiences to be organised into shared themes.

The Interpretation guide explains the distinction between:
- The final word selected at the end of the conversation.
- Earlier, unprompted language used during the conversation.

Retain the dashed-border explanation:

A dashed border means a tag is the researcher's interpretive reading rather than something explicitly stated by the participant.

## 5.2 Gallery filter system

Implement the two existing filter layers.

### Layer 1: Final word

Heading: “The final word”

Caption: “One word, chosen deliberately at the end of each conversation.”

Filters:
- All
- Feeling
- Relational
- Activity
- Place

### Layer 2: Earlier in the conversation

Heading: “Earlier in the conversation”

Caption: “Their own words, before being guided towards a single answer.”

Provide a two-option lens selector:

- Find vs. create
- Place vs. feeling

When the lens changes, update the explanatory caption and the available category filters.

Find vs. create categories:
- All
- Create
- Find
- Both
- Declines

Place vs. feeling categories:
- All
- Feeling
- Blended
- Named a place
- Other

These are the category labels present in the WordPress implementation. Preserve them unless the authoritative updated data requires a correction.

The two filter layers must operate together.

For example:
- Selecting Final word = Feeling.
- Selecting Earlier language = Create.
- The gallery shows participants who satisfy both selected conditions.

Provide an All option for each layer.

Update the result count whenever filters change.

Participants with missing classification data must not be silently classified as “Other”. Treat missing values separately and document them.

Do not duplicate participant cards to make filtering work.

## 5.3 Participant card behaviour

Each participant must have exactly one canonical card and one canonical data record.

The card front must display:
- Original participant artwork.
- Final word or phrase.
- Existing visual presentation.

The card back must display:
- A short biography, ideally 50–90 words.
- Where the person grew up, if known.
- How they started travelling, if known.
- Relevant context about their movement or experience, if shared.
- Optional link to a longer story, where one exists.

Do not invent biographies. If a biography is not supported by source material or publication permission, omit it or display a simple non-biographical reverse with an appropriate message.

### Interaction requirements

Desktop:
- Hover flips the card.
- Keyboard focus can reveal the reverse.

Mobile:
- Tap toggles the card front and back.

Keyboard:
- Use a semantic button or accessible interactive control.
- Provide a clear accessible label.
- Do not require a mouse hover.

Animation:
- Use a smooth 3D flip or equivalent transition.
- Respect `prefers-reduced-motion`.
- Avoid card content becoming unreadable during rotation.

The filter state must remain intact when a card is flipped.

## 5.4 Participant data structure

Create a typed participant model.

Example:

```ts
export interface Participant {
  id: string;
  displayName: string;
  artwork: string;

  finalWord: string;
  finalWordCategory:
    | "feeling"
    | "relational"
    | "activity"
    | "place";

  findCreate:
    | "find"
    | "create"
    | "both"
    | "declines"
    | null;

  placeFeeling:
    | "feeling"
    | "blended"
    | "place"
    | "other"
    | null;

  placeFeelingIsInterpretation?: boolean;

  biography?: string;
  biographyApproved: boolean;

  storySlugs: string[];

  publicationStatus:
    | "approved"
    | "pending"
    | "excluded";
}
```

You may extend this model, but do not remove the distinction between participant statement and researcher interpretation.

Do not expose private research notes, raw interview data or sensitive personal histories through the public data model.

## 5.5 Gallery source data

The WordPress export contains 25 hard-coded gallery cards, not the complete final 26-person dataset.

It includes existing participant names/labels, final words, artwork URLs and some filter classifications.

Use those as migration inputs, not as a definitive replacement for the latest dataset.

Create the data structure for 26 participants, but do not invent the missing participant record.

Mark unavailable data as pending.

The export contains an invalid placeholder image path for Michel. Do not publish it.

Recover the original artwork files from the WordPress media source where possible. Store the recovered files locally under:

`public/participants/`

Use descriptive filenames and update the participant data to reference local assets.

Do not rely on remote WordPress image URLs in the final published website.

---

# 6. THE STORIES

Routes:
- `/stories/`
- `/stories/[slug]/`

Create an overview page displaying all eight findings.

The existing WordPress design uses a tabbed findings component with:
- A headline.
- A narrative explanation.
- An evidence note.

Preserve this as an overview interaction.

Each finding must also have its own dedicated page.

## The eight findings

Use these eight subjects:

1. Home is most often a feeling, relationship or activity rather than a place.
2. What breaks home is often relational or safety-related, rather than material.
3. “Both” conceals several distinct positions on finding and creating home.
4. Loss can remove the premise of finding or creating home.
5. A meaningful minority did not grow up with one stable home.
6. Difficult histories surface in conversations framed around travel.
7. Language can shape how multilingual participants express home.
8. New environments can create opportunities for reinvention.

## Required structure of each finding page

Each page must support:

- Headline.
- Introductory statement.
- Main narrative.
- Participant quotations.
- Linked participant cards.
- Evidence and denominator.
- Contradictions or negative cases.
- Researcher interpretation.
- Limitations and qualifications.
- Related findings.
- Related conceptual explorations.

Use a consistent template but allow narrative variation.

Do not turn every finding into the same repetitive sequence of generic cards.

## Evidence rules

The latest research write-up is authoritative.

Use these current values and qualifications:

| Finding | Evidence |
|---|---|
| Home as feeling/place | 26/26 in word-category coding; broader pattern described as approximately nine in ten |
| Relational or safety-related factors in what breaks home | 17/26 |
| Find/create | 19/26 |
| Childhood home structure | 20/26 |
| Significant difficulty disclosed | 9/26 |
| Language | 3/21 conversations read in depth |
| Reinvention | Small qualitative illustration; retain the latest report's stated coverage and denominator rather than presenting it as a sample-wide prevalence |

Eduardo's experience of loss is one clean, independently corroborated case. It is conceptually important but must not be presented as a common experience or prevalence finding.

Do not copy outdated WordPress statistics into the new website.

---

# 7. WHAT EMERGES

Route: `/what-emerges/`

Create a conceptual exploration page connecting the findings.

Initial topics:

- Home as feeling, relationship and activity.
- Belonging and safety.
- Finding and creating home.
- Movement and continuity.
- Loss and the possibility of home.
- Language and meaning.
- Reinvention and identity.

Each topic should have:
- A concise introduction.
- A developed explanation.
- Links to relevant findings.
- Links to relevant participant records.
- Related topics.

Use a content-driven approach so additional ideas can be added without rebuilding the page.

Do not invent theoretical claims or citations. Only include theoretical material supported by the research source or supplied project material.

---

# 8. FIELDNOTES

Routes:
- `/fieldnotes/`
- `/fieldnotes/[slug]/`

Preserve the existing four-card component:

1. Pause & Reflect.
2. Connection.
3. Research Shift.
4. Redefining Home.

The existing WordPress design uses terracotta cards with a hidden text panel revealed on hover, focus or tap.

Preserve this interaction and its mobile horizontal-scroll behaviour.

Move and develop the following material here:
- Personal reflections.
- Research process reflections.
- Creative experiments.
- Data-driven art development.
- Participant feedback.
- Project updates and historical milestones.

The participant feedback carousel can be retained.

The WordPress export contains two usable feedback quotations and a third placeholder (“lalalalal”).

Do not publish the placeholder.

Only publish feedback that is approved for public use.

Fieldnotes must be editable as individual Markdown or MDX files.

---

# 9. THE RESEARCH

Route: `/research/`

Create a navigable research page with the following sections.

## 9.1 Project origins

Explain:
- The project began while volunteering at Wonderland in Siquijor, Philippines.
- It grew from an interest in how people narrate and make sense of their lives.
- It combines qualitative research with a personal creative experiment.
- The research is independent.

## 9.2 Who took part

Explain the original three intended groups:
- Travellers.
- Locals.
- People in Between.

The completed dataset contains 26 traveller conversations.

Locals and People in Between are possible future comparison cohorts, not completed cohorts.

Retain the existing traveller demographic chart component.

The WordPress export contains three charts:
- Country of origin.
- Sex.
- Age.

Rebuild these charts using the latest validated demographic data.

Do not use the historical chart values without checking them against the 26-person dataset.

Do not invent demographic values.

## 9.3 How conversations work

Preserve the existing image-and-text layout.

Explain:
- Voluntary informal conversations.
- Approximately 30 minutes.
- Relaxed settings such as coffee, walks and shared spaces.
- Audio recording with consent.
- Autobiographical narrative questions.
- Definitions of home, belonging and displacement.
- How places become familiar or meaningful.
- Changes in the meaning of home over time.

## 9.4 How analysis works

Preserve the existing illustrated seven-stage analysis diagram.

The WordPress diagram uses numbered pulsing buttons positioned over an illustration. Selecting a number opens an explanatory panel.

Retain:
- The illustration.
- Seven numbered interactive markers.
- Terracotta buttons.
- Pulsing animation, where motion preferences permit.
- The explanatory panel.
- Close control.

Update the explanatory content to reflect the actual latest research process:

- Transcription.
- Familiarisation with the material.
- Content categorisation.
- Initial inductive coding.
- Code review and refinement.
- Cross-participant comparison and iterative theme development.
- Finalising themes and narratives.

The latest research uses reflexive thematic analysis, informed by Braun and Clarke (2006, 2019).

Explain:
- Repeated close reading.
- Flexible, inductive coding.
- Individual conversation-level coding.
- Cross-participant comparisons.
- Iterative refinement.
- A dated analysis change log.
- AI collaboration during coding and theme development.
- Researcher interpretative decisions and reflexivity.

Do not imply that AI was a second human coder.

## 9.5 Researcher position and reciprocity

Explain:
- The researcher was an embedded member of the community.
- The researcher was not a detached external observer.
- Conversations ended with a structured debrief.
- Emerging patterns were shared with participants as a form of reciprocity.
- Researcher influence and interpretative judgements are acknowledged.

## 9.6 Limitations

Preserve the WordPress accordion design.

Use expandable sections for:
1. A note on me.
2. Who took part and who has not.
3. How the analysis is organised.

Update the content to reflect:
- Self-selected mobile volunteer community.
- Young age profile, with 44% aged 20–24.
- Approximately two-thirds female.
- No completed comparison cohort.
- Uneven coverage across themes.
- Researcher embeddedness.
- Collaborative quote selection.
- AI's role in analysis.
- Limits to transferability and prevalence claims.

Do not present the sample as representative of travellers generally.

## 9.7 Ethics and references

Provide sections for:
- Consent and recording.
- Anonymity and publication decisions.
- Handling sensitive disclosures.
- References.
- Methodological notes.

Do not expose raw recordings, transcripts or private participant information.

---

# 10. ABOUT

Route: `/about/`

Explain the researcher's background and the project's origins.

Use the supplied facts:

- Doctor of Applied Health Research.
- Trained data scientist.
- UCL PhD completed in 2024.
- Mixed-methods research involving prescription data and early cancer detection in UK primary care.
- Three years working with cancer patients and clinicians on UK cancer services tailored to teenagers and young adults.
- Interest in how people narrate and make sense of their lives.
- Project originated while volunteering at Wonderland, Siquijor, Philippines.
- Independent project without university host or grant dependency.

Explain the two concurrent strands:
1. Qualitative research into home, belonging, identity and movement.
2. A personal experiment in reconciling scientist, storyteller and artist while living a nomadic life.

Do not turn this page into a conventional CV.

---

# 11. CROSS-LINKING AND CONTENT RELATIONSHIPS

The website must connect related material.

Implement these relationships using structured data, not manually repeated hard-coded links.

A participant can relate to multiple findings.

A finding can relate to multiple participants.

An idea can relate to multiple findings.

A fieldnote can link to a finding or idea.

Create:

`src/data/relationships.ts`

Define and validate:
- Participant-to-finding relationships.
- Finding-to-participant relationships.
- Finding-to-idea relationships.
- Fieldnote-to-finding relationships.

When a participant card is displayed, provide links to related stories where appropriate.

When a finding page is displayed, show the participant cards that support or complicate it.

When an idea is displayed, show the connected findings.

Do not create links based on unsupported assumptions.

---

# 12. ACCESSIBILITY AND RESPONSIVE BEHAVIOUR

Every component must work at:
- Desktop.
- Tablet.
- Mobile.

Minimum requirements:

- Semantic HTML.
- Keyboard-accessible controls.
- Visible focus indicators.
- Accessible labels.
- Sufficient colour contrast.
- Meaningful image alt text.
- No hover-only functionality.
- Respect reduced-motion settings.
- Responsive typography.
- No horizontal overflow except intentional gallery/carousel scrolling.
- Controls must work with touch.

Use buttons for actions and links for navigation.

Do not use clickable `div` elements where a semantic button is appropriate.

---

# 13. CONTENT MIGRATION RULES

The WordPress XML export is not a complete site backup.

It contains:
- Page/post content.
- Embedded HTML.
- Custom CSS.
- JavaScript.
- Some media references.
- Participant gallery markup.
- Interactive structures.

It does not guarantee that all original media files or WordPress theme settings are available.

Migration procedure:

1. Parse the WordPress XML.
2. Extract the Let's Talk About “Home” content.
3. Ignore all unrelated Mermaid project content.
4. Identify every existing content section.
5. Extract image URLs and download recoverable project assets.
6. Recreate existing custom components in Astro.
7. Move content into the new page structure.
8. Update historical research statements using the latest research position.
9. Maintain a migration record for anything not recovered or not approved.

Do not blindly copy the WordPress HTML and JavaScript into Astro.

Rebuild the behaviour as reusable, accessible components.

Keep a mapping of each original section to its new page in `MIGRATION_NOTES.md`.

---

# 14. BUILD ORDER

Implement the website in this order.

### Phase 1 — Foundation
- Inspect repository.
- Scaffold Astro and TypeScript.
- Configure GitHub Pages.
- Create design tokens.
- Create global layouts.
- Create navigation and footer.
- Verify local build.

### Phase 2 — Homepage
- Hero.
- Belonging / The Shift / Method.
- Project snapshot.
- Featured stories.
- Featured gallery.
- Footer.

### Phase 3 — Visual archive
- Recover participant assets.
- Build participant data model.
- Build filter logic.
- Build two-layer filters.
- Build participant card.
- Build card flip.
- Build interpretation guide.
- Test responsive and keyboard behaviour.

### Phase 4 — Stories
- Build story overview.
- Build reusable story template.
- Add all eight findings.
- Add evidence and denominators.
- Add participant references.
- Add related links.

### Phase 5 — What Emerges
- Build conceptual topic structure.
- Connect findings and participants.
- Add related links.

### Phase 6 — Research
- Project origins.
- Participant context.
- Demographics.
- Conversation process.
- Seven-stage diagram.
- Analysis explanation.
- Researcher position.
- Limitations accordion.
- Ethics and references.

### Phase 7 — Fieldnotes and About
- Four reflective cards.
- Fieldnote index and article template.
- Feedback carousel.
- About page.

### Phase 8 — Validation
- Check all routes.
- Check all internal links.
- Check all images.
- Check all participant records.
- Check filter behaviour.
- Check keyboard accessibility.
- Check mobile layout.
- Run production build.
- Test GitHub Pages deployment.

Do not skip ahead and leave unfinished pages as empty templates.

---

# 15. ACCEPTANCE CRITERIA

The implementation is not complete until all of the following are true.

## Site structure
- All seven top-level navigation destinations exist.
- All pages load directly through their URLs.
- Navigation works on desktop and mobile.
- The site deploys through GitHub Actions.

## Visual identity
- Manrope is used where available.
- The established palette is retained.
- Reading and exploration layouts are distinct.
- Existing component styling is recognisable.
- No generic replacement theme has been introduced.

## Homepage
- Hero is implemented.
- Three-part introduction works.
- Featured findings link correctly.
- Featured participant cards link to the archive.

## Visual archive
- One canonical card per participant.
- Filter layer one works.
- Filter layer two works.
- The two filter layers combine correctly.
- Result count updates.
- Card flip works with mouse, keyboard and touch.
- Missing classifications are handled transparently.
- Dashed-border interpretation convention is retained.
- No placeholder artwork is published.

## Stories
- All eight findings exist.
- Evidence values are correct.
- Qualifications are visible.
- Participant relationships are functional.
- Related links work.

## Research
- Demographic charts use validated data.
- Seven-stage diagram works.
- Analysis explanation reflects the latest method.
- Limitations accordion works.
- Historical statements have been updated.

## Quality
- No broken internal links.
- No broken images.
- No console errors.
- No inaccessible hover-only interactions.
- No horizontal overflow on ordinary mobile page layouts.
- Production build succeeds.
- GitHub Pages deployment succeeds.

---

# 16. REQUIRED DELIVERABLES

When implementation is complete, provide:

1. A working website.
2. A successful production build.
3. GitHub Pages deployment configuration.
4. `README.md` explaining how to run, edit and deploy the site.
5. `MIGRATION_NOTES.md` documenting the source-to-destination mapping.
6. A list of missing or unverified assets.
7. A list of participant data still requiring confirmation.
8. A list of content requiring publication or consent approval.
9. A list of any functionality not completed.

Do not claim that the website is complete if any acceptance criteria remain unmet.

---

# 17. FINAL IMPLEMENTATION PRINCIPLE

The goal is not to make a new website that happens to contain the old project's text.

The goal is to take the website that has already been designed and developed in WordPress, preserve its structures and visual identity, and give the work a better architecture.

Retain the existing design decisions.

Redistribute the long-scroll content.

Develop the participant gallery.

Build the stories into dedicated pages.

Connect participants, findings, ideas and reflections.

Make the research transparent.

The result should feel like the original project becoming a more expansive, navigable and interconnected place—not a replacement for it.