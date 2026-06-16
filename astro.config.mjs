import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://firefly-blog-site.vercel.app',
  integrations: [tailwind()]
});
