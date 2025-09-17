import { Integration } from '../../../../types/integration.interface'

export const integrations: Integration[] = [
  {
    slug: 's3-storage',
    title: 'Set up Amazon S3 storage for your Manifest backend',
    name: 'Amazon S3 storage',
    cover:
      '/assets/images/integrations/integration-manifest-amazon-s3-storage.svg',
    logo: '/assets/images/integrations/aws.svg',
    category: 'storage',
    relatedResources: [
      {
        anchor: '🪣 S3 Storage documentation',
        link: 'https://manifest.build/docs/s3-storage'
      },
      {
        anchor: '📂 File and Image upload documentation',
        link: 'https://manifest.build/docs/upload'
      },
      {
        anchor: '🚀 Deploy Manifest on production',
        link: 'https://manifest.build/docs/deploy'
      }
    ],
    excerpt: 'Store your files in S3 storage and access them from anywhere.',
    htmlContent: `<p>This is some basic, sample markdown.
In this tutorial, we will show you how to configure Amazon S3 as the storage provider for your Manifest backend.</p>
<p>You will first set up and configure a Manifest project. Then, you&#39;ll create an Amazon S3 storage bucket and set up the necessary AWS permissions. Next, you will integrate and configure Manifest to use S3 for file storage. Finally, you will test the setup by uploading and managing files through Manifest.</p>
<p>By the end of this tutorial, you should be able to seamlessly use Amazon S3 as a storage solution for any Manifest project.</p>
<h2 id="what-is-manifest-">What is Manifest?</h2>
<p><a href="/">Manifest</a> is a minimalist Backend-as-a-Service built for speed and efficiency. Define your backend in a single YAML file and instantly get a complete backend, including data management, storage, and business. Manifest allows you to launch projects faster by eliminating the complexity of traditional setups.</p>
<h2 id="what-is-amazon-s3-">What is Amazon S3?</h2>
<p><a href="https://aws.amazon.com/s3/">Amazon S3</a> ( Simple Storage Service) is an object storage service provided by Amazon Web Services (AWS). It offers scalability, high data availability, and performance, allowing users to store and retrieve any amount of data at any time. S3 is commonly used to store files such as images, videos, documents, and other frequently accessed content.</p>
<h2 id="prerequisites">Prerequisites</h2>
<p>Before getting started, ensure you have the following:</p>
<p><strong>Required Knowledge:</strong></p>
<ul>
<li><a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs">Node.js</a></li>
<li>Basic understanding of AWS and cloud services</li>
<li>Manifest: Follow the <a href="/docs">installation documentation</a> to familiarize yourself with Manifest.</li>
</ul>
<p><strong>Software Requirements:</strong></p>
<ul>
<li><a href="https://nodejs.org/en/">Node.js</a> version 18.x (LTS versions)</li>
<li><strong>npm</strong> (included with Node.js installation) or <strong>yarn</strong> as a package manager</li>
<li>An active AWS account. If you don’t have one, sign up on the AWS registration page. A credit card is required to open one. AWS offers a 12-month free trial to test out the Amazon S3 bucket with 5GB of free storage.</li>
</ul>
<h2 id="set-up-manifest">Set up Manifest</h2>
<p>If you haven&#39;t installed Manifest yet, follow these steps:</p>
<h3 id="1-install-manifest">1. Install Manifest</h3>
<p>Execute the following command in your terminal from the root of your project:</p>
<pre><code class="lang-bash">npx <span class="hljs-keyword">add</span><span class="bash">-manifest@latest</span>
</code></pre>
<p>This will generate a manifest.yml file and install the necessary dependencies.</p>
<h3 id="2-run-manifest">2. Run Manifest</h3>
<p>After that, launch the backend locally:</p>
<pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> manifest</span>
</code></pre>
<p>Once running, you can access the Admin panel at <a href="http://localhost:1111">http://localhost:1111</a> (admin@manifest.build / admin) and use the REST API at <a href="http://localhost:1111/api">http://localhost:1111/api</a>.</p>
<p>Manifest&#39;s default backend includes a <code>home content</code> entity with a property of type <strong>image</strong> for a cover image. This is enough to test the Amazon S3 integration and move forward.</p>
<p><img src="/assets/images/integrations/content/default-backend-yaml-file.png" alt="Manifest : default yaml backend"></p>
<h2 id="set-up-aws">Set Up AWS</h2>
<p>To configure Amazon S3 storage, you need to create an <strong>IAM user</strong>, set up <strong>permissions</strong>, and create an <strong>S3 bucket</strong>.</p>
<p><strong>1. Create an IAM User for Manifest</strong></p>
<ol>
<li>Go to the <a href="https://console.aws.amazon.com/iam/">AWS IAM Console</a>.</li>
<li>Click on <strong>Users</strong> in the left menu, then select Create user.</li>
<li><p>Enter a username (e.g., manifest-s3-user).</p>
<p><img src="/assets/images/integrations/content/create-user.png" alt="AWS : create a IAM user"></p>
</li>
<li><p>Make sure this checkbox is unselected &quot;Provide user access to the AWS Management Console&quot; (since we only need programmatic access)</p>
</li>
<li>Click <strong>Next</strong> to set permissions.</li>
</ol>
<p><strong>2. Set Up Permissions for Amazon S3</strong></p>
<ol>
<li>Click <strong>Create Group</strong> and name it (e.g., ManifestS3Access).</li>
<li><p>Attach the <strong>AmazonS3FullAccess</strong> policy to this group by using the search bar under <strong>Permissions polciies</strong>.</p>
<p><img src="/assets/images/integrations/content/creating-user-group.png" alt="AWS : create a user group"></p>
</li>
<li><p>Click <strong>Create user group</strong></p>
</li>
<li><p>Select the group checkbox <strong>ManifestS3Access</strong> and click <strong>Next</strong> to go to <strong>Review and create</strong>.</p>
</li>
<li>Take a look at the summary and click <strong>Create user</strong>.</li>
</ol>
<p><strong>3. Generate and Download Access Keys for an IAM User</strong>
Once the user is created:</p>
<ol>
<li>From the users list page; click on the user you just created (<strong>manifest-s3-user</strong>).</li>
<li><p>Click <strong>Create access key</strong></p>
<p><img src="/assets/images/integrations/content/user-summary.png" alt="AWS : User summary"></p>
</li>
<li><p>Choose the reason for creating the key (e.g., &quot;Command Line Interface (CLI)&quot;), then click Next.</p>
</li>
<li>Click <strong>Create access key</strong>.</li>
<li><strong>Download the .csv file</strong> and copy the <strong>Access Key ID</strong> and <strong>Secret Access Key</strong> for later use.</li>
</ol>
<blockquote>
<p>⚠️ Important: The Secret Access Key is only shown once. If you lose it, you&#39;ll need to generate a new one.</p>
</blockquote>
<h2 id="create-an-amazon-s3-storage-bucket">Create an Amazon S3 Storage Bucket</h2>
<ol>
<li>Go to the <a href="https://s3.console.aws.amazon.com/">AWS S3 Console</a></li>
<li>Click <strong>Create bucket</strong>.</li>
<li><p>Enter a unique bucket name (e.g., my-manifest-storage).</p>
<p><img src="/assets/images/integrations/content/create-bucket.png" alt="AWS : Create a S3 storage bucket"></p>
</li>
<li><p>In the Block Public Access settings, do the following:</p>
<ul>
<li>Uncheck <code>Block all public access</code> → This allows fine-grained control over permissions.</li>
<li>AWS will show a warning. Check &quot;<strong>I acknowledge that the bucket might become public</strong>.&quot;</li>
</ul>
</li>
<li>Click <strong>Create bucket</strong>.</li>
</ol>
<h2 id="configure-bucket-permissions-for-crud-operations">Configure Bucket Permissions for CRUD Operations</h2>
<p>Now that the bucket is created, you need to allow your IAM user (<code>manifest-s3-user</code>) to <strong>perform CRUD operations</strong>.</p>
<h3 id="1-attach-a-bucket-policy">1. Attach a Bucket Policy</h3>
<ol>
<li>Open your S3 bucket and go to the <strong>Permissions</strong> tab.</li>
<li>Scroll down to <strong>Bucket policy</strong> and click <strong>Edit</strong>.</li>
<li>Add the following policy (<strong>replace <code>my-manifest-storage</code> with your actual bucket name</strong>):</li>
</ol>
<pre><code class="lang-json">{
  <span class="hljs-attr">"Version"</span>: <span class="hljs-string">"2025-02-27"</span>,
  <span class="hljs-attr">"Statement"</span>: [
    {
      <span class="hljs-attr">"Effect"</span>: <span class="hljs-string">"Allow"</span>,
      <span class="hljs-attr">"Principal"</span>: <span class="hljs-string">"*"</span>,
      <span class="hljs-attr">"Action"</span>: <span class="hljs-string">"s3:GetObject"</span>,
      <span class="hljs-attr">"Resource"</span>: <span class="hljs-string">"arn:aws:s3:::my-manifest-storage/*"</span>
    }
  ]
}
</code></pre>
<ol>
<li>Click Save changes.</li>
</ol>
<p>This policy allows the <strong>manifest-s3-user</strong> to <strong>read</strong>, <strong>write</strong>, <strong>list</strong>, and <strong>delete</strong> objects inside the bucket.</p>
<h2 id="set-up-manifest-to-use-this-s3-bucket">Set up Manifest to use this S3 bucket</h2>
<p>Now that permissions are configured, add these credentials to your environment variables in your <code>.env</code> file:</p>
<pre><code class="lang-env">
<span class="hljs-attr">S3_BUCKET</span>=my-manifest-storage
<span class="hljs-attr">S3_ENDPOINT</span>=https://s3.eu-north-<span class="hljs-number">1</span>.amazonaws.com  # Change if using a different endpoint
<span class="hljs-attr">S3_REGION</span>=eu-north-<span class="hljs-number">1</span>  # Change this to your AWS region
<span class="hljs-attr">S3_ACCESS_KEY_ID</span>=XXX
<span class="hljs-attr">S3_SECRET_ACCESS_KEY</span>=XXX
</code></pre>
<p>If you know your bucket&#39;s region, you can construct the endpoint using this format:</p>
<pre><code class="lang-arduino">http<span class="hljs-variable">s:</span>//s3.<span class="hljs-symbol">&lt;region&gt;</span>.amazonaws.<span class="hljs-keyword">com</span>
</code></pre>
<p>For example:</p>
<ul>
<li>us-east-1 → <a href="https://s3.us-east-1.amazonaws.com">https://s3.us-east-1.amazonaws.com</a></li>
<li>eu-west-3 → <a href="https://s3.eu-west-3.amazonaws.com">https://s3.eu-west-3.amazonaws.com</a></li>
</ul>
<p>Restart your backend with those changes running the following command.</p>
<pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> manifest</span>
</code></pre>
<p>Now, we&#39;ll use the Admin panel to check if S3 is used for uploading and retrieving home cover images.</p>
<h2 id="test-your-uploads-">Test Your Uploads.</h2>
<h3 id="upload-an-image">Upload an image</h3>
<ol>
<li>Go to the admin panel (<a href="http://loicalhost:1111">http://loicalhost:1111</a>) and log in with the default credentials <strong>admin@manifest.build / admin</strong></li>
<li><p>Go to <strong>Home content</strong> and click <strong>Edit</strong>.</p>
<p><img src="/assets/images/integrations/content/home-content-edit.png" alt="Manifest : home-edit page"></p>
</li>
<li><p>Remove the default image and upload a new one from your device. Once uploaded, a thumbnail should appear.</p>
</li>
<li><p>Click <strong>Submit</strong>. You will be redirected to the detail page of the home page with the image.</p>
</li>
<li><p>Open your browser inspector and inspect the image URL. You should see the URL pointing to your Amazon S3 bucket.</p>
<p><img src="/assets/images/integrations/content/image-url.png" alt="Manifest : s3-url"></p>
</li>
</ol>
<h2 id="conclusion">Conclusion</h2>
<p>In this tutorial, we set up a Manifest project and configured it to use Amazon S3 as a storage provider. We created an Amazon S3 bucket, set up the necessary IAM permissions, and integrated S3 with Manifest by updating the backend configuration.</p>
<p>Finally, we tested the setup by uploading and retrieving images through the Manifest Admin panel, ensuring that files were correctly stored in Amazon S3.</p>
<p>I hope this guide has provided the information needed to successfully configure S3 storage with Manifest. If you encounter any issues, refer to the official Manifest documentation or AWS resources for further assistance.</p>
<h2 id="second-heading">Second Heading</h2>
<ul>
<li>Unordered lists, and:<ol>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ol>
</li>
<li>More</li>
</ul>
<blockquote>
<p>Blockquote</p>
</blockquote>
<p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p>
<p>And code highlighting:</p>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{
   <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s;
}
</code></pre>
<p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p>
<p>Or an image of bears</p>
<p><img src="https://placebear.com/200/200" alt="bears"></p>
<p>The end ...</p>

    `
  },
  {
    title: 'Deploy Manifest on Render',
    name: 'Render',
    slug: 'render',
    excerpt: 'Store your files in Google Drive and access them from anywhere.',
    cover: '/assets/images/integrations/covers/integration-manifest-render.svg',
    logo: '/assets/images/integrations/render.svg',
    category: 'deployment',
    relatedResources: [
      {
        anchor: '🚀 Deploy Manifest on production',
        link: '/docs/deploy'
      },
      {
        anchor: '🪣 S3 Storage documentation',
        link: '/docs/s3-storage'
      },
      {
        anchor: '📂 File and Image upload',
        link: '/docs/upload'
      }
    ],
    htmlContent: `
    <blockquote>
<p>⚠️ warning
This guide does not ensure persistent data for the database and the storage.</p>
</blockquote>
<p>In this tutorial, we will guide you through deploying your Manifest backend on Render, a popular cloud provider.</p>
<p>You will set up a Manifest project, configure it for deployment, and then deploy it on Render. By the end of this tutorial, you should have your Manifest backend running on Render.</p>
<h2 id="what-is-manifest-">What is Manifest?</h2>
<p><a href="/">Manifest</a> is a streamlined Backend-as-a-Service designed to accelerate your development process. With Manifest, you can define your entire backend architecture in a single, intuitive YAML file. This approach not only simplifies setup but also provides a foundation for data management, storage solutions, and business logic. By abstracting the complexities of traditional backend development, Manifest enables developers to focus on building innovative features and delivering projects more swiftly.</p>
<h2 id="what-is-render-">What is Render?</h2>
<p><a href="https://render.com">Render</a> is a cloud provider that enables developers to ship apps without hassle. It offers scalable and easy-to-use services for deploying web applications, databases, and more.</p>
<h2 id="prerequisites">Prerequisites</h2>
<p>Before getting started, ensure you have the following:</p>
<p><strong>Required Knowledge:</strong></p>
<ul>
<li>Basic understanding of <a href="https://nodejs.org/en/">Node.js</a> and backend development</li>
<li>Familiarity with cloud services and deployment processes</li>
</ul>
<p><strong>Software Requirements:</strong></p>
<ul>
<li><a href="https://nodejs.org/en/">Node.js</a> version 18.x (LTS versions)</li>
<li><strong>npm</strong> (included with Node.js installation) or <strong>yarn</strong> as a package manager</li>
<li>A Render account. If you don’t have one, sign up on the <a href="https://render.com">Render registration page</a>.</li>
</ul>
<h2 id="set-up-manifest">Set up Manifest</h2>
<p>If you haven&#39;t installed Manifest yet, follow these steps:</p>
<h3 id="1-install-manifest">1. Install Manifest</h3>
<p>Run the following command in your terminal from the root of your project:</p>
<pre><code class="lang-bash">npx <span class="hljs-keyword">add</span><span class="bash">-manifest@latest</span>
</code></pre>
<p>This will generate a manifest.yml file and install the necessary dependencies.</p>
<h3 id="2-run-manifest">2. Run Manifest</h3>
<p>Before setting up for production, let’s first see how our backend behaves locally. To do that, run:</p>
<pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> manifest</span>
</code></pre>
<p>Once running, you can access the Admin panel at <a href="http://localhost:1111">http://localhost:1111</a> (admin@manifest.build / admin) and use the REST API at <a href="http://localhost:1111/api">http://localhost:1111/api</a>.</p>
<h3 id="3-create-a-start-script-for-production">3. Create a &quot;start&quot; script for production</h3>
<p>The <code>npm run manifest</code> script should only be used for <strong>development</strong> as it watches file changes.</p>
<p>Go back to your codebase and open the <code>package.json</code> file and add a new <strong>start</strong> script on the scripts list with the value <code>node node_modules/manifest/dist/manifest/src/main.js</code> as following:</p>
<p><code>json title=&quot;package.json&quot;
&quot;scripts&quot;: {
    &quot;start&quot;: &quot;node node_modules/manifest/dist/manifest/src/main.js&quot;
    [...]
}</code></p>
<h2 id="setup-render">Setup render</h2>
<p>Deploying your Manifest backend on Render is quick and easy. Follow these steps to get started.</p>
<h3 id="1-link-the-source-provider">1. Link the source provider</h3>
<p>Log in your Render account. If you don&#39;t have an account, create one on <a href="https://render.com">render.com</a>.</p>
<p>From the dashboard, click &quot;<strong>Create a new web service</strong>&quot; to get started.</p>
<p>In our example, we are deploying a backend on a <strong>GitHub</strong> repository, but you can also deploy from <strong>GitLab</strong> or <strong>BitBucket</strong>.</p>
<p>Choose the correct repository and click on &quot;<strong>Connect</strong>&quot; to continue.</p>
<h3 id="2-configure-your-app">2. Configure your app</h3>
<p>The following screen will display a form with some fields that you have to configure:</p>
<ul>
<li><strong>Region (optional):</strong> Choose the closest region to your users</li>
<li><strong>Build command</strong>: Enter <code>npm install</code></li>
<li><strong>Start command</strong>: The value should be <code>node node_modules/manifest/dist/manifest/src/main.js</code></li>
<li><strong>Environment variables</strong>: Add the 2 environment variables: <code>TOKEN_SECRET_KEY</code> (which you can generate at <a href="https://jwtsecrets.com">https://jwtsecrets.com</a>) and <code>NODE_ENV=production</code>.</li>
</ul>
<p>Click on &quot;<strong>Deploy web service</strong>&quot; to launch the deployment.</p>
<p>🎉 That&#39;s it! Your app should be available in a few minutes at the domain ending in on render.com.</p>
<blockquote>
<p>💡 TIP</p>
<p>If you want to activate health checks, go to the &quot;Health Checks&quot; section and replace <code>/healthz</code> with <code>/api/health</code></p>
</blockquote>

    `
  },
  {
    title: 'Upload media to DigitalOcean Spaces with Manifest',
    name: 'Digital Ocean Spaces',
    slug: 'digital-ocean-spaces',
    excerpt:
      'Learn how to store and access files with DigitalOcean Spaces (S3-Compatible Object Storage) for your Manifest backend.',
    cover:
      '/assets/images/integrations/covers/integration-manifest-digital-ocean-spaces.svg',
    logo: '/assets/images/integrations/digital-ocean.svg',
    category: 'storage',
    relatedResources: [
      {
        anchor: '🚀 Deploy Manifest on production',
        link: '/docs/deploy'
      },
      {
        anchor: '🪣 S3 Storage documentation',
        link: '/docs/s3-storage'
      },
      {
        anchor: '📂 File and Image upload',
        link: '/docs/upload'
      }
    ],
    htmlContent: `
    <p>In this tutorial, we will show you how to configure DigitalOcean Spaces as the storage provider for your Manifest backend.</p>
<p>You will first set up and configure a Manifest project. Then, you&#39;ll create a DigitalOcean Spaces bucket and set up the necessary API access permissions. Next, you will integrate and configure Manifest to use DigitalOcean Spaces for file storage. Finally, you will test the setup by uploading and managing files through Manifest.</p>
<p>By the end of this tutorial, you should be able to seamlessly use DigitalOcean Spaces as a storage solution for any Manifest project.</p>
<h2 id="what-is-manifest-">What is Manifest?</h2>
<p><a href="/">Manifest</a> is a lightweight Backend-as-a-Service (BaaS) designed for simplicity and speed. With just a single YAML file, you can define your backend and instantly access data management, storage, and business logic. Manifest streamlines development by removing complex configurations, allowing you to build and deploy faster.</p>
<h2 id="what-is-digitalocean-spaces-">What is DigitalOcean Spaces?</h2>
<p><a href="https://www.digitalocean.com/products/spaces">DigitalOcean Spaces</a> is an S3-compatible object storage service designed for scalability, high availability, and performance. It allows users to store and retrieve any type of files, such as images, videos, and documents, while offering a built-in CDN for faster content delivery.</p>
<h2 id="prerequisites">Prerequisites</h2>
<p>Before getting started, ensure you have the following:</p>
<p><strong>Required Knowledge:</strong></p>
<ul>
<li><a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs">Node.js</a></li>
<li>Basic understanding of cloud storage services</li>
<li>Manifest: Follow the <a href="/docs">installation documentation</a> to familiarize yourself with Manifest.</li>
</ul>
<p><strong>Software Requirements:</strong></p>
<ul>
<li><a href="https://nodejs.org/en/">Node.js</a> version 18.x (LTS versions)</li>
<li><strong>npm</strong> (included with Node.js installation) or <strong>yarn</strong> as a package manager</li>
<li>A DigitalOcean account. You can <a href="https://cloud.digitalocean.com/registrations/new">sign up here</a></li>
</ul>
<h2 id="set-up-manifest">Set up Manifest</h2>
<p>If you haven&#39;t installed Manifest yet, follow these steps:</p>
<h3 id="1-install-manifest">1. Install Manifest</h3>
<p>From the root of your project, run the following command in your terminal:</p>
<pre><code class="lang-bash">npx <span class="hljs-keyword">add</span><span class="bash">-manifest@latest</span>
</code></pre>
<p>This will generate a <code>manifest.yml</code> file and install all the necessary dependencies.</p>
<h3 id="2-run-manifest">2. Run Manifest</h3>
<p>After that, you can launch the backend locally:</p>
<pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> manifest</span>
</code></pre>
<p>Once running, you can access the Admin panel at <a href="http://localhost:1111">http://localhost:1111</a> (admin@manifest.build / admin) and use the REST API at <a href="http://localhost:1111/api">http://localhost:1111/api</a>.</p>
<p>Manifest&#39;s default backend includes a <code>home content</code> entity with a property of type <strong>image</strong> for a cover image. This is enough to test the DigitalOcean Spaces integration and move forward.</p>
<p><img src="/assets/images/integrations/content/default-backend-yaml-file.png" alt="Manifest : default yaml backend"></p>
<h2 id="set-up-digitalocean-spaces">Set Up DigitalOcean Spaces</h2>
<h3 id="1-create-a-digitalocean-spaces-bucket">1. Create a DigitalOcean Spaces Bucket</h3>
<ol>
<li>In the DigitalOcean sidebar, click <strong>Spaces Object Storage</strong>.</li>
<li>Click <strong>Create</strong> &gt; <strong>Spaces Object Storage</strong>.</li>
<li>Select a datacenter region (choose the closest to your users).</li>
<li>Choose a unique Spaces Bucket name (e.g., <code>manifest-bucket</code>).</li>
<li>Click <strong>Create a Spaces Bucket</strong>.</li>
</ol>
<h3 id="2-configure-bucket-permissions-for-crud-operations">2. Configure Bucket Permissions for CRUD Operations</h3>
<ol>
<li>From your Spaces Object Storage page, click on the <strong>Setting</strong> tab.</li>
<li>Click <strong>Create Access Key</strong> button</li>
<li>Choose your permissions. For this tutorial, we clicked <code>All Permissions (Bucket &amp; Objects)</code></li>
<li>Give this access key a name (e.g., <code>access-key-full-access</code>) and click <strong>Create access key</strong></li>
</ol>
<p><img src="/assets/images/integrations/content/bucket-settings.png" alt="Digital ocean : Bucket access"></p>
<ol>
<li>Copy your <strong>Access Key ID</strong> and <strong>secret key</strong>.</li>
</ol>
<p>⚠️ Important: The Secret Key is only shown once. If you lose it, you must generate a new key.</p>
<h2 id="set-up-manifest-to-use-digitalocean-spaces">Set up Manifest to use DigitalOcean Spaces</h2>
<p>Now that permissions are configured, add these credentials to your environment variables in your <code>.env</code> file:</p>
<pre><code class="lang-env">
<span class="hljs-attr">S3_BUCKET</span>=manifest-bucket
<span class="hljs-attr">S3_ENDPOINT</span>=https://fra1.digitaloceanspaces.com  # Change if using a different endpoint
<span class="hljs-attr">S3_REGION</span>=fra1  # Change this to your AWS region
<span class="hljs-attr">S3_ACCESS_KEY_ID</span>=XXX
<span class="hljs-attr">S3_SECRET_ACCESS_KEY</span>=XXX
</code></pre>
<p>Your DigitalOcean Spaces URL (<a href="https://manifest-bucket.fra1.digitaloceanspaces.com">https://manifest-bucket.fra1.digitaloceanspaces.com</a>) contains everything you need:</p>
<pre><code class="lang-arduino">S3_BUCKET → The <span class="hljs-keyword">first</span> part <span class="hljs-keyword">of</span> <span class="hljs-keyword">the</span> <span class="hljs-built_in">URL</span> (manifest-bucket).
S3_ENDPOINT → The base domain <span class="hljs-keyword">without</span> <span class="hljs-keyword">the</span> bucket name (<span class="hljs-keyword">https</span>://fra1.digitaloceanspaces.com).
S3_REGION → The subdomain <span class="hljs-keyword">before</span> .digitaloceanspaces.com (fra1).
</code></pre>
<p>That&#39;s how the values in your .env file are determined! 🚀</p>
<p>Restart your backend with those changes running the following command.</p>
<pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> manifest</span>
</code></pre>
<p>Now, we&#39;ll use the Admin panel to check if S3 is used for uploading and retrieving home cover images.</p>
<h2 id="test-your-uploads-">Test Your Uploads.</h2>
<h3 id="upload-an-image">Upload an image</h3>
<ol>
<li>Go to the admin panel (<a href="http://loicalhost:1111">http://loicalhost:1111</a>) and log in with the default credentials <strong>admin@manifest.build / admin</strong></li>
<li><p>Go to <strong>Home content</strong> and click <strong>Edit</strong>.</p>
<p><img src="/assets/images/integrations/content/home-content-edit.png" alt="Manifest : home-edit page"></p>
</li>
<li><p>Remove the default image and upload a new one from your device. Once uploaded, a thumbnail should appear.</p>
</li>
<li><p>Click <strong>Submit</strong>. You will be redirected to the detail page of the home page with the image.</p>
</li>
<li><p>Open your browser inspector and inspect the image URL. You should see the URL pointing to your DigitalOcean Spaces Bucket.</p>
<p><img src="/assets/images/integrations/content/do-spaces-url.png" alt="Manifest : do-s3-url"></p>
</li>
</ol>
<h2 id="conclusion">Conclusion</h2>
<p>In this tutorial, we set up a Manifest project and configured it to use Digital Ocean Spaces Bucket as a storage provider. We created an DigitalOcean Spaces Bucket, set up the necessary IAM permissions, and integrated Digital Ocean Spaces with Manifest by updating the backend configuration.</p>
<p>Finally, we tested the setup by uploading and retrieving images through the Manifest Admin panel, ensuring that files were correctly stored in DigitalOcean Spaces.</p>
<p>I hope this guide has provided the information needed to successfully configure Digital Ocean Spaces (S3-Compatible Object Storage) with Manifest. If you encounter any issues, refer to the official Manifest documentation or AWS resources for further assistance.</p>
    `
  },
  {
    title: 'Deploy Manifest on Fly.io',
    name: 'Fly.io',
    slug: 'fly-io',
    excerpt:
      'Global application hosting with low latency and automatic scaling.',
    cover: '/assets/images/integrations/covers/integration-manifest-fly-io.svg',
    logo: '/assets/images/integrations/fly-io.svg',
    category: 'deployment',
    relatedResources: [
      {
        anchor: '🚀 Deploy Manifest on production',
        link: '/docs/deploy'
      },
      {
        anchor: '🪣 S3 Storage documentation',
        link: '/docs/s3-storage'
      },
      {
        anchor: '📂 File and Image upload',
        link: '/docs/upload'
      }
    ],
    htmlContent: `
    <blockquote>
<p>⚠️ warning
This guide does not ensure persistent data for the database and the storage.</p>
</blockquote>
<p>In this tutorial, we will guide you through deploying your Manifest backend on Fly.io, a cloud provider focused on simplicity and speed.</p>
<p>You will set up a Manifest project, configure it for deployment, and then deploy it on Fly.io. By the end of this tutorial, you should have your Manifest backend running on Fly.io.</p>
<h2 id="what-is-manifest-">What is Manifest?</h2>
<p><a href="/">Manifest</a> is a lightweight Backend-as-a-Service that speeds up backend development. With just one clear and concise YAML file, you can define your entire backend effortlessly. This simplifies configuration while offering solutions for data management, storage, and business logic. By eliminating the usual backend complexities, Manifest lets developers concentrate on shipping projects faster.</p>
<h2 id="what-is-fly-io-">What is Fly.io?</h2>
<p><a href="https://fly.io/">Fly.io</a> is a developer-friendly cloud provider that focuses on fast deployments and a global reach. Fly.io enables you to run applications and databases in regions near your audience for lower latency and better performance.</p>
<h2 id="prerequisites">Prerequisites</h2>
<p>Before getting started, ensure you have the following:</p>
<p><strong>Required Knowledge:</strong></p>
<ul>
<li>Basic understanding of <a href="https://nodejs.org/en/">Node.js</a> and backend development</li>
<li>Familiarity with cloud services and deployment processes</li>
</ul>
<p><strong>Software Requirements:</strong></p>
<ul>
<li><a href="https://nodejs.org/en/">Node.js</a> version 18.x (LTS versions)</li>
<li><strong>npm</strong> (included with Node.js installation) or <strong>yarn</strong> as a package manager</li>
<li>A Fly.io account. If you don’t have one, sign up on the <a href="https://fly.io/app/sign-up">Fly.io registration page</a>.</li>
</ul>
<h2 id="set-up-manifest">Set up Manifest</h2>
<p>If you haven&#39;t installed Manifest yet, follow these steps:</p>
<h3 id="1-install-manifest">1. Install Manifest</h3>
<p>Run the following command in your terminal from the root of your project:</p>
<pre><code class="lang-bash">npx <span class="hljs-keyword">add</span><span class="bash">-manifest@latest</span>
</code></pre>
<p>This will generate a manifest.yml file and install the necessary dependencies.</p>
<h3 id="2-run-manifest">2. Run Manifest</h3>
<p>Before setting up for production, let's first see how our backend behaves locally. To do that, run:</p>
<pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> manifest</span>
</code></pre>
<p>Once running, you can access the Admin panel at <a href="http://localhost:1111">http://localhost:1111</a> (admin@manifest.build / admin) and use the REST API at <a href="http://localhost:1111/api">http://localhost:1111/api</a>.</p>
<h3 id="3-create-a-start-script-for-production">3. Create a &quot;start&quot; script for production</h3>
<p>The <code>npm run manifest</code> script should only be used for <strong>development</strong> as it watches file changes.</p>
<p>Open the <code>package.json</code> file in your codebase and insert a new start script within the scripts list, setting its value to <code>node node_modules/manifest/dist/manifest/src/main.js</code> as demonstrated below.</p>
<p><code>json title=&quot;package.json&quot;
&quot;scripts&quot;: {
    &quot;start&quot;: &quot;node node_modules/manifest/dist/manifest/src/main.js&quot;
    [...]
}</code></p>
<h2 id="setup-fly-io">Setup Fly.io</h2>
<p>Deploying your Manifest backend on Fly.io is straightforward and efficient. Follow these steps to get started.</p>
<h3 id="1-create-a-new-app-on-fly-io">1. Create a new app on Fly.io</h3>
<p>Sign in to <a href="https://fly.io/">Fly.io</a> to access your dashboard. Then, click <code>Launch an app</code> to start the process.</p>
<p>In our example we are deploying a Manifest backend hosted in <a href="https://github.com/">GitHub</a>. You can also connect to your codebase using the <a href="https://fly.io/docs/flyctl/install/">Fly.io CLI</a>. After configuring your GitHub integration with Fly.io, select the repository and click on <code>Deploy repository</code> to launch the deployment.</p>
<p><img src="/assets/images/integrations/content/fly1.png" alt="Fly.io new app"></p>
<h3 id="2-configure-your-app">2. Configure your app</h3>
<p>The next screen will allow you to configure the app to make it work as you want. Here are the settings that you can or must update (in UI order):</p>
<ul>
<li><strong>Basics (optional)</strong>: Choose your app&#39;s name</li>
<li><strong>Region (optional):</strong> Choose the region closest to where your audience is</li>
<li><strong>Network</strong>: Set the internal port to <code>1111</code> to match the default Manifest port.</li>
<li><strong>CPU &amp; Memory (optional)</strong>: Manifest can run on the <strong>1 CPU</strong> and <strong>512 MB</strong> VM Memory on small/medium projects. The default size is a bit bigger, you can replace it by a smaller one if you want.</li>
<li><strong>Secrets</strong>: Add the 2 secrets: <code>TOKEN_SECRET_KEY</code> (which you can generate at <a href="https://jwtsecrets.com">JWTSecret.com</a>) and <code>NODE_ENV=production</code>.</li>
</ul>
<p>Validate the config and Fly.io will build the image and deploy.</p>
<p>🎉 That&#39;s it! Click on <code>View app</code> to see it.</p>

`
  },
  {
    title: 'Deploy Manifest on DigitalOcean',
    name: 'Digital Ocean',
    slug: 'digital-ocean',
    excerpt: 'Cloud infrastructure provider with data centers worldwide.',
    cover:
      '/assets/images/integrations/covers/integration-manifest-digital-ocean-spaces.svg',
    logo: '/assets/images/integrations/digital-ocean.svg',
    category: 'deployment',
    relatedResources: [
      {
        anchor: '🚀 Deploy Manifest on production',
        link: '/docs/deploy'
      },
      {
        anchor: '🪣 S3 Storage documentation',
        link: '/docs/s3-storage'
      },
      {
        anchor: '📂 File and Image upload',
        link: '/docs/upload'
      }
    ],
    htmlContent: `
    <blockquote>
<p>⚠️ warning
This guide does not ensure persistent data for the database and the storage.</p>
</blockquote>
<p>In this tutorial, We will guide you through deploying your Manifest backend on DigitalOcean, a popular cloud provider.</p>
<p>You will set up a Manifest project, configure it for deployment, and then deploy it on DigitalOcean. By the end of this tutorial, you should have your Manifest backend running on <strong>DigitalOcean</strong>.</p>
<h2 id="what-is-manifest-">What is Manifest?</h2>
<p><a href="/">Manifest</a> is a lightweight Backend-as-a-Service that speeds up backend development. With just one clear and concise YAML file, you can define your entire backend structure effortlessly. This simplifies configuration while offering robust solutions for data management, storage, and business logic. By eliminating the usual backend complexities, Manifest lets developers concentrate on creating features and shipping projects faster.</p>
<h2 id="what-is-digitalocean-">What is DigitalOcean?</h2>
<p><a href="https://www.digitalocean.com/">DigitalOcean</a> is a popular hosting provider that delivers a high quality service. This guide shows how to deploy Manifest using DigitalOcean App Platform, a service to deploy apps with very few infrastructure configuration.</p>
<h2 id="prerequisites">Prerequisites</h2>
<p>Before getting started, ensure you have the following:</p>
<p><strong>Required Knowledge:</strong></p>
<ul>
<li>Basic understanding of <a href="https://nodejs.org/en/">Node.js</a> and backend development</li>
<li>Familiarity with cloud services and deployment processes</li>
</ul>
<p><strong>Software Requirements:</strong></p>
<ul>
<li><a href="https://nodejs.org/en/">Node.js</a> version 18.x (LTS versions)</li>
<li><strong>npm</strong> (included with Node.js installation) or <strong>yarn</strong> as a package manager</li>
<li>A DigitalOcean account. If you don’t have one, sign up on the <a href="https://digitalocean.com">DigitalOcean registration page</a>.</li>
</ul>
<h2 id="set-up-manifest">Set up Manifest</h2>
<p>If you haven&#39;t installed Manifest yet, follow these steps:</p>
<h3 id="1-install-manifest">1. Install Manifest</h3>
<p>Run the following command in your terminal from the root of your project:</p>
<pre><code class="lang-bash">npx <span class="hljs-keyword">add</span><span class="bash">-manifest@latest</span>
</code></pre>
<p>This will generate a manifest.yml file and install the necessary dependencies.</p>
<h3 id="2-run-manifest">2. Run Manifest</h3>
<p>Before setting up for production, let's first see how our backend behaves locally. To do that, run:</p>
<pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> manifest</span>
</code></pre>
<p>Once running, you can access the Admin panel at <a href="http://localhost:1111">http://localhost:1111</a> (admin@manifest.build / admin) and use the REST API at <a href="http://localhost:1111/api">http://localhost:1111/api</a>.</p>
<h3 id="3-create-a-start-script-for-production">3. Create a &quot;start&quot; script for production</h3>
<p>The <code>npm run manifest</code> script should only be used for <strong>development</strong> as it watches file changes.</p>
<p>Go back to your codebase and open the <code>package.json</code> file and add a new <strong>start</strong> script on the scripts list with the value <code>node node_modules/manifest/dist/manifest/src/main.js</code> as following:</p>
<p><code>json title=&quot;package.json&quot;
&quot;scripts&quot;: {
    &quot;start&quot;: &quot;node node_modules/manifest/dist/manifest/src/main.js&quot;
    [...]
}</code></p>
<h2 id="set-up-your-app-on-digitalocean">Set Up Your App on DigitalOcean</h2>
<p>First, log in or create an account on DigitalOcean.</p>
<p>Then click on &quot;<strong>Create</strong>&quot; button on the top menu, and select &quot;<strong>App Platform</strong>&quot; in the dropdown menu.</p>
<p><img src="/assets/images/integrations/content/create-app-platform.png" alt="DigitalOcean source selection"></p>
<h3 id="link-the-source-provider">Link the source provider</h3>
<p>In our example we are deploying a Manifest backend hosted in <a href="https://github.com/">GitHub</a> but you can get it from other sources too, like GitLab or Docker Hub (<a href="./deploy.md#docker">see Docker config here</a>).</p>
<p><img src="/assets/images/integrations/content/do1.png" alt="DigitalOcean source selection"></p>
<p>Select your repository and branch and leave the &quot;source directory&quot; as it is. Leave the &quot;autodeploy&quot; checkbox checked if you want to allow push-to-deploy on your main branch. Click &quot;<strong>Next</strong>&quot;.</p>
<h3 id="configure-the-app">Configure the app</h3>
<p>You should see your app recognized as &quot;<strong>web service</strong>&quot;, click on &quot;<strong>edit</strong>&quot; button to go into the configuration.</p>
<p><img src="/assets/images/integrations/content/do2.png" alt="DigitalOcean web service edition"></p>
<p>Here are the points you can edit (in page order)</p>
<ul>
<li><strong>Resource size (optional)</strong>: Manifest can run on the cheapest instance ($5) on small/medium projects. By default DigitalOcean chooses a bigger one, change it to save some money.</li>
<li><strong>Run command</strong>: Replace the default run command by <code>node node_modules/manifest/dist/manifest/src/main.js</code></li>
<li><strong>Public HTTP Port:</strong> Change it to <code>1111</code> to match Manifest&#39;s default port.</li>
</ul>
<p>Then you can click on &quot;<strong>Next</strong>&quot;.</p>
<h3 id="set-environment-variables">Set environment variables</h3>
<p>Click on your app name&#39;s &quot;<strong>Edit</strong>&quot; button and add the 2 environment variables: <code>TOKEN_SECRET_KEY</code> (you can generate one with <a href="https://jwtsecrets.com">JWTSecret.com</a>) and <code>NODE_ENV=production</code>.</p>
<p><img src="/assets/images/integrations/content/do3.png" alt="DigitalOcean environment variable settings"></p>
<h2 id="deploy">Deploy</h2>
<p>The last step lets you choose your app name and region where you should select the location that is closest to your users. After the recap you are good to go. Click on <strong>Create resources</strong> to launch the build.</p>
<p>🎉 That&#39;s it! You can click on the &quot;<strong>Live App</strong>&quot; button to see it live. To set up your own domain name, add it to the &quot;<strong>Domains</strong>&quot; setting.</p>

    `
  },

  {
    title: 'Deploy Manifest on Heroku',
    name: 'Heroku',
    slug: 'heroku',
    excerpt:
      'Simplified cloud application hosting with scalable deployment options.',
    cover: '/assets/images/integrations/covers/integration-manifest-heroku.svg',
    logo: '/assets/images/integrations/heroku.svg',
    category: 'deployment',
    relatedResources: [
      {
        anchor: '🚀 Deploy Manifest on production',
        link: '/docs/deploy'
      },
      {
        anchor: '🪣 S3 Storage documentation',
        link: '/docs/s3-storage'
      },
      {
        anchor: '📂 File and Image upload',
        link: '/docs/upload'
      }
    ],
    htmlContent: `<blockquote>
<p>⚠️ warning
This guide does not ensure persistent data for the database and the storage.</p>
</blockquote>
<p>In this tutorial, we will guide you through deploying your Manifest backend on Heroku, a cloud platform known for its simplicity and developer-friendly interface.</p>
<p>You will set up a Manifest project, configure it for deployment, and deploy it on Heroku. By the end of this tutorial, your Manifest backend should be running successfully on Heroku.</p>
<h2 id="what-is-manifest-">What is Manifest?</h2>
<p><a href="/">Manifest</a> is a lightweight Backend-as-a-Service that simplifies backend development. Using a single YAML file, you can define your entire backend, including data management, storage, and business logic. This approach removes complexity and accelerates project delivery.</p>
<h2 id="what-is-fly-io-">What is Fly.io?</h2>
<p><a href="https://www.heroku.com/">Heroku</a> is a cloud platform that allows developers to build, run, and operate applications entirely in the cloud. It offers a streamlined experience for deploying, managing, and scaling applications.</p>
<h2 id="prerequisites">Prerequisites</h2>
<p>Before getting started, ensure you have the following:</p>
<p><strong>Required Knowledge:</strong></p>
<ul>
<li>Basic understanding of <a href="https://nodejs.org/en/">Node.js</a> and backend development</li>
<li>Familiarity with cloud services and deployment processes</li>
</ul>
<p><strong>Software Requirements:</strong></p>
<ul>
<li><a href="https://nodejs.org/en/">Node.js</a> version 18.x (LTS versions)</li>
<li><strong>npm</strong> (included with Node.js installation) or <strong>yarn</strong> as a package manager</li>
<li>A Heroku account. If you don’t have one, sign up on the <a href="https://signup.heroku.com/">Heroku registration page</a>.</li>
</ul>
<h2 id="set-up-manifest">Set up Manifest</h2>
<p>If you haven&#39;t installed Manifest yet, follow these steps:</p>
<h3 id="1-install-manifest">1. Install Manifest</h3>
<p>Run the following command in your terminal from the root of your project:</p>
<pre><code class="lang-bash">npx <span class="hljs-keyword">add</span><span class="bash">-manifest@latest</span>
</code></pre>
<p>This will generate a manifest.yml file and install the necessary dependencies.</p>
<h3 id="2-run-manifest">2. Run Manifest</h3>
<p>Before setting up for production, let's first see how our backend behaves locally. To do that, run:</p>
<pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> manifest</span>
</code></pre>
<p>Once running, you can access the Admin panel at <a href="http://localhost:1111">http://localhost:1111</a> (admin@manifest.build / admin) and use the REST API at <a href="http://localhost:1111/api">http://localhost:1111/api</a>.</p>
<h3 id="3-create-a-start-script-for-production">3. Create a &quot;start&quot; script for production</h3>
<p>The <code>npm run manifest</code> script should only be used for <strong>development</strong> as it watches file changes.</p>
<p>Go back to your codebase and open the <code>package.json</code> file and add a new <strong>start</strong> script on the scripts list with the value <code>node node_modules/manifest/dist/manifest/src/main.js</code> as following:</p>
<p><code>json title=&quot;package.json&quot;
&quot;scripts&quot;: {
    &quot;start&quot;: &quot;node node_modules/manifest/dist/manifest/src/main.js&quot;
    [...]
}</code></p>
<h2 id="setup-heroku">Setup Heroku</h2>
<p>Deploying your Manifest backend on Heroku is straightforward and efficient. Follow these steps to get started.</p>
<h3 id="1-link-to-the-source-provider">1. Link to the source provider</h3>
<p>Sign in to your <a href="https://heroku.com/">Heroku</a> account or create a new one.</p>
<p>You can click on the &quot;New&quot; button and then &quot;Create a new app&quot; to get started. Choose the app name and the region that is closest to your users and click on &quot;Create app&quot;.</p>
<p>In our example we are deploying a Manifest backend hosted in <a href="https://github.com">GitHub</a> but you can get it from other sources too like Heroku Git or Container Registry.</p>
<p>Select &quot;GitHub&quot; and then connect the repository of your manifest backend. Click on &quot;Automatic deploys&quot; if you want to enable push-to-deploy on the main branch. Make sure that you are on the correct branch that corresponds to your production version (usually <code>main</code> or <code>master</code>).</p>
<p><img src="/assets/images/integrations/content/heroku1.png" alt="Heroku setup source and automatic deploys"></p>
<p>Click <code>Deploy branch</code> to build your app.</p>
<blockquote>
<p>A message will indicate that your app is ready, and a link to view it will appear. However, we still have some configuration to make it work.</p>
</blockquote>
<h3 id="2-add-environment-variables">2. Add environment variables</h3>
<p>Go to the <code>Settings</code> tab and click on &quot;Reveal Config Vars&quot; in the &quot;Config Vars&quot; section. Then add the 2 environment variables: <code>TOKEN_SECRET_KEY</code> (which you can generate at <a href="https://jwtsecrets.com">https://jwtsecrets.com</a>) and <code>NODE_ENV=production</code>.</p>
<p>🎉 That&#39;s it! Now you can click on <code>Open app</code> to see it!</p>
`
  }
]
