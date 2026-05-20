import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
    open: false,
    // Allow tunneled hosts (ngrok / Cloudflare) for sharing the dev server
    // externally. A leading "." matches any subdomain.
    // Set to `true` to allow any host (lowest friction, less safe).
    allowedHosts: [
      "localhost",
      ".ngrok-free.dev",
      ".ngrok-free.app",
      ".ngrok.app",
      ".ngrok.io",
      ".trycloudflare.com",
      ".loca.lt",
    ],
  },
});
