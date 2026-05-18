import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gl-tches.com',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
