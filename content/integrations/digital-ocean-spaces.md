---
title: Upload media to DigitalOcean Spaces with Manifest
name: Digital Ocean Spaces
excerpt: Learn how to store and access files with DigitalOcean Spaces (S3-Compatible Object Storage) for your Manifest backend.
coverImage: /assets/images/integrations/covers/integration-manifest-digital-ocean-spaces.svg
logo: /assets/images/integrations/digital-ocean.svg
slug: digital-ocean-spaces
type: Storage
website: https://www.digitalocean.com/products/spaces
relatedLinks:
  - title: 🪣 Storage documentation
    href: /docs/s3-storage
  - title: 📂 File and Image upload
    href: /docs/upload
  - title: 🚀 Deploy Manifest on production
    href: /docs/deploy
---

In this tutorial, I will show you how to configure DigitalOcean Spaces as the storage provider for your Manifest backend.

You will first set up and configure a Manifest project. Then, you'll create a DigitalOcean Spaces bucket and set up the necessary API access permissions. Next, you will integrate and configure Manifest to use DigitalOcean Spaces for file storage. Finally, you will test the setup by uploading and managing files through Manifest.

By the end of this tutorial, you should be able to seamlessly use DigitalOcean Spaces as a storage solution for any Manifest project.

## What is Manifest?

[Manifest](/) is a lightweight Backend-as-a-Service (BaaS) designed for simplicity and speed. With just a single YAML file, you can define your backend and instantly access data management, storage, and business logic. Manifest streamlines development by removing complex configurations, allowing you to build and deploy faster.

## What is DigitalOcean Spaces?

[DigitalOcean Spaces](https://www.digitalocean.com/products/spaces) is an S3-compatible object storage service designed for scalability, high availability, and performance. It allows users to store and retrieve any type of files, such as images, videos, and documents, while offering a built-in CDN for faster content delivery.

## Prerequisites

Before getting started, ensure you have the following:

**Required Knowledge:**

- [Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- Basic understanding of cloud storage services
- Manifest: Follow the [installation documentation](/docs/install) to familiarize yourself with Manifest.

**Software Requirements:**

- [Node.js](https://nodejs.org/en/) version 18.x (LTS versions)
- **npm** (included with Node.js installation) or **yarn** as a package manager
- A DigitalOcean account. You can [sign up here](https://cloud.digitalocean.com/registrations/new)

## Set Up Manifest

If you haven't installed Manifest yet, follow these steps:

### 1. Install Manifest

From the root of your project, run the following command in your terminal:

```bash
npx add-manifest@latest
```

This will generate a `backend.yml` file and install all the necessary dependencies.

### 2. Run Manifest

After that, you can launch the backend locally:

```bash
npm run manifest
```

Once running, you can access the Admin panel at [http://localhost:1111](http://localhost:1111) (admin@manifest.build / admin) and use the REST API at [http://localhost:1111/api](http://localhost:1111/api).

Manifest's default backend includes a `home content` entity with a property of type **image** for a cover image. This is enough to test the DigitalOcean Spaces integration and move forward.

![Manifest : default yaml backend](/assets/images/integrations/content/default-backend-yaml-file.png)

## Set Up DigitalOcean Spaces

### 1. Create a DigitalOcean Spaces Bucket

1. In the DigitalOcean sidebar, click **Spaces Object Storage**.
2. Click **Create** > **Spaces Object Storage**.
3. Select a datacenter region (choose the closest to your users).
4. Choose a unique Spaces Bucket name (e.g., `manifest-bucket`).
5. Click **Create a Spaces Bucket**.

### 2. Configure Bucket Permissions for CRUD Operations

1. From your Spaces Object Storage page, click on the **Setting** tab.
2. Click **Create Access Key** button
3. Choose your permissions. For this tutorial, I clicked `All Permissions (Bucket & Objects)`
4. Give this access key a name (e.g., `access-key-full-access`) and click **Create access key**

![Digital ocean : Bucket access](/assets/images/integrations/content/bucket-settings.png)

5. Copy your **Access Key ID** and **secret key**.

⚠️ Important: The Secret Key is only shown once. If you lose it, you must generate a new key.

## Set up Manifest to use DigitalOcean Spaces

Now that permissions are configured, add these credentials to your environment variables in your `.env` file:

```env

S3_BUCKET=manifest-bucket
S3_ENDPOINT=https://fra1.digitaloceanspaces.com  # Change if using a different endpoint
S3_REGION=fra1  # Change this to your AWS region
S3_ACCESS_KEY_ID=XXX
S3_SECRET_ACCESS_KEY=XXX

```

Your DigitalOcean Spaces URL (https://manifest-bucket.fra1.digitaloceanspaces.com) contains everything you need:

```arduino
S3_BUCKET → The first part of the URL (manifest-bucket).
S3_ENDPOINT → The base domain without the bucket name (https://fra1.digitaloceanspaces.com).
S3_REGION → The subdomain before .digitaloceanspaces.com (fra1).
```

That's how the values in your .env file are determined! 🚀

Restart your backend with those changes running the following command.

```bash
npm run manifest
```

Now, we'll use the Admin panel to check if S3 is used for uploading and retrieving home cover images.

## Test Your Uploads.

### Upload an image

1. Go to the admin panel (http://loicalhost:1111) and log in with the default credentials **admin@manifest.build / admin**
2. Go to **Home content** and click **Edit**.

   ![Manifest : home-edit page](/assets/images/integrations/content/home-content-edit.png)

3. Remove the default image and upload a new one from your device. Once uploaded, a thumbnail should appear.
4. Click **Submit**. You will be redirected to the detail page of the home page with the image.

5. Open your browser inspector and inspect the image URL. You should see the URL pointing to your DigitalOcean Spaces Bucket.

   ![Manifest : do-s3-url](/assets/images/integrations/content/do-spaces-url.png)

## Conclusion

In this tutorial, we set up a Manifest project and configured it to use Digital Ocean Spaces Bucket as a storage provider. We created an DigitalOcean Spaces Bucket, set up the necessary IAM permissions, and integrated Digital Ocean Spaces with Manifest by updating the backend configuration.

Finally, we tested the setup by uploading and retrieving images through the Manifest Admin panel, ensuring that files were correctly stored in DigitalOcean Spaces.

I hope this guide has provided the information needed to successfully configure Digital Ocean Spaces (S3-Compatible Object Storage) with Manifest. If you encounter any issues, refer to the official Manifest documentation or AWS resources for further assistance.
