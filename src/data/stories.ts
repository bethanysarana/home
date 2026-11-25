// Editorial extras for the story pages, kept apart from the generated story
// files (src/content/stories/*.md) so regenerating those never loses them.
//
// openingQuote: a quote already present in that story's Report 4 text, chosen
//   to open the page. Text and attribution are copied exactly.

export interface StoryExtras {
  openingQuote?: { text: string; by: string };
}

export const STORY_EXTRAS: Record<string, StoryExtras> = {
  'home-isnt-a-place': {
    openingQuote: { text: '“I\'m not coming back in a house. I\'m coming back to a home and my home is my people, my family.”', by: 'Guilia' },
  },
  'its-never-the-room': {
    openingQuote: { text: '“Everybody looks perfect... I don\'t fit in the suit, I don\'t fit in hipster.”', by: 'Michel, on Stockholm' },
  },
  'no-single-answer': {
    openingQuote: { text: '“There\'s a part that you have to create and a part that you have to find.”', by: 'Pau' },
  },
  'when-home-is-lost': {
    openingQuote: { text: '“I think I prefer not to call something home or belong, for not to lose it again.”', by: 'Eduardo' },
  },
  'more-than-one-home': {
    openingQuote: { text: '“I would never be like, oh, the mountain in Japan... home was our flat.”', by: 'Ellie' },
  },
  // 'hard-talks-often': Report 4 §3.6 contains no direct quotation.
  'language-remembers': {
    openingQuote: { text: '“I would say it\'s like the whole language thing. Language, I would say, is home.”', by: 'Michel' },
  },
  'starting-over': {
    openingQuote: { text: '“I can rebirth myself... no one expects me to be anything because they don\'t know who I was in a different environment.”', by: 'Miri' },
  },
};

export const extrasFor = (slug: string): StoryExtras => STORY_EXTRAS[slug] ?? {};
