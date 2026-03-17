// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://denosaurios.com",
  integrations: [
    starlight({
      locales: {
        root: {
          label: "español",
          lang: "es",
        },
        en: {
          label: "english",
          lang: "en",
        },
      },
      defaultLocale: "root",
      title: "denosaurios",
      social: [
        {
          icon: "github",
          label: "github",
          href: "https://github.com/zkjon/denosaurios",
        },
      ],
      sidebar: [
        {
          label: "introducción",
          items: [{ label: "sobre mi", link: "/intro/sobre-mi/" }],
        },
        { 
          label: "tierra",
          items: [
            { label: "origen", link: "/tierra/origen/" },
            { label: "formación", link: "/tierra/formacion/" }
          ],
        }
      ],
      customCss: ["@/styles/global.css"],
      logo: {
        light: "@/assets/icons/light.svg",
        dark: "@/assets/icons/dark.svg",
        replacesTitle: true,
      },

      components: {
        Head: '@/components/analytics.astro',
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
