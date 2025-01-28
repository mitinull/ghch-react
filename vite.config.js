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
        name: "غذا چیه؟ | برنامهٔ غذایی دانشگاه تهران",
        short_name: "غذا چیه؟",
        description: "مشاهده سریع وعدهٔ بعدی دانشگاه تهران.",
        theme_color: "#EFE3C2",
        background_color: "#bcb1b1",
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
