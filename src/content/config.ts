import { defineCollection, z } from 'astro:content';

const verticals = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    headline: z.string(),
    subheadline: z.string(),
    keywords: z.array(z.string()),
    benefits: z.array(z.string()),
    materials: z.array(z.string()),
    sizes: z.array(z.string()),
    minOrder: z.string(),
    leadTime: z.string(),
    cta: z.string(),
  }),
});

export const collections = { verticals };
