import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
import tailwind from "@astrojs/tailwind";


export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind()]
});