// Two-layer gallery filtering (specification §5.2).
// Layer 1 (final word category) and layer 2 (the active lens) combine with AND.
// Uncoded values are never treated as "other": they simply don't match a
// specific layer-2 category, and are counted separately.

export interface CardCodes {
  finalWordCategory: string; // '' when uncoded
  findCreate: string;
  placeFeeling: string;
}

export type Lens = 'findcreate' | 'placefeeling';

export interface FilterState {
  tier1: string; // 'all' or a final-word category
  lens: Lens;
  tier2: string; // 'all' or a category of the active lens
}

const lensField = (lens: Lens): keyof CardCodes => (lens === 'findcreate' ? 'findCreate' : 'placeFeeling');

export function matches(card: CardCodes, s: FilterState): boolean {
  const t1 = s.tier1 === 'all' || card.finalWordCategory === s.tier1;
  const t2 = s.tier2 === 'all' || card[lensField(s.lens)] === s.tier2;
  return t1 && t2;
}

export interface FilterResult {
  visible: boolean[];
  shown: number;
  total: number;
  /** Cards that pass layer 1 but have no code on the active lens, while a layer-2 category is selected. */
  uncoded: number;
}

export function applyFilters(cards: CardCodes[], s: FilterState): FilterResult {
  const visible = cards.map((c) => matches(c, s));
  const field = lensField(s.lens);
  const uncoded =
    s.tier2 === 'all'
      ? 0
      : cards.filter((c) => (s.tier1 === 'all' || c.finalWordCategory === s.tier1) && !c[field]).length;
  return { visible, shown: visible.filter(Boolean).length, total: cards.length, uncoded };
}

/** Count line, in the wording of the WordPress gallery. */
export function countText(r: FilterResult, s: FilterState): string {
  if (s.tier1 === 'all' && s.tier2 === 'all') return `${r.total} of ${r.total} shown`;
  const base = `${r.shown} of ${r.total} shown`;
  return r.uncoded ? `${base} - ${r.uncoded} not yet coded on this theme` : base;
}
