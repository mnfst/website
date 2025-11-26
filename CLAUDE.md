# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo containing the Manifest platform website and documentation using Turborepo for orchestration:

- **Root**: Turbo workspace configuration with shared build commands
- **`client/`**: Angular 20 application for the main Manifest website (manifest.build)
- **`docs/`**: Docusaurus 3 documentation site served at manifest.build/docs
- **`content/`**: External content repository (cloned from mnfst/docs)

## Development Commands

### Root Level Commands (uses Turbo)
```bash
npm install          # Install all dependencies across workspaces
npm run dev         # Start both client and docs in development mode
npm run build       # Build both client and docs for production
```

### Client (Angular Website) Commands
```bash
cd client
npm run start       # Start Angular dev server
npm run dev         # Same as start
npm run build       # Build for production
npm run test        # Run unit tests with Karma/Jasmine
npm run watch       # Build in watch mode
```

### Docs (Docusaurus) Commands
```bash
cd docs
npm run start                    # Start Docusaurus dev server
npm run build                   # Build docs (includes fetch-content)
npm run fetch-content          # Clone content from mnfst/docs repo
npm run fetch-content $BRANCH$ # Clone specific branch
npm run typecheck              # Run TypeScript checks
```

## Architecture Overview

### Angular Client Architecture
- **Framework**: Angular 20 with SSR support
- **Styling**: Bulma CSS framework + SCSS
- **Structure**: Module-based with standalone components
- **Routing**: File-based routing in `app.routes.ts` with SEO metadata
- **Key Modules**:
  - `modules/website/`: Main website module containing all pages
  - `modules/website/pages/`: Individual page components (home, faq, etc.)
  - `modules/website/elements/`: Reusable UI components
  - `modules/website/resources/`: Dynamic content like integrations

### Docusaurus Documentation
- **Framework**: Docusaurus 3 with TypeScript
- **Content Source**: External repository (mnfst/docs) cloned via `fetch-content.sh`
- **Features**: Algolia search, Vercel analytics, PostHog tracking
- **Theme**: Custom CSS with auto-collapsing sidebar
- **Route**: Serves at `/docs` baseUrl from manifest.build

### Key Configuration Files
- `turbo.json`: Defines build and dev tasks for monorepo
- `client/angular.json`: Angular CLI configuration
- `docs/docusaurus.config.ts`: Docusaurus site configuration
- `docs/sidebars.ts`: Documentation navigation structure

### Integration Patterns
- Dynamic route generation for integration pages using content files
- SEO metadata configuration per route with OpenGraph support
- External content fetching system for documentation
- Shared styling and branding across both applications

## Important Notes
- Documentation content is external and must be fetched before building docs
- Both applications use TypeScript with strict configuration
- Angular app includes SSR for better SEO and performance
- Docs site includes client redirects for legacy URLs