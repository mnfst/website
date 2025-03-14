---
title: Deploy Manifest on Fly.io
name: Fly
excerpt: Global application hosting with low latency and automatic scaling.
coverImage: /assets/images/integrations/covers/integration-manifest-fly-io.svg
logo: /assets/images/integrations/fly-io.svg
slug: render
type: Deployment
website: render.com
relatedLinks:
  - title: 🚀 Deploy Manifest on production
    href: /docs/deploy
  - title: 🪣 S3 Storage documentation
    href: /docs/s3-storage
  - title: 📂 File and Image upload
    href: /docs/upload
---

> ⚠️ warning
> This guide does not ensure persistent data for the database and the storage.

In this tutorial, We will guide you through deploying your Manifest backend on Render, a popular cloud provider.

You will set up a Manifest project, configure it for deployment, and then deploy it on Render. By the end of this tutorial, you should have your Manifest backend running on Render.

## What is Manifest?

[Manifest](/) is a streamlined Backend-as-a-Service designed to accelerate your development process. With Manifest, you can define your entire backend architecture in a single, intuitive YAML file. This approach not only simplifies setup but also provides a foundation for data management, storage solutions, and business logic. By abstracting the complexities of traditional backend development, Manifest enables developers to focus on building innovative features and delivering projects more swiftly.

## What is Render?

[Render](https://render.com) is a cloud provider that enables developers to ship apps without hassle. It offers scalable and easy-to-use services for deploying web applications, databases, and more.

## Prerequisites

Before getting started, ensure you have the following:

**Required Knowledge:**

- Basic understanding of [Node.js](https://nodejs.org/en/) and backend development
- Familiarity with cloud services and deployment processes

**Software Requirements:**

- [Node.js](https://nodejs.org/en/) version 18.x (LTS versions)
- **npm** (included with Node.js installation) or **yarn** as a package manager
- A Render account. If you don’t have one, sign up on the [Render registration page](https://render.com).

## Set up Manifest

If you haven't installed Manifest yet, follow these steps:

### 1. Install Manifest

Run the following command in your terminal from the root of your project:

```bash
npx add-manifest@latest
```

This will generate a manifest/backend.yml file and install the necessary dependencies.

### 2. Run Manifest

Before setting up for production, let’s first see how our backend behaves locally. To do that, run:

```bash
npm run manifest
```

Once running, you can access the Admin panel at [http://localhost:1111](http://localhost:1111) (admin@manifest.build / admin) and use the REST API at [http://localhost:1111/api](http://localhost:1111/api).

### 3. Create a "start" script for production

The `npm run manifest` script should only be used for **development** as it watches file changes.

Go back to your codebase and open the `package.json` file and add a new **start** script on the scripts list with the value `node node_modules/manifest/dist/manifest/src/main.js` as following:

```json title="package.json"
"scripts": {
    "start": "node node_modules/manifest/dist/manifest/src/main.js"
    [...]
}
```

## Setup render

Deploying your Manifest backend on Render is quick and easy. Follow these steps to get started.

### 1. Link the source provider

Log in your Render account. If you don't have an account, create one on [render.com](https://render.com).

From the dashboard, click "**Create a new web service**" to get started.

In our example, we are deploying a backend on a **GitHub** repository, but you can also deploy from **GitLab** or **BitBucket**.

Choose the correct repository and click on "**Connect**" to continue.

### 2. Configure your app

The following screen will display a form with some fields that you have to configure:

- **Region (optional):** Choose the closest region to your users
- **Build command**: Enter `npm install`
- **Start command**: The value should be `node node_modules/manifest/dist/manifest/src/main.js`
- **Environment variables**: Add the 2 environment variables: `TOKEN_SECRET_KEY` (which you can generate at https://jwtsecret.com/generate) and `NODE_ENV=production`.

Click on "**Deploy web service**" to launch the deployment.

🎉 That's it! Your app should be available in a few minutes at the domain ending in onrender.com.

> 💡 TIP
>
> If you want to activate health checks, go to the "Health Checks" section and replace `/healthz` with `/api/health`
