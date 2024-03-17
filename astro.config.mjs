import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://TCHINDAJOEL/portfolioJoel.github.io',
  output: "server",
  adapter: netlify()
});