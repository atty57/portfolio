/**
 * Special Vite configuration for GitHub Pages deployment
 * 
 * This configuration extends the main vite.config.ts with GitHub Pages specific settings.
 * Use this when building for GitHub Pages deployment.
 * 
 * Usage: 
 * 1. First build with: npx vite build --config vite.config.gh-pages.ts
 * 2. Then deploy with: npx gh-pages -d dist/public
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  base: '/portfolio/', // Set this to your repository name
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});