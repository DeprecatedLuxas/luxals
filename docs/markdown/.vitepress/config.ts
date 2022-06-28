import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "@luxass/luxals",
  description: "TypeScript and JavaScript utilities",

  lastUpdated: true,

  themeConfig: {
    nav: [
      {
        text: "Guide",
        link: "/guide/getting-started",
        activeMatch: "/guide/"
      },
      {
        text: "Releases",
        link: "https://github.com/luxass/luxals/releases"
      }
    ],
    sidebar: {
      "/guide/": sidebar()
    },
    editLink: {
      pattern: "https://github.com/luxass/luxals/edit/main/docs/markdown/:path",
      text: "Edit this page on GitHub"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/luxass/luxals" }]
  }
});

function sidebar() {
  return [
    {
      text: "Guide",
      items: [{ text: "Getting Started", link: "/guide/getting-started" }]
    }
  ];
}
