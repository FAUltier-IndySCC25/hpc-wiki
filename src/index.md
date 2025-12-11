---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "HPC-Wiki"
  text: "Streamlining Student Cluster Competitions"
  tagline: NHR@FAU
  actions:
    - theme: brand
      text: Getting started
      link: /intro
    - theme: alt
      text: NHR@FAU Homepage
      link: 'https://hpc.fau.de/'

features:
  - icon: 🚗
    title: Setup
    details: Getting the cluster up and running
    link: /setup/
  - icon: ✈️
    title: Optimize
    details: Squeezing out the most performance
    link: /optimize/
  - icon: 🚀
    title: Benchmark
    details: Tips and configuration for specific apps
    link: /benchmark/
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'teamlogos/fausion.webp',
    name: 'FAUSION',
    title: 'ISC25 - Hamburg',
    links: [
      { icon: 'github', link: 'https://github.com/fau-usi-isc25' }
    ]
  },
  {
    avatar: 'teamlogos/clusterkraft.webp',
    name: 'Clusterkraft',
    title: 'ASC25 - Xining',
    links: [
      { icon: 'github', link: 'https://github.com/fau-cet' }
    ]
  },
  {
    avatar: 'teamlogos/faucet.webp',
    name: 'FAUcet',
    title: 'SC24 - Atlanta',
    links: [
      { icon: 'github', link: 'https://github.com/fau-cet' },
      { icon: 'x', link: 'https://x.com/FAUCET_2024' }
    ]
  },
  {
    avatar: 'teamlogos/faulty.webp',
    name: 'FAUlty',
    title: 'ASC24 - Shanghai'
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Contributing Teams
    </template>
    <template #lead>
      This wiki is continuously getting updates.<br>
      This is a (non-exhaustive) list of contributors.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
