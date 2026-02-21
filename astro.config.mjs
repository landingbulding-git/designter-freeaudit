import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.designter.hu',
  integrations: [react(), tailwind(), sitemap()],
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
