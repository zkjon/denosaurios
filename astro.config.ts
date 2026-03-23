// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://denosaurios.com",
  integrations: [
    sitemap(),
    starlight({
      routeMiddleware: "./src/router-data.ts",
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
          translations: { en: "introduction" },
          items: [
            {
              label: "sobre mi",
              translations: { en: "about me" },
              link: "/intro/sobre-mi/",
            },
          ],
        },
        {
          label: "la tierra primitiva",
          translations: { en: "early earth" },
          items: [
            {
              label: "origen",
              link: "/tierra/origen/",
              translations: { en: "origin" },
            },
            {
              label: "formación",
              translations: { en: "formation" },
              link: "/tierra/formacion/",
            },
            {
              label: "primeros océanos",
              translations: { en: "first oceans" },
              link: "/tierra/primeros-oceanos/",
            },
            {
              label: "primeras moléculas",
              translations: { en: "first molecules" },
              link: "/tierra/primeras-moleculas/",
            },
            {
              label: "primeras formas de vida",
              translations: { en: "first life forms" },
              link: "/tierra/primeras-formas-de-vida/",
            },
            {
              label: "la gran oxidación",
              translations: { en: "the great oxidation" },
              link: "/tierra/gran-oxidacion/",
            },
          ],
        },
        {
          label: "la evolución de la vida",
          translations: { en: "evolution of life" },
          items: [
            {
              label: "precámbrico",
              translations: { en: "precambrian" },
              link: "/eras/precambrico/",
            },
            {
              label: "paleozoico",
              translations: { en: "paleozoic" },
              link: "/eras/paleozoico/",
            },
          ],
        },
        {
          label: "mesozoico",
          translations: { en: "mesozoic" },
          items: [
            {
              label: "introducción",
              translations: { en: "introduction" },
              link: "/eras/mesozoico/",
            },
            {
              label: "triásico",
              translations: { en: "triassic" },
              link: "/eras/mesozoico/triasico/",
            },
            {
              label: "jurásico",
              translations: { en: "jurassic" },
              link: "/eras/mesozoico/jurasico/",
            },
            {
              label: "cretácico",
              translations: { en: "cretaceous" },
              link: "/eras/mesozoico/cretacico/",
            },
          ],
        },
        {
          label: "la gran extinción",
          translations: { en: "the great extinction" },
          items: [
            {
              label: "el comienzo del fin",
              translations: { en: "the beginning of the end" },
              link: "/extincion/",
            },
            {
              label: "el impacto",
              translations: { en: "the impact" },
              link: "/extincion/impacto/",
            },
            {
              label: "consecuencias",
              translations: { en: "consequences" },
              link: "/extincion/consecuencias/",
            },
            {
              label: "los supervivientes",
              translations: { en: "the survivors" },
              link: "/extincion/supervivientes/",
            },
          ],
        },
        {
          label: "cenozoico",
          translations: { en: "cenozoic" },
          items: [
            {
              label: "introducción",
              translations: { en: "introduction" },
              link: "/cenozoico/",
            },
            {
              label: "paleógeno",
              translations: { en: "paleogene" },
              link: "/cenozoico/paleogeno/",
            },
            {
              label: "neógeno",
              translations: { en: "neogene" },
              link: "/cenozoico/neogeno/",
            },
            {
              label: "cuaternario",
              translations: { en: "quaternary" },
              link: "/cenozoico/cuaternario/",
            },
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
});
