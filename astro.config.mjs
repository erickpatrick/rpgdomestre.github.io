import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import preact from "@astrojs/preact";
<<<<<<< HEAD
=======
import vercel from "@astrojs/vercel/serverless";
>>>>>>> 843775f (adds changes to astro configuration)

// https://astro.build/config
export default defineConfig({
  site: process.env.MODE
    ? "http://localhost:3000"
    : "https://www.rpgdomestre.com",
  integrations: [tailwind(), sitemap(), image(), preact({ compat: true })],
});
