import { getCollection } from 'astro:content';

export const SITE_TITLE = 'Let’s Talk About “Home”';

// Order and wording of the main sections. URL path → collection.
export const SECTIONS = [
  { collection: 'conversations', path: 'conversations', label: 'The Conversations' },
  { collection: 'learning', path: 'learning', label: 'What I’m Learning' },
  { collection: 'art', path: 'art', label: 'The Art of Home' },
  { collection: 'otherSide', path: 'other-side', label: 'The Other Side' },
  { collection: 'dispatches', path: 'dispatches', label: 'Dispatches' },
] as const;

export type SectionName = (typeof SECTIONS)[number]['collection'];

// Published items only (drafts never reach the public site).
export async function published(name: SectionName) {
  const items = await getCollection(name, ({ data }) => !data.draft);
  return items.sort((a, b) => {
    const ao = (a.data as { order?: number }).order;
    const bo = (b.data as { order?: number }).order;
    if (ao !== undefined && bo !== undefined && ao !== bo) return ao - bo;
    return b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf();
  });
}

// Sections that have at least one published item; only these appear in the menu.
export async function liveSections() {
  const live = [];
  for (const s of SECTIONS) if ((await published(s.collection)).length) live.push(s);
  return live;
}

export const url = (p: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export const slugify = (s: string) =>
  s.toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').trim().replace(/[\s_]+/g, '-');

// Name used in "Cite this page". Change here and it updates everywhere.
export const AUTHOR = 'Sarana';
