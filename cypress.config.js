/* eslint-disable no-undef */
import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();
export default defineConfig({
  env: {
    baseUrl: process.env.VITE_API_URL,
  },
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
