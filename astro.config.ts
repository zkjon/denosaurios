// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://denosaurios.com",
  integrations: [
    starlight({
      components: {
        Head: "./src/components/analiticas.astro",
      },
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
          label: "la tierra primitiva",
          items: [
            { label: "origen", link: "/tierra/origen/" },
            { label: "formación", link: "/tierra/formacion/" },
            { label: "primeros océanos", link: "/tierra/primeros-oceanos/" },
            {
              label: "primeras moléculas",
              link: "/tierra/primeras-moleculas/",
            },
            {
              label: "primeras formas de vida",
              link: "/tierra/primeras-formas-de-vida/",
            },
            { label: "la gran oxidación", link: "/tierra/gran-oxidacion/" },
          ],
        },
        {
          label: "la evolución de la vida",
          items: [
            { label: "precámbrico", link: "/eras/precambrico/" },
            { label: "paleozoico", link: "/eras/paleozoico/" },
          ],
        },
        {
          label: "mesozoico",
          items: [
            { label: "introducción", link: "/eras/mesozoico/" },
            { label: "triásico", link: "/eras/mesozoico/triasico/" },
            { label: "jurásico", link: "/eras/mesozoico/jurasico/" },
            { label: "cretácico", link: "/eras/mesozoico/cretacico/" },
            
          ],
        },
      ],
      customCss: ["@/styles/global.css"],
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
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
