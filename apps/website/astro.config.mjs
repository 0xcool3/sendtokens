import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import reactProd from "@shelchin/astro-react";
import reactDev from "@astrojs/react";
import node from "@astrojs/node";
// https://astro.build/config
const viteConfig = process.env.NODE_ENV === "production"
  ? {
    ssr: {
      noExternal: true,
    },
  }
  : {};
export default defineConfig({
  output: "server",
  server: { port: 3006, host: "0.0.0.0" },
  outDir: "../../dist/website",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    process.env.NODE_ENV === "production" ? reactProd() : reactDev(),
    tailwind(),
  ],
  vite: viteConfig,
  tsconfig: "./tsconfig.json",
});
