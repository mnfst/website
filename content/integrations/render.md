---
title: Deploy Manifest on Render
name: Render
excerpt: Cloud hosting for modern applications and static websites.
coverImage: https://manifest.build/assets/images/logo-poc.svg
logo: https://manifest.build/assets/images/logo-poc.svg
slug: render
type: deployment
website: render.com
relatedLinks:
  - title: Database Security Guide
    description: Learn best practices for securing your Neon database
    href: /guides/database-security
  - title: Performance Optimization
    description: Tips and tricks for optimizing your database performance
    href: /guides/performance
  - title: Backup Strategies
    description: Understanding backup and recovery options
    href: /guides/backups
---

# Deploy Manifest on Render.com

[Render](https://render.com) is a popular cloud provider that enables developers to ship apps without hassle.

### Create a "start" script for production

The `npm run manifest` script should only be used for **development** as it watches file changes.

Go back to your codebase and open the `package.json` file and add a new **start** script on the scripts list with the value `node node_modules/manifest/dist/manifest/src/main.js` as following:

```json title="package.json"
"scripts": {
    "start": "node node_modules/manifest/dist/manifest/src/main.js"
    [...]
}
```

## Link the source provider

Create an account on [render.com](https://render.com) or sign in to your existing one.

From the dashboard, click on "Create a new web service" to get started.

In our example, we are deploying a backend on a GitHub repository, but you can also deploy from GitLab or BitBucket.

Choose the correct repository and click on "Connect" to continue.

## Configure your app

The following screen will display a form with some fields that you have to configure:

- **Region (optional):** Choose the closest region to your users
- **Build command**: Enter `npm install`
- **Start command**: The value should be `node node_modules/manifest/dist/manifest/src/main.js`
- **Environment variables**: Add the 2 environment variables: `TOKEN_SECRET_KEY` (which you can generate at https://jwtsecret.com/generate) and `NODE_ENV=production`.

Click on "Deploy web service" to launch the deployment.

🎉 That's it! Your app should be available in a few minutes at the domain ending in onrender.com.

> :::tip
>
> If you want to activate health checks, go to the "Health Checks" section and replace `/healthz` with `/api/health`
>
> :::
