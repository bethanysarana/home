import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Fields every piece of writing shares.
const shared = {
  title: z.string(),
  publishedDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  // Tags that link work across sections, e.g. ["language", "safety"].
  // Each tag gets its own page at /themes/<tag>/.
  themes: z.array(z.string()).default([]),
  // draft: true keeps a file out of the public site.
  draft: z.boolean().default(false),
};

const md = (folder: string) => glob({ pattern: '**/*.md', base: `./src/content/${folder}` });

export const collections = {
  conversations: defineCollection({
    loader: md('conversations'),
    schema: z.object({
      ...shared,
      number: z.number(), // shown as "CONVERSATION 07"
      place: z.string().default('Siquijor'),
      summary: z.string().optional(),
      word: z.string().optional(), // their closing word for home
      fingerprint: z.string().optional(), // path to the fingerprint image
    }),
  }),
  learning: defineCollection({
    loader: md('learning'),
    schema: z.object({
      ...shared,
      shortTitle: z.string().optional(),
      evidence: z.string().optional(), // e.g. "17 of 26 conversations coded."
      order: z.number().default(99),
    }),
  }),
  art: defineCollection({
    loader: md('art'),
    schema: z.object({
      ...shared,
      image: z.string(),
      alt: z.string(),
      medium: z.string().optional(),
      conversation: z.number().optional(), // links to a conversation number
    }),
  }),
  otherSide: defineCollection({
    loader: md('other-side'),
    schema: z.object({
      ...shared,
      summary: z.string().optional(),
      alsoPublished: z.array(z.object({ name: z.string(), url: z.string().url() })).default([]),
    }),
  }),
  dispatches: defineCollection({
    loader: md('dispatches'),
    schema: z.object({ ...shared }),
  }),
};
