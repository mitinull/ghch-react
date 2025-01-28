import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Automatically update the service worker
      manifest: {
        name: "Ghaza Chie? | غذا چیه",
        short_name: "ghch | غذا چیه؟",
        description: "مشاهده سریع وعدهٔ غذایی بعدی دانشگاه تهران.",
        theme_color: "#EFE3C2",
        background_color: "#3E7B27",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/ghch192.svg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/ghch512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true, // Enable PWA support during development for testing
      },
    }),
  ],
});
