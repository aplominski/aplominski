import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    doi: z.string().optional(),
    pdf: z.string().optional(),
    code: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
    cite_data: z.string().optional(),
    references: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    github: z.string().url(),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
    screenshots: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })).optional(),
  }),
});

export const collections = { research, projects };
