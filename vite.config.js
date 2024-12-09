import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
  },
  test: {
    globals: true, // Enable global test functions like describe, test, it, etc.
    environment: "jsdom", // Set environment to jsdom (for browser-like tests)
    setupFiles: "./vitest.setup.js",
  },
  plugins: [react()],
});
