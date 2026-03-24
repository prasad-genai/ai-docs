import { defineConfig } from 'vitepress'

// ml foundation project sidebars
import mlFoundationEn from '../ml-foundation/sidebar/en'
import mlFoundationMr from '../ml-foundation/sidebar/mr'

export default defineConfig({
  title: "Docs",
  description: "Automation & AI Documentation",

  // ✅ Language metadata ONLY
  locales: {
    root: {
      label: "English",
      lang: "en"
    },
    mr: {
      label: "मराठी",
      lang: "mr"
    }
  },

  themeConfig: {
    logo: "/logo.jpg",

    nav: [
      {
        text: "AI/ML",
        link: ""
      },
      {
        text: "Automation",
        link: ""
      }
    ],

    sidebar: {
      "ml-foundation/en/": mlFoundationEn,
      "ml-foundation/mr/": mlFoundationMr
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/" }
    ],

    footer: {
      message: "Built with VitePress",
      copyright: "© 2026 Prasad"
    }
  }
})