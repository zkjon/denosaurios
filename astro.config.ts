// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://denosaurios.com",
  integrations: [
    starlight({
      defaultLocale: "es",
      locales: {
        es: {
          label: "español",
        },
        en: {
          label: "english",
        },
      },
      title: "denosaurios",
      social: [
        {
          icon: "github",
          label: "github",
          href: "https://github.com/zkjon/denosaurios",
        },
      ],
      sidebar: [],
      customCss: ["@/styles/global.css",],
      logo: {
        light: "@/assets/icons/light.svg",
        dark: "@/assets/icons/dark.svg",
        replacesTitle: true,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
      enabled: false,
  },
});
