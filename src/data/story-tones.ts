// Palette tone for each story, by order. Shared by the story blocks and the
// story pages so a story keeps its colour wherever it appears.
export const STORY_TONES = ['purple', 'pink', 'yellow', 'paper', 'purple', 'paper', 'yellow', 'pink'] as const;
export type Tone = (typeof STORY_TONES)[number];
export const toneFor = (order: number): Tone => STORY_TONES[(order - 1) % STORY_TONES.length];
