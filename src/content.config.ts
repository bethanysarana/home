import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The eight findings (specification §6).
// Frontmatter: label, headline and summary are the WordPress "Headline findings"
// tab label, quote and paragraph. researchHeading, the body and evidence come
// from the latest research report (Report 4, section 3.x).
const stories = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/stories' }),
  schema: z.object({
    order: z.number(),
    label: z.string(),
    headline: z.string(),
    summary: z.string(),
    researchHeading: z.string(),
    reportSection: z.string(),
    evidence: z.string(),
    /** Optional qualification shown with the evidence. */
    qualification: z.string().optional(),
  }),
});

export const collections = { stories };
