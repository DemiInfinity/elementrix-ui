import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 800,

  env: {
    STENCIL_BASE_URL: "http://localhost:3333",
  },

  experimentalSourceRewriting: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
