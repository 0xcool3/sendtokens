export const SITE_TITLE = "SendTokens";
export const SITE_DESCRIPTION = "SendTokens";
export const TWITTER_HANDLE = "@0xcool3";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;