import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  image: {
    domains: ['prod-files-secure.s3.us-west-2.amazonaws.com', 'images.unsplash.com'],
  },
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    ssr: {
      noExternal: ['notion-to-md', 'markdown-table'],
    },
  },
});
