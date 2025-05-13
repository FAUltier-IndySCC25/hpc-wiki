import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HPC-Wiki",
  description: "Wiki for HPC Stuff - designed for Student Cluster Competitions",
  srcExclude: ['**/README.md', '**/TODO.md'],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'git', link: 'https://github.com/Jojodicus/hpc-wiki' }
    ],

    search: {
      provider: 'local'
    }
  }
})
