import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './posts' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    image: z.string().url(),
    date: z.coerce.date(),
  }),
});
export const collections = { blog };
