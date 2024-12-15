import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://places.googleapis.com", // Google API endpoint
        changeOrigin: true, // Change the origin header
        secure: true, // Use HTTPS
        rewrite: (path) => path.replace(/^\/api/, ""), // Rewrite '/api' to ''
      },
    },
  },
});
