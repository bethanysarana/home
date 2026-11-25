// Editorial extras for the story pages, kept apart from the generated story
// files (src/content/stories/*.md) so regenerating those never loses them.
//
// openingQuote: a quote already present in that story's Report 4 text, chosen
//   to open the page. Text and attribution are copied exactly.
// qualifications: complete sentences from Report 4 §4.7 (limitations) that
//   bear on the story. Report 4's older figures (25 of 26, 3 of 21) are not used.

export interface StoryExtras {
  openingQuote?: { text: string; by: string };
  qualifications: string[];
}

/** Report 4 §4.7, applies to every story. */
const QUOTE_SELECTION =
  'Quotes have been selected collaboratively with an eye toward clarity and resonance as well as representativeness, meaning vivid, well-phrased testimony is somewhat more likely to appear here than flatter or more typical testimony conveying the same underlying pattern.';

/** Report 4 §4.7, on the sample. */
const SAMPLE =
  'The sample is self-selected and drawn from a single, mobile volunteer community, which limits generalisability in a specific and structural way rather than only a general one: participants who have already chosen a mobile lifestyle are, plausibly, more likely to describe home in portable and relational terms than a general population would be, making the central finding partly a description of who was asked as well as what was found.';

/** Report 4 §4.7, on the gendered-safety pattern in §3.2. */
const SAMPLE_SKEW =
  'The sample also skews young (44% aged 20-24) and skews female (roughly two in three participants), which should be considered when interpreting any finding, including the gendered-safety pattern in Section 3.2, which is itself drawn from a small number of cases (four) despite its internal consistency.';

export const STORY_EXTRAS: Record<string, StoryExtras> = {
  'home-isnt-a-place': {
    openingQuote: { text: '“I\'m not coming back in a house. I\'m coming back to a home and my home is my people, my family.”', by: 'Guilia' },
    qualifications: [SAMPLE, QUOTE_SELECTION],
  },
  'its-never-the-room': {
    openingQuote: { text: '“Everybody looks perfect... I don\'t fit in the suit, I don\'t fit in hipster.”', by: 'Michel, on Stockholm' },
    qualifications: [SAMPLE_SKEW, QUOTE_SELECTION],
  },
  'no-single-answer': {
    openingQuote: { text: '“There\'s a part that you have to create and a part that you have to find.”', by: 'Pau' },
    qualifications: [QUOTE_SELECTION],
  },
  'when-home-is-lost': {
    openingQuote: { text: '“I think I prefer not to call something home or belong, for not to lose it again.”', by: 'Eduardo' },
    qualifications: [QUOTE_SELECTION],
  },
  'more-than-one-home': {
    openingQuote: { text: '“I would never be like, oh, the mountain in Japan... home was our flat.”', by: 'Ellie' },
    qualifications: [QUOTE_SELECTION],
  },
  'hard-talks-often': {
    // Report 4 §3.6 contains no direct quotation.
    qualifications: [QUOTE_SELECTION],
  },
  'language-remembers': {
    openingQuote: { text: '“I would say it\'s like the whole language thing. Language, I would say, is home.”', by: 'Michel' },
    qualifications: [QUOTE_SELECTION],
  },
  'starting-over': {
    openingQuote: { text: '“I can rebirth myself... no one expects me to be anything because they don\'t know who I was in a different environment.”', by: 'Miri' },
    qualifications: [QUOTE_SELECTION],
  },
};

export const extrasFor = (slug: string): StoryExtras => STORY_EXTRAS[slug] ?? { qualifications: [QUOTE_SELECTION] };
