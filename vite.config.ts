import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  base: "/fitlifeindia/",
  plugins: [react()],

  optimizeDeps: {
    // Include lovable-tagger here to pre-bundle it
    include: ["lovable-tagger"],
  },

  ssr: {
    // Mark lovable-tagger as external so esbuild handles it properly in SSR build
    noExternal: ["lovable-tagger"],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
