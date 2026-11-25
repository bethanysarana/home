// Gallery filter definitions (specification §5.2).
// Labels, captions and explainers are copied from the WordPress gallery.

export const TIER1 = {
  heading: 'The final word',
  caption: 'One word, chosen deliberately at the end of each conversation.',
  field: 'finalWordCategory',
  options: [
    ['all', 'All'],
    ['feeling', 'Feeling'],
    ['relational', 'Relational'],
    ['activity', 'Activity'],
    ['place', 'Place'],
  ],
} as const;

export const TIER2 = {
  heading: 'Earlier in the conversation',
  caption: 'Their own words, before being guided toward a single answer.',
  lenses: {
    findcreate: {
      label: 'Find vs. create',
      field: 'findCreate',
      explainer: 'Whether they lean toward finding home ready-made, or creating it themselves.',
      options: [
        ['all', 'All'],
        ['create', 'Create'],
        ['find', 'Find'],
        ['both', 'Both'],
        ['declines', 'Declines'],
      ],
    },
    placefeeling: {
      label: 'Place vs. feeling',
      field: 'placeFeeling',
      explainer:
        'How their answer read overall - place or feeling - drawing on the full conversation, not just one direct question.',
      options: [
        ['all', 'All'],
        ['feeling', 'Feeling'],
        ['blended', 'Blended'],
        ['place', 'Named a place'],
        ['other', 'Other'],
      ],
    },
  },
} as const;

export type LensKey = keyof typeof TIER2.lenses;

/** Human label for a coded value, using the WordPress filter labels. */
export const labelFor = (options: readonly (readonly [string, string])[], value: string | null) =>
  value ? options.find(([v]) => v === value)?.[1] ?? value : null;
