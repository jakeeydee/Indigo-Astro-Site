// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.indigo-interiors.com',
  trailingSlash: 'always',
  // Fetch the next page when a link is hovered or focused, so navigations (and view transitions) feel instant
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [sitemap()],
});