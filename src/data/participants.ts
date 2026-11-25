// Canonical participant records (specification §5.4).
//
// Sources:
// - finalWord, finalWordCategory, findCreate, placeFeeling and the
//   interpretation flag are copied from the WordPress gallery markup
//   (source/wordpress/…, post 90, #gallery-grid), in the WordPress order.
// - Bella is the 26th participant in the latest research report (Report 4)
//   and is not in the WordPress gallery. Only what Report 4 states is recorded.
//
// Nothing here is inferred. `null` means "not yet coded" or "not supplied".
// Do not add biographies, quotes or codes without Bethany's source material.

export type FinalWordCategory = 'feeling' | 'relational' | 'activity' | 'place';
export type FindCreate = 'find' | 'create' | 'both' | 'declines';
export type PlaceFeeling = 'feeling' | 'blended' | 'place' | 'other';
export type PublicationStatus = 'approved' | 'pending' | 'excluded';

export interface Participant {
  /** Stable id; also the artwork filename. */
  id: string;
  /** Internal name. Not displayed on the public site (WordPress never showed names). */
  displayName: string;
  /** Path under /public, or null if the artwork has not been supplied. */
  artwork: string | null;

  finalWord: string | null;
  finalWordCategory: FinalWordCategory | null;
  findCreate: FindCreate | null;
  placeFeeling: PlaceFeeling | null;
  /** True where the place/feeling code is the researcher's interpretive read. */
  placeFeelingIsInterpretation?: boolean;

  biography?: string;
  biographyApproved: boolean;

  /** Findings this person supports or complicates (filled in Phase 4). */
  storySlugs: string[];

  publicationStatus: PublicationStatus;
  /** Anything outstanding for this record, listed in MIGRATION_NOTES.md. */
  pendingNote?: string;
}

type Row = Omit<Participant, 'biographyApproved' | 'storySlugs' | 'publicationStatus'> &
  Partial<Pick<Participant, 'publicationStatus'>>;

const rows: Row[] = [
  { id: 'guilia', displayName: 'Guilia', artwork: 'participants/guilia.webp', finalWord: 'The name of my sister', finalWordCategory: 'relational', findCreate: 'find', placeFeeling: 'other' },
  { id: 'karolina', displayName: 'Karolina', artwork: 'participants/karolina.webp', finalWord: 'Safe', finalWordCategory: 'feeling', findCreate: 'both', placeFeeling: 'feeling' },
  { id: 'sian', displayName: 'Sian', artwork: 'participants/sian.webp', finalWord: 'Loved', finalWordCategory: 'feeling', findCreate: 'both', placeFeeling: 'feeling' },
  { id: 'erica', displayName: 'Erica', artwork: 'participants/erica.webp', finalWord: 'Dancing to any kind of music with souls', finalWordCategory: 'activity', findCreate: 'both', placeFeeling: 'feeling', pendingNote: 'Spelled "Erica" in WordPress and "Erika" in Report 4.' },
  { id: 'pau', displayName: 'Pau', artwork: 'participants/pau.webp', finalWord: 'where love is free', finalWordCategory: 'feeling', findCreate: 'both', placeFeeling: null },
  { id: 'shila', displayName: 'Shila', artwork: 'participants/shila.webp', finalWord: 'A place to be chill but also make intense things', finalWordCategory: 'activity', findCreate: null, placeFeeling: null },
  { id: 'anna', displayName: 'Anna', artwork: 'participants/anna.webp', finalWord: 'Love', finalWordCategory: 'feeling', findCreate: null, placeFeeling: null },
  { id: 'michel', displayName: 'Michel', artwork: null, finalWord: 'Security', finalWordCategory: 'feeling', findCreate: 'find', placeFeeling: 'other', publicationStatus: 'pending', pendingNote: 'Artwork missing (WordPress had a placeholder image path).' },
  { id: 'soph', displayName: 'Soph', artwork: 'participants/soph.webp', finalWord: 'friends', finalWordCategory: 'relational', findCreate: 'find', placeFeeling: 'place' },
  { id: 'lilia', displayName: 'Lilia', artwork: 'participants/lilia.webp', finalWord: 'A sense of belonging', finalWordCategory: 'feeling', findCreate: null, placeFeeling: null },
  { id: 'smila', displayName: 'Smila', artwork: 'participants/smila.webp', finalWord: 'comfortable', finalWordCategory: 'feeling', findCreate: 'both', placeFeeling: 'feeling' },
  { id: 'arturo', displayName: 'Arturo', artwork: 'participants/arturo.webp', finalWord: "A place I like to come back to when I'm tired and enjoy", finalWordCategory: 'place', findCreate: 'both', placeFeeling: 'blended' },
  { id: 'theo', displayName: 'Theo', artwork: 'participants/theo.webp', finalWord: 'the people', finalWordCategory: 'relational', findCreate: 'create', placeFeeling: 'blended' },
  { id: 'stuart', displayName: 'Stuart', artwork: 'participants/stuart.webp', finalWord: 'love', finalWordCategory: 'feeling', findCreate: null, placeFeeling: null },
  { id: 'paulina', displayName: 'Paulina', artwork: 'participants/paulina.webp', finalWord: 'where I am', finalWordCategory: 'feeling', findCreate: 'create', placeFeeling: 'feeling' },
  { id: 'noa', displayName: 'Noa', artwork: 'participants/noa.webp', finalWord: 'love', finalWordCategory: 'feeling', findCreate: 'both', placeFeeling: 'feeling' },
  { id: 'emma', displayName: 'Emma', artwork: 'participants/emma.webp', finalWord: 'Dance party', finalWordCategory: 'activity', findCreate: 'create', placeFeeling: 'feeling' },
  { id: 'eduardo', displayName: 'Eduardo', artwork: 'participants/eduardo.webp', finalWord: 'A beach in venezuela', finalWordCategory: 'place', findCreate: 'declines', placeFeeling: 'place', placeFeelingIsInterpretation: true },
  { id: 'miri', displayName: 'Miri', artwork: 'participants/miri.webp', finalWord: 'Warmth', finalWordCategory: 'feeling', findCreate: null, placeFeeling: null },
  { id: 'ellie', displayName: 'Ellie', artwork: 'participants/ellie.webp', finalWord: 'safety', finalWordCategory: 'feeling', findCreate: null, placeFeeling: null },
  { id: 'cloe', displayName: 'Cloe', artwork: 'participants/cloe.webp', finalWord: 'safe place', finalWordCategory: 'feeling', findCreate: null, placeFeeling: null },
  { id: 'nora', displayName: 'Nora', artwork: 'participants/nora.webp', finalWord: 'effortless belonging', finalWordCategory: 'feeling', findCreate: null, placeFeeling: null },
  { id: 'laura', displayName: 'Laura', artwork: 'participants/laura.webp', finalWord: 'comfort', finalWordCategory: 'feeling', findCreate: null, placeFeeling: null },
  { id: 'keiron', displayName: 'Keiron', artwork: 'participants/keiron.webp', finalWord: 'freedom', finalWordCategory: 'feeling', findCreate: null, placeFeeling: null },
  { id: 'sammy', displayName: 'Sammy', artwork: 'participants/sammy.webp', finalWord: 'peace', finalWordCategory: 'feeling', findCreate: null, placeFeeling: null },
  // Report 4 §3.3: "Bella offers the sample's most deliberately-worked version of 'both'".
  { id: 'bella', displayName: 'Bella', artwork: null, finalWord: null, finalWordCategory: null, findCreate: 'both', placeFeeling: null, publicationStatus: 'pending', pendingNote: 'Not in the WordPress gallery: artwork, final word and word category needed.' },
];

export const PARTICIPANTS: Participant[] = rows.map((r) => ({
  biographyApproved: false,
  storySlugs: [],
  publicationStatus: 'approved',
  ...r,
}));

/** Participants shown in the Visual Archive: approved, with artwork and a final word. */
export const publishedParticipants = () =>
  PARTICIPANTS.filter((p) => p.publicationStatus === 'approved' && p.artwork && p.finalWord);

/** Total participants in the research (Report 4). */
export const TOTAL_PARTICIPANTS = 26;
