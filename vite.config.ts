import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/finsweet-project/",

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        aboutus: resolve(__dirname, "pages/aboutus.html"),
        blog: resolve(__dirname, "pages/blog.html"),
        contactus: resolve(__dirname, "pages/contactus.html"),
        features: resolve(__dirname, "pages/features.html"),
        pricing: resolve(__dirname, "pages/pricing.html"),
        work: resolve(__dirname, "pages/work.html"),
      },
    },
  },
});
