import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",  // Ensures correct base path for deployment
  build: {
    outDir: "dist",  // Specifies the build output directory
  },
  server: {
    historyApiFallback: true,  // Allows proper routing during local development
  },
});
