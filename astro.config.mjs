import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://fridasvard.se',
  integrations: [
    mdx(),
    partytown(),
    tailwind({
      // Example: Allow writing nested CSS declarations
      // alongside Tailwind's syntax
      // nesting: true,
    }),
  ],
  output: 'static',
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  }
});