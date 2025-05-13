import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HPC-Wiki",
  description: "Wiki for HPC Stuff - designed for Student Cluster Competitions",
  srcExclude: ['**/README.md', '**/TODO.md'],
  lastUpdated: true,
  sitemap: {
    hostname: 'https://hpc-wiki.de/' // FIXME
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/setup/' }
    ],

    sidebar: [
      {
        text: 'Intro',
        link: '/intro'
      },
      {
        text: 'Setup',
        base: '/setup',
        link: '/',
        collapsed: true,
        items: [
          { text: 'Hardware', link: '/hardware' },
          { text: 'Networking', link: '/networking' },
          { text: 'Software', link: '/software' }
        ]
      },
      {
        text: 'Benchmark',
        base: '/benchmark',
        link: '/',
        collapsed: true,
        items: [
          { text: 'MPI', link: '/mpi' },
          { text: 'Slurm', link: '/slurm' }
        ]
      },
      {
        text: 'Optimize',
        base: '/optimize',
        link: '/',
        collapsed: true,
        items: [
          { text: 'Hardware', link: '/hardware' },
          { text: 'Software', link: '/software' }
        ]
      }
    ],

    footer: {
      message: 'Made with ❤️ and <a href="https://vitepress.dev/">Vitepress</a>',
      copyright: '© 2025-present TBD, <a href="/imprint">Imprint</a>'
    },

    socialLinks: [
      { icon: 'git', link: 'https://github.com/Jojodicus/hpc-wiki' }
    ],

    search: {
      provider: 'local'
    }
  }
})
