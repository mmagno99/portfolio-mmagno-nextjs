import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.mdx$/, ''),
  }),
  schema: z.object({
    lang: z.enum(['es', 'en', 'pt']),
    slug: z.string(),
    title: z.string(),
    seoTitle: z.string().min(1).optional(),
    description: z.string().min(1).max(200),
    // Editorial target phrase, not an obsolete meta-keywords tag.
    focusKeyword: z.string().min(1),
    imageAlt: z.string().default(''),
    image: z
      .string()
      .refine(
        (value) => /^https?:\/\//.test(value) || /^\/(?!\/)/.test(value),
        'Use an absolute HTTP(S) URL or a local /path',
      ),
    date: z.coerce.date(),
  }),
});
export const collections = { blog };
