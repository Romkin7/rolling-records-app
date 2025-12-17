// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  pinia: {
    /**
     * Automatically add stores dirs to the auto imports. This is the same as
     * directly adding the dirs to the `imports.dirs` option. If you want to
     * also import nested stores, you can use the glob pattern `./stores/**`
     * (on Nuxt 3) or `app/stores/**` (on Nuxt 4+)
     *
     * @default `['stores']`
     */
    storesDirs: [],
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "~/assets/staticCss/global.css",
    "~/assets/css/color-tokens.css",
    "~/assets/css/layout-tokens.css",
    "~/assets/css/size-tokens.css",
    "~/assets/css/typography-tokens.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    plugins: [vuetify({ autoImport: true })],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  /** Enables experimental cache feature in Nuxt */
  experimental: {
    payloadExtraction: true,
  },
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBaseUri: "http://localhost:8080/api",
    },
  },
});
