import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: process.env.MODE
    ? "http://localhost:3000"
    : "https://www.rpgdomestre.com",
  integrations: [tailwind(), sitemap(), image(), preact({ compat: true })],
  output: "server",
  adapter: vercel(),
});
