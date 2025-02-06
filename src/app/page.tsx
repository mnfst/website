'use client'

import { track } from '@vercel/analytics'
import Image from 'next/image'
import { FAQ } from './components/FAQ'
import InstallCLI from './components/InstallCLI'
import LiveCodeHero from './components/LiveCodeHero'
import SubscribeForm from './components/SubscribeForm'

export default function Home() {
  return (
    <div>
      <div className="mt-6 pt-4">
        <div className="container-fluid is-hero">
          <div className="container zi-1 has-text-centered">
            <div className="columns is-multiline">
              <div className="column is-8 is-offset-2">
                <div className="content is-normal">
                  <h1 className="title is-0 mb-5">
                    The
                    <span className="title-gradient">
                      {' '}
                      1-file Micro-backend{' '}
                    </span>{' '}
                    for your frontend
                  </h1>
                  <p className="subtitle">
                    Manifest micro-backend powers websites, apps and directories
                    around the world with 1 YAML file only.
                  </p>
                </div>
              </div>
              <div className="column is-6-tablet is-offset-3">
                <div className="content is-normal  mb-6 is-flex is-align-items-center is-justify-content-center box-main-cta">
                  <InstallCLI />
                  <a
                    className="button is-light"
                    href="/docs/install"
                    target="_blank"
                    onClick={() => {
                      track('Install')
                    }}
                  >
                    Get started
                  </a>
                </div>
              </div>
              <div className="column is-12 pb-0">
                <div className="has-background-wheel"></div>
                <div className="has-blurred-bg"></div>
                <div className="hero-bg has-border-top"></div>
                <LiveCodeHero />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-full has-background-white">
        <div className="container py-6">
          <div className="columns is-multiline">
            <div className="column is-8 is-offset-2 mb-4 mt-5">
              <div className=" is-normal card-content--how-it-works">
                <div className="content is-normal has-text-centered has-text-left--mobile mt-4 zi-1">
                  <h2>A hassle-free backend with essential features</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-multiline has-line-h has-line-v">
            <div className="column is-3">
              <div className="content backend-list__wrapper">
                <span className="backend-list__item">
                  <span className="icon  backend-list__icon">
                    <i className="lni lni-database has-text-success"></i>
                  </span>
                  <span>Database</span>
                </span>

                <p className="is-size-6">
                  Built-in persistent database to store data
                </p>
              </div>
            </div>
            <div className="column is-3">
              <div className="content backend-list__wrapper">
                <span className="backend-list__item">
                  <span className="icon  backend-list__icon">
                    <i className="lni lni-layout has-text-success"></i>
                  </span>
                  <span>Admin Panel</span>
                </span>

                <p className="is-size-6">
                  Ready-to-use back-office dashboard for admins
                </p>
              </div>
            </div>
            <div className="column is-3">
              <div className="content backend-list__wrapper">
                <span className="backend-list__item">
                  <span className="icon  backend-list__icon">
                    <i className="lni lni-cog has-text-success"></i>
                  </span>
                  <span>REST API</span>
                </span>

                <p className="is-size-6">
                  Instant CRUD endpoints and OPEN API doc (Swagger)
                </p>
              </div>
            </div>
            <div className="column is-3">
              <div className="content backend-list__wrapper">
                <span className="backend-list__item">
                  <span className="icon  backend-list__icon">
                    <i className="lni lni-cloud-download has-text-success"></i>
                  </span>
                  <span>File Storage</span>
                </span>

                <p className="is-size-6">
                  Store user files. Resize and optimize images
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-6">
          <div className="columns is-gapless is-multiline mb-0">
            <div className="column is-12 has-text-centered">
              <div className="card has-strokes has-background-white-bis is-shadowless py-4">
                <div className="backed-by-wrapper is-flex is-align-items-center is-justify-content-center mt-4">
                  <span className="is-size-7">Backed by:</span>
                  <img
                    src="./assets/images/idf-logo.svg"
                    alt="IDF logo"
                    width="130px"
                    className="idf-sf mx-4 mb-2"
                  />
                  <div className="backed-by-logos is-flex is-align-items-center is-justify-content-center">
                    <img
                      src="./assets/images/hec-incubateur.svg"
                      alt="HEC Incubateur logo"
                      width="234px"
                      className="logo-hec mx-4"
                    />
                    <img
                      src="./assets/images/station-f-logo.svg"
                      alt="Station F logo"
                      width="99px"
                      className="logo-sf mx-4 mb-2"
                    />
                  </div>
                  <img
                    src="./assets/images/inria-logo.svg"
                    alt="Inria Startup Studio logo"
                    width="100px"
                    className="inria-logo mx-4 mb-3"
                  />
                </div>
              </div>
            </div>
            <div className="column is-12 has-text-centered">
              <div className="card has-strokes--gradient is-shadowless py-6">
                <div className="card-content">
                  <div className="content is-normal">
                    <div className="columns is-multiline">
                      <div className="column is-12 pb-0">
                        <h2>No bloat, no clutter, just simplicity.</h2>
                      </div>
                      <div className="column is-6 pt-0 is-offset-3">
                        <p>
                          Manifest lets you build and deploy a backend as easily
                          as creating a GitHub repo. Start fast, develop
                          effortlessly, and focus on your frontend with
                          simplicity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-gapless is-multiline mb-0">
            <div className="column is-6">
              <div className="card is-fullheight has-strokes is-shadowless py-4 is-flex is-align-items-center is-justify-content-center">
                <div className="card-content p-64">
                  <div className="content is-normal">
                    <h2>Connect to any frontend</h2>
                    <p>
                      Plug-and-play with all frontend stacks and mobile stacks
                      through our <strong>JS SDK</strong> or{' '}
                      <strong>REST API</strong>. Adding a backend to a website
                      or an app to make it dynamic has never been that easy.
                    </p>
                    <p>
                      Yes, you can do <strong>SSG</strong> and{' '}
                      <strong>SSR</strong> too.
                    </p>
                    <p className="mb-2">
                      <a href="/docs/javascript-sdk">
                        <span className="icon-text">
                          <span>See the JS SDK documentation</span>
                          <span className="icon">
                            <i className="lni lni-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </p>
                    <p>
                      <a href="/docs/rest-api">
                        <span className="icon-text">
                          <span>Use the REST API</span>
                          <span className="icon">
                            <i className="lni lni-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="card is-fullheight has-strokes is-shadowless card--media is-flex is-align-items-center is-justify-content-center">
                <div className="stack-grid-container">
                  <div className="stack-grid-row">
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-svelte.svg"
                        title="Svelte logo"
                        alt="Svelte"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-vue.svg"
                        title="Vue logo"
                        alt="Vue"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-preact.svg"
                        title="Preact logo"
                        alt="Preact"
                      />
                    </div>
                    <div className="stack-grid-item is-hidden-touch">
                      <img
                        src="./assets/images/stack/logo-angular.svg"
                        title="Angular logo"
                        alt="Angular"
                      />
                    </div>
                  </div>
                  <div className="stack-grid-row">
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-nextjs.svg"
                        title="Next logo"
                        alt="Next.js"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-nuxtjs.svg"
                        title="Nuxt logo"
                        alt="Nuxt.js"
                      />
                    </div>

                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-react.svg"
                        title="React logo"
                        alt="React"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-astro.svg"
                        title="Astro logo"
                        alt="Astro"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-blitz.svg"
                        title="Blitz logo"
                        alt="Blitz"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-remix.svg"
                        title="Remix logo"
                        alt="Remix"
                      />
                    </div>
                    <div className="stack-grid-item is-hidden-desktop">
                      <img
                        src="./assets/images/stack/logo-angular.svg"
                        title="Angular logo"
                        alt="Angular"
                      />
                    </div>
                    <div className="stack-grid-item is-hidden-desktop">
                      <img
                        src="./assets/images/stack/logo-flutter.svg"
                        title="Flutter logo"
                        alt="Flutter"
                      />
                    </div>
                  </div>
                  <div className="stack-grid-row">
                    <div className="stack-grid-item is-hidden-touch">
                      <img
                        src="./assets/images/stack/logo-flutter.svg"
                        title="Flutter logo"
                        alt="Flutter"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-swift.svg"
                        title="Swift logo"
                        alt="Swift"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-ionic.svg"
                        title="Ionic logo"
                        alt="Ionic"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-meteor.svg"
                        title="Meteor logo"
                        alt="Meteor"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-gapless is-multiline mb-0 is-flex-direction-row-reverse-tablet">
            <div className="column is-6">
              <div className="card is-fullheight has-strokes is-shadowless py-4 is-flex is-align-items-center is-justify-content-flex-start">
                <div className="card-content p-64">
                  <div className="content is-normal">
                    <h2>World class admin panel</h2>
                    <p>
                      The Manifest admin panel stands toe-to-toe with the admin
                      panels of heavyweight solutions.
                    </p>
                    <p>
                      It is simple, elegant, and most importantly{' '}
                      <strong>non-technical</strong> so you can give it to your
                      customers and app administrators without the fear that
                      they will break anything.
                    </p>
                    <p>
                      <a
                        href="https://demo-collections.manifest.build"
                        target="_blank"
                      >
                        <span className="icon-text">
                          <span>See the admin panel online demo</span>
                          <span className="icon">
                            <i className="lni lni-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="card is-fullheight has-strokes is-shadowless card--media is-flex is-align-items-center is-justify-content-center py-0">
                <div className="card-content pb-0 is-fullheight is-flex is-justify-content-flex-end has-background-pearl">
                  <img
                    src="./assets/images/adminpanel.gif"
                    alt="Manifest admin panel"
                    className="is-object-fit-contain is-object-position-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-gapless is-multiline mb-0">
            <div className="column is-6">
              <div className="card is-fullheight has-strokes is-shadowless py-4 is-flex is-align-items-center is-justify-content-center">
                <div className="card-content p-64">
                  <div className="content is-normal">
                    <h2>Self hosted</h2>
                    <p>
                      Manifest is a free and open-source Backend-as-a-Service
                      that you can use anywhere.
                    </p>
                    <p>
                      Enjoy Manifest on your way: no lock-in, and keep your data
                      private.
                    </p>
                    <p className="mb-2">
                      <a href="/docs/deploy">
                        <span className="icon-text">
                          <span>See deployment guides</span>
                          <span className="icon">
                            <i className="lni lni-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="card is-fullheight has-strokes is-shadowless card--media is-flex is-align-items-center is-justify-content-center has-background-pearl">
                <div className="hosting-grid-container">
                  <div className="hosting-grid-row">
                    <div className="hosting-grid-item">
                      <img
                        src="./assets/images/hosting/logo-render.svg"
                        alt="Render"
                        title="Render logo"
                      />
                    </div>
                    <div className="hosting-grid-item">
                      <img
                        src="./assets/images/hosting/logo-fly.svg"
                        alt="Fly.io"
                        title="Fly.io logo"
                      />
                    </div>
                  </div>
                  <div className="hosting-grid-row">
                    <div className="hosting-grid-item">
                      <img
                        src="./assets/images/hosting/logo-digitalocean.svg"
                        alt="Digital Ocean"
                        title="Digital Ocean logo"
                      />
                    </div>
                  </div>
                  <div className="hosting-grid-row">
                    <div className="hosting-grid-item">
                      <img
                        src="./assets/images/hosting/logo-heroku.svg"
                        alt="Heroku"
                        title="Heroku logo"
                      />
                    </div>
                    <div className="hosting-grid-item">
                      <img
                        src="./assets/images/hosting/logo-docker.svg"
                        alt="Docker"
                        title="Docker logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-gapless is-multiline mb-0 is-flex-direction-row-reverse-tablet">
            <div className="column is-6">
              <div className="card is-fullheight has-strokes is-shadowless py-4 is-flex is-align-items-center is-justify-content-flex-start">
                <div className="card-content p-64">
                  <div className="content is-normal">
                    <h2>Keep your way of doing</h2>
                    <p>
                      Manifest integrates perfectly with your project, just like
                      any other file in your codebase.
                    </p>
                    <p>
                      Keep it your way: work from your IDE, use testing,
                      environments, AI assistants and leverage source control
                      features like committing and branching.
                    </p>
                    <p className="mb-2">
                      <a
                        href="https://stackblitz.com/fork/github/mnfst/manifest/tree/master/examples/main-demo?file=manifest/backend.yml"
                        target="_blank"
                      >
                        <span className="icon-text">
                          <span>Try Manifest on Stackblitz</span>
                          <span className="icon">
                            <i className="lni lni-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="card is-fullheight has-strokes is-shadowless card--media is-flex is-align-items-center is-justify-content-center py-0">
                <img
                  src="./assets/images/stackblitz-demo.svg"
                  alt=" manifest demo on stackblitz"
                  title="Manifest demo on stackblitz"
                  className="is-object-fit-cover is-object-position-left  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-full has-background-white">
        <div className="pb-6 pt-7 content">
          <div className="container">
            <h3 className="title is-3 mb-6  has-text-centered">
              Loved by developers 🤩
            </h3>

            <div className="masonry has-milkyway">
              <div className="masonry-item card has-background-white-bis is-shadowless is-bordered">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-dark"
                        target="_blank"
                        href="https://news.ycombinator.com/item?id=40545925"
                      >
                        @alextheterrible
                      </a>
                      <a
                        href="https://news.ycombinator.com/item?id=40545925"
                        target="_blank"
                        className="ghost"
                      >
                        <Image
                          src="/assets/images/yc.svg"
                          width={24}
                          height={24}
                          alt="on Hackernews"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <p>
                      Nice. I'll be watching this. Buddy and I are currently
                      building an app on Pocketbase and are thoroughly enjoying
                      it. I like your idea of starting from a config file rather
                      than a UI.
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-white-bis is-shadowless is-bordered">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-dark"
                        target="_blank"
                        href="https://www.reddit.com/r/sveltejs/comments/1fyv1k4/comment/lqww79x/"
                      >
                        @permarad
                      </a>
                      <a
                        href="https://www.reddit.com/r/sveltejs/comments/1fyv1k4/comment/lqww79x/"
                        target="_blank"
                        className="ghost"
                      >
                        <Image
                          src="/assets/images/reddit.svg"
                          width={24}
                          height={24}
                          alt="on Reddit"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <p>
                      kudos, this is very cool. i thought pocketbase was simple.
                      this is very very simple. I love simple.
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-white-bis is-shadowless is-bordered">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-dark"
                        target="_blank"
                        href="https://discord.com/channels/457912077277855764/1293155391513034802"
                      >
                        @Revan
                      </a>
                      <a
                        href="https://discord.com/channels/457912077277855764/1293155391513034802"
                        target="_blank"
                        className="ghost"
                      >
                        <Image
                          src="/assets/images/discord.svg"
                          width={24}
                          height={24}
                          alt="on Discord"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <p>
                      Wow I've never heard of manifest before now, it looks
                      fascinating
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-white-bis is-shadowless is-bordered">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-dark"
                        target="_blank"
                        href="https://news.ycombinator.com/item?id=40549087"
                      >
                        @dhuan_
                      </a>
                      <a
                        href="https://news.ycombinator.com/item?id=40549087"
                        target="_blank"
                        className="ghost"
                      >
                        <Image
                          src="/assets/images/yc.svg"
                          width={24}
                          height={24}
                          alt="on Hackernews"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <p>
                      Hey very useful app, I'll be watching this. I once wanted
                      to set up backend apps during automated CI jobs in order
                      to facilitate e2e tests and ended up making a utility kind
                      of similar - but yours truly goes beyond.
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-white-bis is-shadowless is-bordered">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-dark"
                        target="_blank"
                        href="https://www.reddit.com/r/sveltejs/comments/1fyv1k4/comment/lqxms20/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
                      >
                        @huevoverde
                      </a>
                      <a
                        href="https://www.reddit.com/r/sveltejs/comments/1fyv1k4/comment/lqxms20/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
                        target="_blank"
                        className="ghost"
                      >
                        <Image
                          src="/assets/images/reddit.svg"
                          width={24}
                          height={24}
                          alt="on Reddit"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <p>
                      It works! I like this a lot. I've been leaning into
                      Pocketbase because it is easy and fairly complete with
                      what I need. This is easier and more complete. Are you
                      modeling this after something that exists already?
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-white-bis is-shadowless is-bordered">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-dark"
                        target="_blank"
                        href="https://news.ycombinator.com/item?id=40545873"
                      >
                        @chrsig
                      </a>
                      <a
                        href="https://news.ycombinator.com/item?id=40545873"
                        target="_blank"
                        className="ghost"
                      >
                        <Image
                          src="/assets/images/yc.svg"
                          width={24}
                          height={24}
                          alt="on Hackernews"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <p>
                      I really appreciate the simplicity of the DSL presented.
                      I'm curious how you see the project evolving as you add
                      those things. How do you see it differentiating itself
                      from rails or django?
                    </p>
                  </div>
                </div>
              </div>

              <div className="masonry-item card has-background-white-bis is-shadowless is-bordered">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-dark"
                        target="_blank"
                        href="https://discord.com/channels/1089907785178812499/1098161123938807808/1246482163193352215"
                      >
                        @LatoReset
                      </a>
                      <a
                        href="https://discord.com/channels/1089907785178812499/1098161123938807808/1246482163193352215"
                        target="_blank"
                        className="ghost"
                      >
                        <Image
                          src="/assets/images/discord.svg"
                          width={24}
                          height={24}
                          alt="on Discord"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <p>
                      i was trying manifest today and work fine, is very simple,
                      i would use in a project without doubt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-white-bis is-shadowless is-bordered">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-dark"
                        target="_blank"
                        href="https://discord.com/channels/1089907785178812499/1098161123938807808/1251228008644083772"
                      >
                        @Coquet
                      </a>
                      <a
                        href="https://discord.com/channels/1089907785178812499/1098161123938807808/1251228008644083772"
                        target="_blank"
                        className="ghost"
                      >
                        <Image
                          src="/assets/images/discord.svg"
                          width={24}
                          height={24}
                          alt="on Hackernews"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <p>I love it so far. The simplicity is awesome.</p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-white-bis is-shadowless is-bordered">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-dark"
                        target="_blank"
                        href="https://discord.com/channels/1089907785178812499/1098161123938807808/1252672178088972409"
                      >
                        @Ranti
                      </a>
                      <a
                        href="https://discord.com/channels/1089907785178812499/1098161123938807808/1252672178088972409"
                        target="_blank"
                        className="ghost"
                      >
                        <Image
                          src="/assets/images/discord.svg"
                          width={24}
                          height={24}
                          alt="on Hackernews"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <p>
                      Hello! Just started trying out Manifest for a personal
                      React project. Love the idea!
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-white-bis is-shadowless is-bordered">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-dark"
                        target="_blank"
                        href="https://www.reddit.com/r/sveltejs/comments/1fyv1k4/comment/lqx12e1/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
                      >
                        @A_Norse_Dude
                      </a>
                      <a
                        href="https://www.reddit.com/r/sveltejs/comments/1fyv1k4/comment/lqx12e1/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
                        target="_blank"
                        className="ghost"
                      >
                        <Image
                          src="/assets/images/reddit.svg"
                          width={24}
                          height={24}
                          alt="on Reddit"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <p>
                      This seems nice! I will def. follow this, and jump on the
                      bandwagon then you are out of beta 😎
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-white-bis is-shadowless is-bordered">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-dark"
                        target="_blank"
                        href="https://news.ycombinator.com/item?id=40551318"
                      >
                        @kiwicopple
                      </a>
                      <a
                        href="https://news.ycombinator.com/item?id=40551318"
                        target="_blank"
                        className="ghost"
                      >
                        <Image
                          src="/assets/images/yc.svg"
                          width={24}
                          height={24}
                          alt="on Hackernews"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <p>
                      Congrats on shipping, this looks nice and well
                      thought-out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card has-border-gradient card--community is-shadowless">
                <div className="card-content py-7">
                  <div className="content is-normal">
                    <div className="columns">
                      <div className="column is-9">
                        <h2>Join Manifest community</h2>
                        <p>You are enthusiast about Manifest ? So are we !</p>
                        <p>
                          Join our growing community to give your feedback,
                          suggest features and share some love.
                        </p>
                        <div className="buttons mt-5">
                          <a
                            className="button is-white  is-small"
                            href="https://discord.gg/FepAked3W7"
                            target="_blank"
                          >
                            <span className="icon has-text-link">
                              <i className="fa-brands fa-discord"></i>
                            </span>
                            <span>Join the community on Discord</span>
                          </a>
                          <a
                            className="button is-white is-small"
                            href="https://github.com/mnfst/manifest"
                            target="_blank"
                            onClick={() => {
                              track('Star')
                            }}
                          >
                            <span className="icon">
                              <i className="fab fa-github"></i>
                            </span>
                            <span>Star Manifest on Github</span>
                          </a>
                          <a
                            className="button is-white  is-small"
                            href="https://opencollective.com/mnfst"
                            target="_blank"
                            onClick={() => {
                              track('Sponsor')
                            }}
                          >
                            <span className="icon has-text-info">
                              <i className="fa-regular fa-heart"></i>
                            </span>
                            <span>Sponsor Manifest</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid has-background-white roadmap">
        <div className="container py-7">
          <div className="columns is-multiline">
            <div className="column is-4">
              <div className="content is-normal">
                <h3 className="title is-3">Roadmap</h3>
              </div>
            </div>
            <div className="column is-8 mb-6">
              <div className="content is-normal is-aligned-to-h3">
                <p>
                  Manifest is in BETA version and we are currently developing
                  the stable product version with the community. Here are the
                  upcoming features:
                </p>
              </div>
            </div>
            <div className="column is-4-tablet is-one-fifth-widescreen ">
              <div className="card is-fullheight is-bordered is-shadowless">
                <div className="card-content  is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <div className="icon-text">
                          <div className="icon">
                            <i className="lni lni-checkmark-circle has-text-weight-bold has-text-success is-size-6 mr-1"></i>
                          </div>
                          <h4>Rich text editor</h4>
                        </div>
                        <p>
                          Rich text editor to create stylized HTML from the
                          admin panel
                        </p>
                      </div>
                      <p className="has-text-right has-text-grey-light is-size-7 mt-4">
                        <span>Q4 2024</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4-tablet is-one-fifth-widescreen ">
              <div className="card is-fullheight is-bordered is-shadowless">
                <div className="card-content  is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <div className="icon-text">
                          <div className="icon">
                            <i className="lni lni-checkmark-circle has-text-weight-bold has-text-success is-size-6 mr-1"></i>
                          </div>
                          <h4>Single-type model</h4>
                        </div>
                        <p>
                          A convenient data model that can only have one record
                        </p>
                      </div>
                      <p className="has-text-right has-text-grey-light is-size-7 mt-4">
                        <span>Q4 2024</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-4-tablet is-one-fifth-widescreen ">
              <div className="card is-fullheight is-bordered is-shadowless">
                <div className="card-content  is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <h4>Custom logic</h4>
                        <p>Create endpoints and add your own custom logic</p>
                      </div>
                      <p className="has-text-right has-text-grey-light is-size-7 mt-4">
                        <span>Q1 2025</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4-tablet is-one-fifth-widescreen ">
              <div className="card is-fullheight is-bordered is-shadowless ">
                <div className="card-content  is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <h4>Webhooks</h4>
                        <p>Notify third-party platforms on defined events</p>
                      </div>
                      <p className="has-text-right has-text-grey-light is-size-7 mt-4">
                        <span>Q1 2025</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4-tablet is-one-fifth-widescreen is-feature-request">
              <div className="card is-fullheight is-shadowless">
                <div className="card-content is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <h4>Feature request</h4>
                        <p>Suggest the next feature or enhancement</p>

                        <p>
                          <a
                            target="_blank"
                            href="https://github.com/mnfst/manifest/discussions/new?category=feature-request"
                            className="button is-dark is-small"
                          >
                            <span>Suggest features</span>
                            <i className="lni lni-arrow-right ml-2 has-text-weight-bold"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column" id="cta-cloud">
              <div className="card has-border-gradient card--getnotified is-shadowless mt-6">
                <div className="card-content py-7 has-text-white">
                  <div className="content is-normal">
                    <div className="columns">
                      <div className="column is-6 is-offset-3 has-text-centered is-align-items-center is-flex is-flex-wrap-wrap is-justify-content-center">
                        <img
                          src="./assets/images/logo-manifest-cloud-light.svg"
                          alt="Manifest Cloud logo"
                          width={222}
                        />
                        <h2 className="has-text-white mt-4">
                          Deploy your backend in 1-click
                        </h2>
                        <p>
                          Join the waitlist now to be the first to discover{' '}
                          <b className="has-text-white">Manifest Cloud</b>.
                        </p>
                        <div className="small-control">
                          <SubscribeForm />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid has-background-white">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <FAQ />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
