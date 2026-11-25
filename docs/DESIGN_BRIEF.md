# DESIGN AND IMPLEMENTATION BRIEF
## Let's Talk About “Home”
### Visual redesign: Editorial publication × Contemporary digital archive

## 1. Your task

You are redesigning and implementing the visual presentation of the existing website for **Let's Talk About “Home”**.

The desired visual direction is represented in:

`design/references/home-design-directions.png`

Treat this image as the primary visual reference.

The preferred direction combines:
- The editorial / literary aesthetic of the first concept.
- The functional, organised participant archive of the third concept.
- Selected tactile, personal details from the artist's field-journal concept.

The objective is to make the website look as close as reasonably possible to this visual reference while using the actual content, research, interactions and visual identity already developed in WordPress.

**This is a development of an existing project, not a redesign from scratch.**

Do not remove existing content simply because it does not fit a generic template. Reorganise it into a more sophisticated website experience, improve its presentation, and create stronger connections between pages.

The result should feel like an independent editorial publication with a carefully curated digital archive at its centre.

---

## 2. First: inspect the existing project

Before writing or changing code:

1. Inspect the entire repository and identify the current framework, routing, components, styles and build process.
2. Locate and read the WordPress XML export.
3. Ignore all content belonging to the separate Mermaid project.
4. Extract the existing Let's Talk About “Home” content, page structures, images, CSS, JavaScript, interactions and data.
5. Identify the existing gallery filters and their exact category labels and logic.
6. Identify the existing participant cards and visual fingerprints.
7. Identify the existing demographic charts, findings, feedback, analysis diagram and interactive sections.
8. Identify which content has already been updated in the latest research write-up.

Produce an internal migration inventory before implementation. For every existing section, record:
- Original location.
- Original content.
- Original design and interaction.
- Intended new location.
- Required development or improvement.
- Connections to other sections.

Do not discard an existing feature because it is inconvenient to implement.

If source content is missing, incomplete or inconsistent, flag it. Do not fill gaps by inventing information.

The latest research write-up is authoritative where it conflicts with older WordPress progress updates. The completed traveller dataset contains **26 conversations**.

---

## 3. Visual identity: preserve the existing palette

The existing WordPress palette is the foundation. Do not replace it with a generic neutral palette or introduce an unrelated brand identity.

Use these existing colours:

| Colour | Hex | Intended use |
|---|---|---|
| Yellow | `#FFEE58` | Accent fields, highlights, visual emphasis |
| Pale pink | `#F6CFF4` | Soft colour panels, card details, editorial accents |
| Purple | `#503AA8` | Strong accent, links, selected states, visual contrast |
| Grey | `#686868` | Secondary text, captions, metadata |
| Off-white | `#FBFAF3` | Warm page backgrounds and panels |
| White | `#FFFFFF` | Main content surfaces |
| Near-black | Existing WordPress value | Main typography and contrast |

Use the original CSS to confirm the precise near-black value.

### Important colour direction

The mockup has a warm, atmospheric appearance, with substantial off-white surfaces and dark areas.

Recreate that atmosphere using the existing palette:
- Use off-white and white as the principal surfaces.
- Use near-black for strong typography.
- Use purple for selected accents and dark visual fields.
- Use yellow and pale pink as deliberate moments of colour.
- Keep colour blocks relatively large and intentional rather than limiting colour to tiny decorative details.

Do not automatically introduce forest green, terracotta, beige or other new brand colours because they appear in generated reference imagery. If the original WordPress CSS contains additional established colours, audit them before deciding whether to retain them.

The design should be colourful but sophisticated. Avoid making every section a different colour.

---

## 4. Typography

Typography is one of the most important differences between the existing site and the reference.

The existing Manrope font should remain part of the design system, especially for body text and functional interface elements.

Introduce a complementary expressive serif display typeface for:
- Homepage headlines.
- Section headings.
- Large quotations.
- Editorial story titles.
- Selected pull quotes.

The pairing should feel literary, contemporary and human.

Desired characteristics:
- Large, confident display headlines.
- Clear differences between display, section, body and caption typography.
- Generous line-height for long-form reading.
- Narrower text columns for essays and stories.
- Strong visual contrast between headlines and body copy.
- Occasional italic serif emphasis.

Avoid:
- Generic corporate sans-serif headings.
- Excessive font weights.
- Too many different typefaces.
- Tiny body text.
- Long uninterrupted paragraphs spanning the full screen width.

Body text should remain comfortable to read, approximately 17–19px on desktop, with responsive adjustments for mobile.

---

## 5. Overall layout and composition

The current site feels too much like a series of simple content blocks.

Develop a more varied editorial composition.

Use:
- Asymmetric grids.
- Large editorial image areas.
- Carefully controlled whitespace.
- Overlapping image and text compositions where appropriate.
- Full-width visual sections.
- Narrow reading columns.
- Pull quotes.
- Small annotations and captions.
- Distinct page introductions.
- Occasional visual interruptions between longer sections.

Do not make every section a centred heading followed by a paragraph.

Do not use the same card layout everywhere.

The site should feel intentionally composed, but not overdesigned.

### Navigation

Create a restrained, elegant navigation system.

The project name/logo should sit on the left. Main navigation should provide clear access to:
- Stories
- Gallery / Visual Archive
- Findings
- About

The exact route names should be aligned with the existing site architecture.

Include a clear but understated call to explore the project.

The navigation should be responsive and remain easy to use on mobile.

---

# 6. Homepage: reproduce the editorial concept

The homepage should be the closest implementation of the first visual direction in the reference image.

### Opening hero

Create a large, atmospheric opening section.

Layout:
- Project title: “Let's Talk About ‘Home’”.
- A strong editorial headline using the display serif.
- A short introductory description.
- A large, evocative photograph or existing project image.
- A carefully composed image/text relationship rather than a standard centred hero.

Use the actual existing project introduction. Do not replace it with generic marketing copy.

The opening should immediately communicate that the project explores how people understand, experience and create home, belonging and connection.

### Opening quotation

Below the hero, create a visually distinct quotation section.

Use an actual participant quotation from the existing research material.

The quote:

“Home is a feeling that you carry with you.”

may be used only if this exact wording and attribution are verified against the source data.

Give the quotation generous space, expressive typography and a subtle visual treatment.

### Explore the stories

Introduce the project stories through a visually strong section.

Use actual findings and participant material.

Create a curated grid of story cards with:
- An image or visual.
- A short title.
- A brief description.
- A clear route to the full story.

Use varied card proportions where appropriate.

### Project introduction

Retain and develop the existing introductory material:
- Belonging.
- The Shift.
- Method.

These are existing conceptual elements and should remain recognisable.

Use a more editorial presentation rather than three generic rectangular cards.

### Who I'm talking to

Retain the three existing groups:
- Travellers.
- Locals.
- People in Between.

Make the structure clear while explaining that the current completed dataset consists of 26 traveller conversations. Do not imply that local and in-between comparison datasets have already been collected.

### Homepage objective

The homepage should invite exploration. It should not attempt to reproduce every piece of research content.

Provide strong links to:
- Stories.
- The Visual Archive.
- What Emerges / Findings.
- Research and Method.
- About.

---

# 7. Visual Archive: the signature feature

This is one of the most important areas of the website.

It should combine the functionality of the existing WordPress gallery with the visual quality of the third reference concept.

### Archive introduction

Create a distinctive opening area with:
- A clear title.
- A short explanation of the archive.
- The number of completed conversations: 26.
- A short statement about how individual experiences contribute to a collective understanding of home.

### Filters

Preserve the exact existing WordPress gallery filter categories and filtering logic.

Do not invent new categories.

The original gallery allows visitors to explore categorical outputs of the initial analysis, for example, whether home was described as a feeling or a place.

Inspect the original WordPress implementation to recover the actual labels, definitions and mappings.

Retain the distinction between:
1. The final word or visual representation selected at the end of the conversation.
2. Earlier, unprompted descriptions of home during the conversation.

These represent different stages of the conversation and must not be collapsed into one category.

Filters should:
- Be easy to understand.
- Show their selected state clearly.
- Support multiple categories where the original logic permits.
- Work without reloading the page.
- Be keyboard accessible.
- Work on mobile.

### Participant cards

There should be one card per participant.

Do not duplicate participants to make category browsing easier.

Each card should have two sides.

**Front of card**
- Participant's existing visual fingerprint.
- Original word.
- Original colour.
- Original shape.
- Relevant existing categorical output.
- Participant identifier or pseudonym, following the source material's naming conventions.

Preserve the original visual fingerprints. Do not replace them with generic stock imagery or generic profile illustrations.

**Back of card**
Reveal a short participant introduction.

This should describe, where the source material supports it:
- Where the person grew up.
- How they began travelling.
- Relevant context about their journey.
- Their relationship with home, place or belonging.

Keep introductions concise, approximately 50–90 words.

Only use information supported by the participant material and permitted by the project's consent and publication arrangements.

Do not invent biographies or infer personal histories from a quotation.

### Interaction

Desktop:
- Hover over a card to reveal the reverse.
- Use a subtle, smooth flip transition.
- Avoid excessive animation or exaggerated 3D effects.

Mobile:
- Tap to reveal the reverse.
- Provide an obvious way to return to the front.

Accessibility:
- Cards must be keyboard accessible.
- The flip must not depend on hover alone.
- Screen readers must be able to access both sides.
- Respect reduced-motion preferences.

### Visual design

Make the gallery feel curated and visually rich.

Use:
- An organised but varied grid.
- Consistent card proportions.
- Large visual fingerprints.
- Deliberate whitespace.
- Clear category controls.
- Subtle borders and shadows where useful.

Avoid a generic dashboard or database appearance.

If a participant has an appropriate longer story, allow the card to link to that story.

---

# 8. Stories and findings

Use the editorial direction for the findings and individual story pages.

The research should feel like a collection of carefully written editorial essays rather than a conventional academic thesis.

Retain all eight substantive findings from the latest research write-up.

These include:
1. Home is often understood as a feeling, relationship or activity rather than simply a place.
2. What breaks a sense of home is often relational or safety-related.
3. The distinction between finding and creating home conceals several different positions.
4. Loss can remove the premise of finding or creating home.
5. A meaningful minority did not grow up with one stable home.
6. Difficult histories can emerge in conversations about travel and home.
7. Language can shape how multilingual participants describe home.
8. New environments can create opportunities for reinvention.

These should be presented as distinct, explorable stories.

### Story-page layout

Each story should have:
- An expressive title.
- A short introduction.
- A strong participant quotation.
- A narrative explanation.
- Supporting participant examples.
- Relevant quantitative context where appropriate.
- Links to related participants in the Visual Archive.
- Links to related findings.

Use large pull quotes and carefully paced text.

Include more detailed evidence and qualifications in expandable sections where useful.

### Research integrity

Preserve all original denominators and qualifications.

Do not present a qualitative pattern as a universal claim.

For example:
- The completed dataset contains 26 conversations.
- Different themes have different coverage.
- Some findings are based on a single significant case.
- The language observation is based on a small subset.

Do not invent statistical certainty.

---

# 9. Artist's field-journal influence

Use this visual language selectively, not throughout the whole site.

It should appear particularly in:
- Fieldnotes.
- Personal reflections.
- Project development.
- Travel-related observations.
- Selected transitions between research sections.

Possible treatments:
- Photographs with captions.
- Layered images.
- Small handwritten-style annotations.
- Sketches and fragments.
- Simple map or route motifs.
- Collage-like image arrangements.
- Occasional irregular image frames.

These details should feel personal and purposeful.

Do not make the site look like a scrapbook template.

Do not add decorative travel imagery where it does not contribute to the content.

---

# 10. Research and Method page

The research page should be more structured and restrained than the homepage.

Retain and improve the existing WordPress material:
- How a conversation works.
- Who participated.
- Demographic charts.
- Exploration questions.
- How I make sense of it all.
- The visual fingerprint explanation.
- The seven-stage analysis-process diagram.
- Interpretation guide.
- Researcher position.
- What this can and cannot tell you.

Use excellent information design.

Demographic charts should be readable, accurately labelled and based on the original data.

Retain the distinction between participant statements and researcher interpretation. Preserve the existing dashed-border convention if it is part of the original design system.

Explain the researcher's embedded position and the role of the AI collaborator transparently.

The research page should make the project credible without forcing every visitor to read an academic report.

---

# 11. Fieldnotes and feedback

Retain the existing content:
- What I'm loving so far.
- Pause & Reflect.
- Connection.
- Research Shift.
- Redefining Home.
- Emerging feedback.
- Participant reflections.

Present these in a more intimate editorial style.

Use expandable sections where the original content is lengthy.

Do not fabricate participant feedback or make unattributed quotations.

---

# 12. Imagery and visual assets

Use existing WordPress media and project imagery wherever possible.

Before sourcing or generating new images:
1. Audit existing assets.
2. Identify their intended use.
3. Preserve original participant-created visual material.
4. Check publication permissions.

Do not substitute participant visual fingerprints with stock photography.

For general atmospheric photography, prioritise authentic, natural imagery over generic corporate travel stock.

Use consistent image treatment:
- Thoughtful cropping.
- Consistent aspect ratios within a component.
- High-quality images.
- Avoid excessive rounded corners.
- Avoid generic image overlays and gradients.

If an image is unavailable, create a deliberate placeholder that makes the missing asset obvious during development. Do not silently invent a replacement participant image.

---

# 13. Interaction and animation principles

The website should feel polished and responsive, not gimmicky.

Use subtle transitions for:
- Navigation states.
- Gallery filters.
- Participant card flips.
- Expandable content.
- Image reveals.
- Page transitions, if supported by the existing framework.

Keep animations short and purposeful.

Respect reduced-motion preferences.

Do not introduce:
- Constant parallax.
- Unnecessary scroll-triggered animation.
- Autoplay video.
- Excessive cursor effects.
- Interactions that make reading harder.

All essential content must remain accessible without animation.

---

# 14. Responsive design

The visual reference is desktop-oriented, but the website must be designed properly for mobile rather than simply shrinking the desktop layout.

Desktop:
- Use generous margins.
- Allow asymmetric layouts.
- Use larger image compositions.
- Use multi-column gallery grids.

Tablet:
- Reduce grid columns.
- Rebalance text and image proportions.
- Keep headings expressive.

Mobile:
- Use a single-column editorial flow.
- Keep navigation compact.
- Ensure body text is readable.
- Convert hover interactions to tap interactions.
- Ensure gallery filters remain usable.
- Avoid horizontal overflow.
- Keep visual fingerprints prominent.

Test at approximately 375px, 768px, 1024px and 1440px widths.

---

# 15. Technical implementation

First inspect the existing framework and repository.

Preserve the existing architecture if it is suitable. Do not migrate frameworks merely for aesthetic reasons.

If the project already uses Astro, continue using Astro.

Implement the design using reusable components and centralised design tokens.

Suggested component groups:
- SiteHeader
- SiteFooter
- EditorialHero
- QuoteFeature
- SectionIntroduction
- StoryCard
- StoryLayout
- ParticipantCard
- ParticipantArchive
- ArchiveFilters
- VisualFingerprint
- FindingFeature
- PullQuote
- DemographicChart
- MethodDiagram
- ExpandableContent
- FieldnoteCard

Use structured content data so participant records, findings and cross-links are maintainable.

Do not hardcode participant content separately into multiple pages.

Ensure all existing working interactions are preserved or deliberately improved.

---

# 16. Implementation sequence

Do not attempt to redesign every page at once.

Work in this order:

### Phase 1 — Audit
- Inspect the existing project.
- Read the WordPress export.
- Inventory existing content and components.
- Identify original filters, categories, visual fingerprints and interactions.
- Inspect the visual reference image.

### Phase 2 — Design system
Implement:
- Colour tokens.
- Typography.
- Spacing scale.
- Grid system.
- Image treatment.
- Buttons and links.
- Navigation.
- Card styles.
- Responsive rules.

Build a small style-guide page or development route so the visual system can be checked before applying it everywhere.

### Phase 3 — Homepage
Implement the editorial homepage as closely as possible to the first visual reference.

### Phase 4 — Visual Archive
Implement the participant grid, original filters, visual fingerprints and interactive card backs.

This is a signature feature and should receive particular attention.

### Phase 5 — Stories and Findings
Implement the editorial story layouts and cross-linking.

### Phase 6 — Research and Fieldnotes
Migrate and redesign the remaining content.

### Phase 7 — Quality assurance
Check:
- Content accuracy.
- Links.
- Filters.
- Card interactions.
- Responsive layouts.
- Accessibility.
- Performance.
- Build errors.
- Missing assets.

---

# 17. Visual quality acceptance criteria

Do not consider the task complete just because the site builds successfully.

The result should satisfy these visual criteria:

- The homepage clearly resembles the editorial composition in the reference image.
- Typography has a strong, recognisable editorial character.
- The original palette is retained and used intentionally.
- The site has more visual rhythm than the original WordPress presentation.
- Pages do not all look like variations of the same generic template.
- The Visual Archive feels like a curated collection, not a database.
- Participant cards are visually distinctive and interactive.
- Long-form stories are comfortable and engaging to read.
- The research pages are clear, structured and credible.
- The fieldnotes have a more personal visual character.
- Mobile layouts are designed, not merely compressed.
- Existing WordPress content and meaningful interactions have been retained.

Compare the implementation against the supplied reference image throughout development.

If the result looks generic, visually flat, or like a standard template with the project title added, it is not finished.

---

# 18. Final instruction

Make design decisions confidently within this brief.

Do not stop after creating a design proposal or a collection of placeholder components. Implement the working website.

Do not replace existing content with invented sample content.

Do not simplify the project into a conventional portfolio or academic thesis website.

The site should communicate three things simultaneously:

1. This is a thoughtful, independent qualitative research project.
2. This is a collection of real people's stories and experiences.
3. This is also a personal, creative exploration of home, belonging, movement and identity.

The desired result is an elegant editorial publication with a distinctive interactive archive at its centre.

**Use the supplied visual reference as the aesthetic target, the WordPress export as the source of existing content and design decisions, and the latest research write-up as the authority for research accuracy.**