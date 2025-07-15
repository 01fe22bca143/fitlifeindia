import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/fitlifeindia/",
  plugins: [react()],

  optimizeDeps: {
    include: ["lovable-tagger"],
  },

  ssr: {
    noExternal: ["lovable-tagger"],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    outDir: "docs", // Build output to docs folder for GitHub Pages on main branch
  },
});
