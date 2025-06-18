# Manifest Website

This repository contains the Manifest platform which will include the different web items of Manifest like the website and the logic part of the Doc (not the content).

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
