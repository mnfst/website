# Manifest website

Manifest website source code. View it live: https://manifest.build

The website is built with [Next.js](https://nextjs.org/).

## Install

```
npm install
npm run dev
```

## Manifest docs

The documentation website is located in the `/docs` directory and built with [Docusaurus](https://docusaurus.io/).

The content of the documentation itself is located in [its own repository](https://github.com/mnfst/docs) and fetched with the `npm run fetch-content` command that clones it.

```
cd docs
npm install
npm run fetch-content
npm run start
```
