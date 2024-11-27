import Image from 'next/image'
import { FAQ } from './components/FAQ'
import InstallCLI from './components/InstallCLI'
import LiveCodeHero from './components/LiveCodeHero'
import SubscribeForm from './components/SubscribeForm'

export default function Home() {
  return (
    <div>
      <div className="mt-6 pt-4 mb-6">
        <div className="container zi-1 has-text-centered">
          <div className="columns is-multiline">
            <div className="column is-8 is-offset-2">
              <div className="content is-normal">
                <h1 className="title is-0 mb-5">
                  Meet the
                  <span className="title-gradient"> 1-file backend </span>
                </h1>
                <p className="subtitle">
                  Manifest is a complete backend that fits into a single YAML
                  file. Cut the learning curve and ship very quickly without
                  trading-off coding standards and best practices.
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
                >
                  Get started
                </a>
              </div>
            </div>
            <div className="column is-12">
              <LiveCodeHero />
            </div>
          </div>
        </div>
      </div>
      <div className="container-full has-background-white">
        <div className="container py-6">
          <div className="columns is-multiline">
            <div className="column is-8 is-offset-2 my-4">
              <div className=" is-normal card-content--how-it-works">
                <div className="content is-normal has-text-centered has-text-left--mobile mt-4">
                  <h2>Zero-config backend-as-a-service, within your IDE.</h2>
                  <p>
                    Let's forget about the "from scratch" vs "low-code/no-code"
                    debate.{' '}
                  </p>
                  <p>
                    Manifest approach brings you the best of both worlds: A
                    hassle-free backend packed with built-in features that fits
                    right into your IDE, just like any other file in your
                    codebase.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-multiline has-line-h">
            <div className="column is-3">
              <div className="content backend-list__wrapper">
                <span className="backend-list__item">
                  <span className="icon  backend-list__icon">
                    <i className="lni lni-checkmark has-text-success"></i>
                  </span>
                  <span>Database</span>
                </span>

                <p className="is-size-6">
                  Abstracted SQLite database to store your dynamic data. It is
                  file-based, with nothing to pre-install or connect.
                </p>
              </div>
            </div>
            <div className="column is-3">
              <div className="content backend-list__wrapper">
                <span className="backend-list__item">
                  <span className="icon  backend-list__icon">
                    <i className="lni lni-layout has-text-success"></i>
                  </span>
                  <span>Admin panel</span>
                </span>

                <p className="is-size-6">
                  Save hours of development with Manifest admin panel for
                  non-technical administrators.
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
                  Clean and sharp REST API with OpenAPI documentation and API
                  rules.
                </p>
              </div>
            </div>
            <div className="column is-3">
              <div className="content backend-list__wrapper">
                <span className="backend-list__item">
                  <span className="icon  backend-list__icon">
                    <i className="lni lni-package has-text-success"></i>
                  </span>
                  <span>
                    <span className="is-hidden-touch">Javascript</span>
                    <span className="is-hidden-desktop">JS</span> SDK
                  </span>
                </span>

                <p className="is-size-6">
                  Simplify your front-end integration with Manifest SDK for your
                  JavaScript and TypeScript projects.
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
                </div>
              </div>
            </div>
            <div className="column is-12 has-text-centered">
              <div className="card has-strokes is-shadowless py-4">
                <div className="card-content">
                  <div className="content">
                    <div className="columns">
                      <div className="column is-6 is-offset-3">
                        <h2>
                          Everything is about delivering the right product
                        </h2>
                        <p>
                          It does not matter if you are junior or senior
                          developer, if you code in JS, PHP or Python. You can
                          be frontend, backend or fullstack, a mobile developer,
                          indie hacker or devsigner. If you know that everything
                          is about delivering the right product, Manifest is for
                          you.{' '}
                        </p>
                        <p>
                          Manifest focuses on shipping a solid product in the
                          minimal amount of time, reducing the learning curve as
                          much as possible. The rest is in your hands.
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
                <div className="card-content">
                  <div className="content">
                    <h2>Connect to any frontend</h2>
                    <p>
                      Plug-and-play with all frontend stacks and mobile stacks
                      through our JS SDK or REST API. Adding a backend to a
                      website or an app to make it dynamic has never been that
                      easy.
                    </p>
                    <p>Yes, you can do SSG and SSR too.</p>
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
                        alt="Svelte"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img src="./assets/images/stack/logo-vue.svg" alt="Vue" />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-preact.svg"
                        alt="Preact"
                      />
                    </div>
                    <div className="stack-grid-item is-hidden-touch">
                      <img
                        src="./assets/images/stack/logo-angular.svg"
                        alt="Angular"
                      />
                    </div>
                  </div>
                  <div className="stack-grid-row">
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-nextjs.svg"
                        alt="Next.js"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-nuxtjs.svg"
                        alt="Nuxt.js"
                      />
                    </div>

                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-react.svg"
                        alt="React"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-astro.svg"
                        alt="Astro"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-blitz.svg"
                        alt="Blitz"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-remix.svg"
                        alt="Remix"
                      />
                    </div>
                    <div className="stack-grid-item is-hidden-desktop">
                      <img
                        src="./assets/images/stack/logo-angular.svg"
                        alt="Angular"
                      />
                    </div>
                    <div className="stack-grid-item is-hidden-desktop">
                      <img
                        src="./assets/images/stack/logo-flutter.svg"
                        alt="Flutter"
                      />
                    </div>
                  </div>
                  <div className="stack-grid-row">
                    <div className="stack-grid-item is-hidden-touch">
                      <img
                        src="./assets/images/stack/logo-flutter.svg"
                        alt="Flutter"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-swift.svg"
                        alt="Swift"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-ionic.svg"
                        alt="Ionic"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-meteor.svg"
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
                <div className="card-content">
                  <div className="content">
                    <h2>Looking for an admin panel ?</h2>
                    <p>
                      You just saved some days of development because we have
                      one for you.
                    </p>
                    <p>
                      Manifest admin panel is non-technical so you can give it
                      to your customers and app administrators without the fear
                      that they will break anything. Obviously if it does not
                      fit you can always bring your own.
                    </p>
                    <p className="mb-2 is-hidden">
                      <a href="">
                        <span className="icon-text">
                          <span>See Admin Panel live demo</span>
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
                        alt="Svelte"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img src="./assets/images/stack/logo-vue.svg" alt="Vue" />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-preact.svg"
                        alt="Preact"
                      />
                    </div>
                    <div className="stack-grid-item is-hidden-touch">
                      <img
                        src="./assets/images/stack/logo-angular.svg"
                        alt="Angular"
                      />
                    </div>
                  </div>
                  <div className="stack-grid-row">
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-nextjs.svg"
                        alt="Next.js"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-nuxtjs.svg"
                        alt="Nuxt.js"
                      />
                    </div>

                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-react.svg"
                        alt="React"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-astro.svg"
                        alt="Astro"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-blitz.svg"
                        alt="Blitz"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-remix.svg"
                        alt="Remix"
                      />
                    </div>
                    <div className="stack-grid-item is-hidden-desktop">
                      <img
                        src="./assets/images/stack/logo-angular.svg"
                        alt="Angular"
                      />
                    </div>
                    <div className="stack-grid-item is-hidden-desktop">
                      <img
                        src="./assets/images/stack/logo-flutter.svg"
                        alt="Flutter"
                      />
                    </div>
                  </div>
                  <div className="stack-grid-row">
                    <div className="stack-grid-item is-hidden-touch">
                      <img
                        src="./assets/images/stack/logo-flutter.svg"
                        alt="Flutter"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-swift.svg"
                        alt="Swift"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-ionic.svg"
                        alt="Ionic"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-meteor.svg"
                        alt="Meteor"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-gapless is-multiline mb-0">
            <div className="column is-6">
              <div className="card is-fullheight has-strokes is-shadowless py-4 is-flex is-align-items-center is-justify-content-center">
                <div className="card-content">
                  <div className="content">
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
              <div className="card is-fullheight has-strokes is-shadowless card--media is-flex is-align-items-center is-justify-content-center">
                <div className="hosting-grid-container">
                  <div className="hosting-grid-row">
                    <div className="hosting-grid-item">
                      <img
                        src="./assets/images/hosting/logo-render.svg"
                        alt="Render"
                      />
                    </div>
                    <div className="hosting-grid-item">
                      <img
                        src="./assets/images/hosting/logo-fly.svg"
                        alt="Fly.io"
                      />
                    </div>
                  </div>
                  <div className="hosting-grid-row">
                    <div className="hosting-grid-item">
                      <img
                        src="./assets/images/hosting/logo-digitalocean.svg"
                        alt="Digital Ocean"
                      />
                    </div>
                  </div>
                  <div className="hosting-grid-row">
                    <div className="hosting-grid-item">
                      <img
                        src="./assets/images/hosting/logo-heroku.svg"
                        alt="Heroku"
                      />
                    </div>
                    <div className="hosting-grid-item">
                      <img
                        src="./assets/images/hosting/logo-docker.svg"
                        alt="Docker"
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
                <div className="card-content">
                  <div className="content">
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
              <div className="card is-fullheight has-strokes is-shadowless card--media is-flex is-align-items-center is-justify-content-center">
                <div className="stack-grid-container">
                  <div className="stack-grid-row">
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-svelte.svg"
                        alt="Svelte"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img src="./assets/images/stack/logo-vue.svg" alt="Vue" />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-preact.svg"
                        alt="Preact"
                      />
                    </div>
                    <div className="stack-grid-item is-hidden-touch">
                      <img
                        src="./assets/images/stack/logo-angular.svg"
                        alt="Angular"
                      />
                    </div>
                  </div>
                  <div className="stack-grid-row">
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-nextjs.svg"
                        alt="Next.js"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-nuxtjs.svg"
                        alt="Nuxt.js"
                      />
                    </div>

                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-react.svg"
                        alt="React"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-astro.svg"
                        alt="Astro"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-blitz.svg"
                        alt="Blitz"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-remix.svg"
                        alt="Remix"
                      />
                    </div>
                    <div className="stack-grid-item is-hidden-desktop">
                      <img
                        src="./assets/images/stack/logo-angular.svg"
                        alt="Angular"
                      />
                    </div>
                    <div className="stack-grid-item is-hidden-desktop">
                      <img
                        src="./assets/images/stack/logo-flutter.svg"
                        alt="Flutter"
                      />
                    </div>
                  </div>
                  <div className="stack-grid-row">
                    <div className="stack-grid-item is-hidden-touch">
                      <img
                        src="./assets/images/stack/logo-flutter.svg"
                        alt="Flutter"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-swift.svg"
                        alt="Swift"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-ionic.svg"
                        alt="Ionic"
                      />
                    </div>
                    <div className="stack-grid-item">
                      <img
                        src="./assets/images/stack/logo-meteor.svg"
                        alt="Meteor"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-gapless is-multiline mb-0">
            <div className="column is-12">
              <div className="card has-strokes--gradient is-shadowless py-4">
                <div className="card-content">
                  <div className="content">
                    <h3>manifest /ˈmanɪfɛst/</h3>
                    <p>clear or obvious to the eye or mind.</p>
                    <p>
                      Our goal is to allow people to create backend
                      effortlessly. Empowering anyone to create and share great
                      digital products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-full has-background-white">
        <div className="py-6 content">
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
              <div className="wheel"></div>
              <div className="wheel"></div>
              <div className="card has-border-gradient card--community is-shadowless">
                <div className="card-content py-7">
                  <div className="content">
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
              <div className="card is-fullheight is-bordered is-shadowless ">
                <div className="card-content  is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <h4>Realtime</h4>
                        <p>Realtime subscriptions for instant messaging</p>
                      </div>
                      <p className="has-text-right has-text-grey-light is-size-7 mt-4">
                        <span>Q1 2025</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Valid */}
            <div className="column is-4-tablet is-one-fifth-widescreen ">
              <div className="card is-fullheight is-bordered is-shadowless">
                <div className="card-content  is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <h4>Custom server</h4>
                        <p>
                          Custom server to create endpoints and add custom logic
                        </p>
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
            <div className="column is-12 has-text-centered">
              <div className="is-flex is-align-items-center is-justify-content-center newsletter-box mt-5">
                <span className="icon-text">
                  <span className="icon">
                    <i className="lni lni-envelope"></i>
                  </span>
                  <span>Get notified at the next milestone</span>
                </span>
                <SubscribeForm />
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
      <div className="container-fluid has-background-white is-relative">
        <div className="has-background-wheel"></div>
        <div className="container py-7">
          <div className="columns is-multiline">
            <div className="column is-8 is-offset-2">
              <div className="content is-normal has-text-centered">
                <img src="./assets/images/logo-peacock.svg" alt="" />
                <h3 className="title is-3 mt-4">
                  Start building with Manifest
                </h3>
                <p>
                  Your frontend needs a backend? Set it up in minutes and you’re
                  good to go!
                </p>
              </div>
            </div>
            <div className="column is-6-tablet is-offset-3">
              <div className="content is-normal  is-flex is-align-items-center is-justify-content-center box-main-cta is-flex-direction-column">
                <InstallCLI />
                <div className="content is-normal  mb-5 is-flex is-align-items-center is-justify-content-center box-main-cta">
                  <a
                    className="button is-white is-small"
                    href="/docs/install"
                    target="_blank"
                  >
                    <span className="icon">
                      <i className="far fa-file-lines"></i>
                    </span>
                    <span>Documentation</span>
                  </a>
                  <a
                    className="button is-white is-small"
                    href="https://github.com/mnfst/manifest"
                    target="_blank"
                  >
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                    <span> Github</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
