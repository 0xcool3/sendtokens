import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import reactProd from "@shelchin/astro-react";
import reactDev from "@astrojs/react";
import node from "@astrojs/node";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
 

/*
  We are doing some URL mumbo jumbo here to tell Astro what the URL of your website will be.
  In local development, your SEO meta tags will have localhost URL.
  In built production websites, your SEO meta tags should have your website URL.
  So we give our website URL here and the template will know what URL to use
  for meta tags during build.
  If you don't know your website URL yet, don't worry about this
  and leave it empty or use localhost URL. It won't break anything.
*/

const SERVER_PORT = 4400;
// the url to access your blog during local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// the url to access your blog after deploying it somewhere (Eg. Netlify)
const LIVE_URL = "https://app.sendtokens.cool3.io";
// this is the astro command your npm script runs
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
// When you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config
const viteConfig = process.env.NODE_ENV === "production"
  ? {
    ssr: {
      noExternal: true,
    },
  }
  : {};
export default defineConfig({
  site: BASE_URL,
  output: "server",
  server: { port: SERVER_PORT, host: "0.0.0.0" },
  outDir: "../../dist/website",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    sitemap(),
    process.env.NODE_ENV === "production" ? reactProd() : reactDev(),
    tailwind(),
  ],
  vite: viteConfig,
  tsconfig: "./tsconfig.json",
});
