import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Since we are using Notion as a Headless CMS, we'll use a custom loader or 
  // fetch the data. For now, we define the schema for the Content Layer.
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    status: z.enum(['Draft', 'Published']),
    coverImage: z.string().url().optional(),
  }),
});

export const collections = { blog };
