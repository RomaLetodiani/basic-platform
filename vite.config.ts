import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      "@": "/src",
      "@env": "/src/env.ts",
    },
  },
});
