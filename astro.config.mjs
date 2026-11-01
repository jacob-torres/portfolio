import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jacobtorres.net',
  redirects: {
    '/machine-learning': '/projects',
    '/web-development': '/projects',
  },
});
