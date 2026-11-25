// Content relationships (specification §11), held as data rather than
// hand-written links. Every link has a source.
//
// Participant ↔ story: a participant is linked to a story only where Report 4's
// section for that finding names them. Role:
//   supports    – their account illustrates the pattern
//   complicates – Report 4 presents them as the exception or the other end
//   extends     – Report 4 presents a related but distinct pattern
//
// Story 6 (difficult histories) deliberately links no one: the public site
// reports that finding at pattern level only (see MIGRATION_NOTES.md).

import { PARTICIPANTS } from './participants';

export type Role = 'supports' | 'complicates' | 'extends';
export interface StoryLink { participant: string; role: Role }

export const STORY_PARTICIPANTS: Record<string, StoryLink[]> = {
  // §3.1
  'home-isnt-a-place': [
    { participant: 'sammy', role: 'supports' },
    { participant: 'karolina', role: 'supports' },
    { participant: 'guilia', role: 'supports' },
    { participant: 'bella', role: 'supports' },
    { participant: 'eduardo', role: 'complicates' }, // "the clearest exception"
  ],
  // §3.2
  'its-never-the-room': [
    { participant: 'karolina', role: 'supports' },
    { participant: 'soph', role: 'supports' },
    { participant: 'michel', role: 'supports' },
    { participant: 'erika', role: 'supports' },
    { participant: 'smila', role: 'supports' },
    { participant: 'paulina', role: 'supports' },
    { participant: 'bella', role: 'supports' },
  ],
  // §3.3
  'no-single-answer': [
    { participant: 'karolina', role: 'supports' },
    { participant: 'pau', role: 'supports' },
    { participant: 'erika', role: 'supports' },
    { participant: 'soph', role: 'supports' },
    { participant: 'michel', role: 'supports' },
    { participant: 'bella', role: 'supports' },
    { participant: 'paulina', role: 'supports' },
    { participant: 'emma', role: 'supports' },
    { participant: 'theo', role: 'complicates' }, // "the clearest unambiguous exception"
  ],
  // §3.4
  'when-home-is-lost': [{ participant: 'eduardo', role: 'supports' }],
  // §3.5
  'more-than-one-home': [
    { participant: 'anna', role: 'supports' },
    { participant: 'miri', role: 'supports' },
    { participant: 'cloe', role: 'supports' },
    { participant: 'ellie', role: 'supports' },
    { participant: 'bella', role: 'complicates' }, // "the other end of this spectrum"
    { participant: 'arturo', role: 'extends' }, // "a related but distinct pattern"
  ],
  // §3.6 – pattern level only
  'hard-talks-often': [],
  // §3.7
  'language-remembers': [
    { participant: 'karolina', role: 'supports' },
    { participant: 'cloe', role: 'supports' },
    { participant: 'michel', role: 'supports' },
  ],
  // §3.8
  'starting-over': [
    { participant: 'miri', role: 'supports' },
    { participant: 'theo', role: 'supports' },
    { participant: 'sammy', role: 'supports' },
  ],
};

// Story ↔ story, where Report 4 itself connects the findings.
export const RELATED_STORIES: Record<string, string[]> = {
  'home-isnt-a-place': ['when-home-is-lost'], // §3.1 names Eduardo's account as the exception developed in §3.4
  'when-home-is-lost': ['home-isnt-a-place', 'no-single-answer'], // §3.4 opens from §3.3's question
  'no-single-answer': ['when-home-is-lost'],
};

// The fingerprint used as each story's image on the homepage. It must belong
// to someone linked to that story above (checked by validateRelationships).
// Story 6 has no image: it is reported at pattern level only.
export const STORY_IMAGE: Record<string, string | null> = {
  'home-isnt-a-place': 'sammy',
  'its-never-the-room': 'smila',
  'no-single-answer': 'pau',
  'when-home-is-lost': 'eduardo',
  'more-than-one-home': 'cloe',
  'hard-talks-often': null,
  'language-remembers': 'karolina',
  'starting-over': 'theo',
};

// Story ↔ idea (What Emerges) and fieldnote ↔ story are added in Phases 5 and 7.
export const STORY_IDEAS: Record<string, string[]> = {};
export const FIELDNOTE_STORIES: Record<string, string[]> = {};

/** Stories a participant appears in, in story order. */
export const storiesFor = (participantId: string) =>
  Object.entries(STORY_PARTICIPANTS)
    .filter(([, links]) => links.some((l) => l.participant === participantId))
    .map(([slug]) => slug);

/** Throws at build time if a relationship points at something that doesn't exist. */
export function validateRelationships(storySlugs: string[]) {
  const ids = new Set(PARTICIPANTS.map((p) => p.id));
  const problems: string[] = [];
  for (const [slug, links] of Object.entries(STORY_PARTICIPANTS)) {
    if (!storySlugs.includes(slug)) problems.push(`Unknown story "${slug}" in STORY_PARTICIPANTS`);
    for (const l of links) if (!ids.has(l.participant)) problems.push(`Unknown participant "${l.participant}" in "${slug}"`);
  }
  for (const [slug, rel] of Object.entries(RELATED_STORIES))
    for (const r of [slug, ...rel]) if (!storySlugs.includes(r)) problems.push(`Unknown story "${r}" in RELATED_STORIES`);
  for (const slug of storySlugs) if (!(slug in STORY_PARTICIPANTS)) problems.push(`Story "${slug}" has no entry in STORY_PARTICIPANTS`);
  for (const [slug, pid] of Object.entries(STORY_IMAGE))
    if (pid && !STORY_PARTICIPANTS[slug]?.some((l) => l.participant === pid)) problems.push(`STORY_IMAGE for "${slug}" uses "${pid}", who is not linked to that story`);
  if (problems.length) throw new Error('Relationship errors:\n' + problems.join('\n'));
}
