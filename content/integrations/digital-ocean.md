---
title: Deploy Manifest on DigitalOcean
name: Digital Ocean
excerpt: Cloud infrastructure provider with data centers worldwide.
coverImage: /assets/images/integrations/covers/integration-manifest-digital-ocean-spaces.svg
logo: /assets/images/integrations/digital-ocean.svg
slug: digital-ocean
type: Deployment
website: https://www.digitalocean.com/
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

In this tutorial, We will guide you through deploying your Manifest backend on DigitalOcean, a popular cloud provider.

You will set up a Manifest project, configure it for deployment, and then deploy it on DigitalOcean. By the end of this tutorial, you should have your Manifest backend running on **DigitalOcean**.

## What is Manifest?

[Manifest](/) is a streamlined Backend-as-a-Service designed to accelerate your development process. With Manifest, you can define your entire backend architecture in a single, intuitive YAML file. This approach not only simplifies setup but also provides a foundation for data management, storage solutions, and business logic. By abstracting the complexities of traditional backend development, Manifest enables developers to focus on building innovative features and delivering projects more swiftly.

## What is DigitalOcean?

[DigitalOcean](https://www.digitalocean.com/) is a popular hosting provider that delivers a high quality service. This guide shows how to deploy Manifest using DigitalOcean App Platform, a service to deploy apps with very few infrastructure configuration.

## Prerequisites

Before getting started, ensure you have the following:

**Required Knowledge:**

- Basic understanding of [Node.js](https://nodejs.org/en/) and backend development
- Familiarity with cloud services and deployment processes

**Software Requirements:**

- [Node.js](https://nodejs.org/en/) version 18.x (LTS versions)
- **npm** (included with Node.js installation) or **yarn** as a package manager
- A DigitalOcean account. If you don’t have one, sign up on the [DigitalOcean registration page](https://digitalocean.com).

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

## Set Up Your App on DigitalOcean

First, log in or create an account on DigitalOcean.

Then click on "**Create**" button on the top menu, and select "**App Platform**" in the dropdown menu.

![DigitalOcean source selection](/assets/images/integrations/content/create-app-platform.png)

### Link the source provider

In our example we are deploying a Manifest backend hosted in [GitHub](https://github.com/) but you can get it from other sources too, like GitLab or Docker Hub ([see Docker config here](./deploy.md#docker)).

![DigitalOcean source selection](/assets/images/integrations/content/do1.png)

Select your repository and branch and leave the "source directory" as it is. Leave the "autodeploy" checkbox checked if you want to allow push-to-deploy on your main branch. Click "**Next**".

### Configure the app

You should see your app recognized as "**web service**", click on "**edit**" button to go into the configuration.

![DigitalOcean web service edition](/assets/images/integrations/content/do2.png)

Here are the points you can edit (in page order)

- **Resource size (optional)**: Manifest can run on the cheapest instance ($5) on small/medium projects. By default DigitalOcean chooses a bigger one, change it to save some money.
- **Run command**: Replace the default run command by `node node_modules/manifest/dist/manifest/src/main.js`
- **Public HTTP Port:** Change it to `1111` to match Manifest's default port.

Then you can click on "**Next**".

### Set environment variables

Click on your app name's "**Edit**" button and add the 2 environment variables: `TOKEN_SECRET_KEY` (you can generate one with [JWTSecret.com](https://jwtsecret.com/generate)) and `NODE_ENV=production`.

![DigitalOcean environment variable settings](/assets/images/integrations/content/do3.png)

## Deploy

The last step lets you choose your app name and region where you should select the location that is closest to your users. After the recap you are good to go. Click on **Create resources** to launch the build.

🎉 That's it! You can click on the "**Live App**" button to see it live. To set up your own domain name, add it to the "**Domains**" setting.
