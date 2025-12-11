# HPC-Wiki

Currently available here: https://faultier-indyscc25.github.io/hpc-wiki/

Wiki for HPC stuff, designed for being used in student cluster competitions (like at [SC](https://supercomputing.org/), [ISC](https://isc-hpc.com/) and [ASC](http://asc-events.org/)).
Based on [Vitepress](https://vitepress.dev/).

The goal is to accumulate information and make it easily accessible for later generations of SCC students.

## Development

First, install all necessary npm packages:

```
npm install
```

To run the site locally for testing:

```
npx vitepress
```

For a full build, use:

```
npx vitepress build
npx vitepress preview
```

## Deployment

(still getting sorted out, check https://vitepress.dev/guide/deploy for more info)

## TODOs

- [X] Initial PoC
- [ ] Fill with content
- [ ] Procure domain
- [ ] Long-term Git repo
- [ ] Add "Edit in Git" button to sites
- [ ] CI/CD Deploy
- [ ] Improve README: more text/doc, images, badges, dividers, ...
- [ ] `vitepress-plugin-mermaid` transfers ~10 MB when uncached. May be unjustified if Mermaid isn't really needed
- [ ] Style hero: big splash image, background, more text (SEO!)
- [ ] Improve embed (opengraph)
- [ ] Caching strategy, see https://vitepress.dev/guide/deploy#http-cache-headers
- [ ] Use a non-default font?
- [ ] Customize default theme even further: FAU/NHR corporate design, view transitions, ...
