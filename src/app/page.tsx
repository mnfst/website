import Image from 'next/image'
import InstallCLI from './components/InstallCLI'
import LiveCodeHero from './components/LiveCodeHero'
import SubscribeForm from './components/SubscribeForm'

export default function Home() {
  return (
    <div>
      <div className="mt-6 pt-4 mb-6">
        <div className="container zi-1">
          <div className="columns is-multiline">
            <div className="column is-6-tablet">
              <div className="content is-medium  ">
                <h1 className="title is-1 mb-5">
                  The
                  <span className="title-gradient"> simplest backend</span> you
                  will find
                </h1>
              </div>
            </div>
            <div className="column is-5-tablet is-offset-1-tablet">
              <div className="content is-normal  mb-6">
                <p>A backend so simple that it fits in a single YAML file</p>

                <InstallCLI />
                <div className="mt-4">
                  <a
                    className="ghost is-block"
                    href="https://stackblitz.com/fork/github/mnfst/manifest/tree/master/examples/main-demo?file=manifest/backend.yml"
                    target="_blank"
                  >
                    <img
                      alt="Open in StackBlitz"
                      className="is-block"
                      width={200}
                      src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="column is-12">
              <LiveCodeHero />
            </div>
            <div className="column is-12 has-text-centered">
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
        </div>
      </div>
      <div className="container-full has-background-white">
        <div className="container py-7">
          <div className="columns is-multiline">
            <div className="column is-4">
              <div className="card has-background-white-bis is-shadowless is-fullheight">
                <div className="card-content">
                  <div className="content has-text-centered">
                    <svg
                      width="90"
                      height="90"
                      viewBox="0 0 268 268"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M267.99 133.99C267.99 133.99 269.579 72.4171 232.581 35.4189C195.583 -1.57858 134.01 0.00993423 134.01 0.00993423C134.01 0.00993423 134.001 0.327069 134 0.929324C134 0.674973 133.997 0.47149 133.996 0.321236C133.994 0.11577 133.99 0.00993423 133.99 0.00993423C133.99 0.00993423 72.4171 -1.57858 35.4189 35.4189C-1.57858 72.4171 0.00993423 133.99 0.00993423 133.99C0.00993423 133.99 61.5835 135.578 98.5806 98.5806C132.398 64.7643 133.979 10.4162 134 1.32065C134.022 10.4162 135.603 64.7643 169.419 98.5806C206.417 135.578 267.99 133.99 267.99 133.99ZM35.4189 232.581C-1.57858 195.583 0.00993423 134.01 0.00993423 134.01C0.00993423 134.01 61.5835 132.422 98.5806 169.419C132.398 203.236 133.979 257.584 134 266.68C134.022 257.584 135.603 203.236 169.419 169.419C206.417 132.422 267.99 134.01 267.99 134.01C267.99 134.01 269.579 195.583 232.581 232.581C195.583 269.578 134.01 267.99 134.01 267.99C134.01 267.99 134.001 267.672 134 267.071C133.999 267.672 133.99 267.99 133.99 267.99C133.99 267.99 72.4171 269.578 35.4189 232.581Z"
                        fill="#F2C79C"
                      />
                    </svg>

                    <h4 className=" mt-4">Simple</h4>
                    <p className="is-size-6">
                      Your entire backend in <strong>a single YAML file</strong>
                      , easy to read and version control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card has-background-white-bis is-shadowless is-fullheight">
                <div className="card-content">
                  <div className="content has-text-centered">
                    <svg
                      width="110"
                      height="90"
                      viewBox="0 0 267 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M66.75 67L0 0V134L66.75 67ZM133.5 67L66.75 0V67V134L133.5 67ZM200.25 67L133.5 0V67V134L200.25 67ZM200.25 67V0L267 67L200.25 134V67Z"
                        fill="#2BE1B7"
                      />
                    </svg>

                    <h4 className=" mt-4">Develop 10x faster</h4>
                    <p className="is-size-6">
                      Manifest's simple code approach makes backend development
                      a breeze.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-4">
              <div className="card has-background-white-bis is-shadowless is-fullheight">
                <div className="card-content">
                  <div className="content has-text-centered">
                    <svg
                      width="90"
                      viewBox="0 0 267 267"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.00751 0C1.0025 0 0 1.33667 0 3.00751V263.992C0 265.663 1.33667 267 3.00751 267H263.992C265.663 267 267 265.663 267 263.992V3.00751C267 1.0025 265.663 0 263.992 0L3.00751 0ZM50.1252 26.0651L107.602 83.5419L50.1252 141.019L26.0651 116.959L59.4819 83.5419L26.0651 50.1252L50.1252 26.0651ZM133.667 100.25H233.917V133.667H133.667V100.25Z"
                        fill="#2430F0"
                      />
                    </svg>
                    <h4 className=" mt-4">Self-hosted</h4>
                    <p className="is-size-6">
                      Free and open source self-hosted{' '}
                      <strong>Backend-as-a-Service</strong>. Have it your way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-12 my-4">
              <div className=" is-normal card-content--how-it-works">
                <div className="content is-normal has-text-centered has-text-left--mobile">
                  <h2 className="title is-2 mb-0">
                    A complete backend-as-a-service
                  </h2>
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
          <div className="columns">
            <div className="column is-12">
              <div className="stack-list is-flex is-align-items-center is-justify-content-center is-flex-wrap-wrap is-flex-direction-column is-size-6">
                <span>
                  Plug-and-play with top frontend stacks through SDK or classic
                  REST API:{' '}
                </span>
                <div className="stack-list is-flex is-align-items-center is-justify-content-center is-flex-wrap-wrap mt-4">
                  <span title="See how to plug CASE with React">
                    <img
                      src="./assets/images/react.svg"
                      alt="React logo"
                      width="40px"
                      className="mx-2"
                    />
                  </span>
                  <span title="See how to plug CASE with Vue">
                    <img
                      src="./assets/images/vue.svg"
                      alt="Vue logo"
                      width="40px"
                      className="mx-2"
                    />
                  </span>
                  <span title="See how to plug CASE with Angular">
                    <img
                      src="./assets/images/angular.svg"
                      alt="Angular logo"
                      width="40px"
                      className="mx-2"
                    />
                  </span>
                  <span title="See how to plug CASE with Svelte">
                    <img
                      src="./assets/images/svelte.svg"
                      alt="Svelte logo"
                      width="40px"
                      className="mx-2"
                    />
                  </span>
                  <img
                    src="./assets/images/nuxt.svg"
                    alt="Nuxt logo"
                    width="40px"
                    className="mx-2"
                  />
                  <img
                    src="./assets/images/nextjs.svg"
                    alt="NextJS logo"
                    width="70px"
                    className="mx-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container pt-7 pb-6 mb-5">
          <div className="columns is-multiline">
            <div className="column is-4">
              <div className="content is-normal">
                <h3 className="title is-3">Why Manifest</h3>
              </div>
            </div>
            <div className="column is-8 ">
              <div className="content is-normal is-aligned-to-h3">
                <p>Let's be honest... Backends are complex.</p>

                <p>
                  Even a simple app requires many skills to build, deploy and
                  manage.{' '}
                </p>

                <p>
                  Our mission is to allow people to{' '}
                  <strong>create backends effortlessly</strong>, whatever their
                  experience. Manifest can be a good pick for anyone: a
                  developer that doesn't have the backend skills to do it
                  otherwise, or a senior developer that knows that it is the
                  fastest way to create a backend.
                </p>

                <p>
                  Manifest is a <strong>free and open source</strong> product
                  embracing the core values of open source software development:
                  transparency, improvement through collaboration and community
                  feedback, and freedom of usage and modification.
                </p>

                <div className="fixed-grid has-2-cols has-1-cols-mobile">
                  <div className="links-grid-container grid my-5">
                    <div className="links-grid-item cell">
                      <a
                        href="https://github.com/mnfst/manifest/"
                        target="_blank"
                      >
                        <span className="icon-text">
                          <span>Source code on Github</span>
                          <span className="icon">
                            <i className="lni lni-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="links-grid-item cell">
                      <a href="https://discord.gg/FepAked3W7" target="_blank">
                        <span className="icon-text">
                          <span>Join the community on Discord</span>
                          <span className="icon">
                            <i className="lni lni-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="links-grid-item cell">
                      <a
                        href="https://github.com/mnfst/manifest/issues/new?assignees=SebConejo&labels=bug&projects=&template=%F0%9F%90%9B-bug-report.md&title="
                        target="_blank"
                      >
                        <span className="icon-text">
                          <span>Report an issue</span>
                          <span className="icon">
                            <i className="lni lni-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="links-grid-item cell">
                      <a
                        href="https://github.com/mnfst/manifest/discussions/categories/announcements"
                        target="_blank"
                      >
                        <span className="icon-text">
                          <span>Announcements</span>
                          <span className="icon">
                            <i className="lni lni-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="links-grid-item cell">
                      <a
                        href="#https://github.com/mnfst/manifest/discussions/new?category=show-tell"
                        target="_blank"
                      >
                        <span className="icon-text">
                          <span>Showcase your Manifest creation.</span>
                          <span className="icon">
                            <i className="lni lni-arrow-right"></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="mb-5 mt-6" />
              </div>
            </div>
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
            <div className="column is-4-tablet is-3-widescreen ">
              <div className="card is-fullheight has-border-gradient is-shadowless">
                <div className="card-content p-6 is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <div className="icon-text">
                          <div className="icon">
                            <i className="lni lni-checkmark-circle has-text-weight-bold has-text-success is-size-6 mr-1"></i>
                          </div>
                          <h4>PoC Manifest</h4>
                        </div>
                        <p>
                          A backend that fits into 1 yaml file. Basic concepts
                          and features.
                        </p>
                      </div>
                      <p className="has-text-right has-text-grey-light is-size-7 mt-4">
                        <span>Q2 2024</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4-tablet is-3-widescreen ">
              <div className="card is-fullheight has-border-gradient is-shadowless">
                <div className="card-content p-6 is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <div className="icon-text">
                          <div className="icon">
                            <i className="lni lni-checkmark-circle has-text-weight-bold has-text-success is-size-6 mr-1"></i>
                          </div>
                          <h4>OpenAPI Swagger UI</h4>
                        </div>
                        <p>
                          Detailed API doc to help you understand and integrate
                          with Manifest easily.
                        </p>
                      </div>
                      <p className="has-text-right has-text-grey-light is-size-7 mt-4">
                        <span>Q3 2024</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4-tablet is-3-widescreen ">
              <div className="card is-fullheight has-border-gradient is-shadowless">
                <div className="card-content p-6 is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <h4>Auth</h4>
                        <p>
                          Create authenticatable entities to signup and
                          authenticate. Restrict entry points with API rules.
                        </p>
                      </div>
                      <p className="has-text-right has-text-grey-light is-size-7 mt-4">
                        <span>Q3 2024</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Valid */}
            <div className="column is-4-tablet is-3-widescreen ">
              <div className="card is-fullheight has-border-gradient is-shadowless">
                <div className="card-content p-6 is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <h4>Validation</h4>
                        <p>Add Custom validators to your fields.</p>
                      </div>
                      <p className="has-text-right has-text-grey-light is-size-7 mt-4">
                        <span>Q4 2024</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Many */}
            <div className="column is-4-tablet is-3-widescreen ">
              <div className="card is-fullheight has-border-gradient is-shadowless">
                <div className="card-content p-6 is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <h4>Many to many relations</h4>
                        <p>
                          Enables data relationships with many-to-many
                          associations.
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
            <div className="column is-4-tablet is-3-widescreen ">
              <div className="card is-fullheight has-border-gradient is-shadowless">
                <div className="card-content p-6 is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <h4>File & image upload</h4>
                        <p>
                          Seamlessly upload and manage files and images, either
                          locally or using S3.
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
            <div className="column is-4-tablet is-3-widescreen ">
              <div className="card is-fullheight is-shadowless">
                <div className="card-content p-6 is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <h4>
                          Hooks{' '}
                          <span className="tag is-dark is-small tag--title">
                            Coming soon
                          </span>
                        </h4>
                        <p>
                          This release will allow you to add your own hooks. You
                          will be able to create custom features like
                          notifications and emails.
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
            <div className="column is-4-tablet is-3-widescreen ">
              <div className="card is-fullheight is-shadowless has-background-transparent">
                <div className="card-content p-6 is-box-sizing-border-box is-fullheight">
                  <div className="content is-fullheight">
                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-fullheight">
                      <div>
                        <h4>Feature request</h4>
                        <p>
                          Provide feedback and ask for the next features or
                          enhancements!
                        </p>

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
              <div className="is-flex is-align-items-center is-justify-content-center newsletter-box mt-6">
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

      <div className="container-full has-background-dark has-text-white">
        <div className="py-7 content">
          <div className="container">
            <h3 className="title is-3 mb-6 has-text-white has-text-centered">
              Loved by developers 🤩
            </h3>

            <div className="masonry">
              <div className="masonry-item card has-background-black-ter is-shadowless">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-white"
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
                    <p className="has-text-white">
                      Nice. I'll be watching this. Buddy and I are currently
                      building an app on Pocketbase and are thoroughly enjoying
                      it. I like your idea of starting from a config file rather
                      than a UI.
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-black-ter is-shadowless">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-white"
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
                    <p className="has-text-white">
                      kudos, this is very cool. i thought pocketbase was simple.
                      this is very very simple. I love simple.
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-black-ter is-shadowless">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-white"
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
                    <p className="has-text-white">
                      Wow I've never heard of manifest before now, it looks
                      fascinating
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-black-ter is-shadowless">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-white"
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
                    <p className="has-text-white">
                      Hey very useful app, I'll be watching this. I once wanted
                      to set up backend apps during automated CI jobs in order
                      to facilitate e2e tests and ended up making a utility kind
                      of similar - but yours truly goes beyond.
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-black-ter is-shadowless">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-white"
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
                    <p className="has-text-white">
                      It works! I like this a lot. I've been leaning into
                      Pocketbase because it is easy and fairly complete with
                      what I need. This is easier and more complete. Are you
                      modeling this after something that exists already?
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-black-ter is-shadowless">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-white"
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
                    <p className="has-text-white">
                      I really appreciate the simplicity of the DSL presented.
                      I'm curious how you see the project evolving as you add
                      those things. How do you see it differentiating itself
                      from rails or django?
                    </p>
                  </div>
                </div>
              </div>

              <div className="masonry-item card has-background-black-ter is-shadowless">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-white"
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
                    <p className="has-text-white">
                      i was trying manifest today and work fine, is very simple,
                      i would use in a project without doubt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-black-ter is-shadowless">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-white"
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
                    <p className="has-text-white">
                      I love it so far. The simplicity is awesome.
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-black-ter is-shadowless">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-white"
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
                    <p className="has-text-white">
                      Hello! Just started trying out Manifest for a personal
                      React project. Love the idea!
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-black-ter is-shadowless">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-white"
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
                    <p className="has-text-white">
                      This seems nice! I will def. follow this, and jump on the
                      bandwagon then you are out of beta 😎
                    </p>
                  </div>
                </div>
              </div>
              <div className="masonry-item card has-background-black-ter is-shadowless">
                <div className="card-content">
                  <div className="content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-4">
                      <a
                        className="has-text-white"
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
                    <p className="has-text-white">
                      Congrats on shipping, this looks nice and well
                      thought-out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <div className="content is-size-6">
                <h3 className="title is-3">Try Manifest</h3>
                <p>
                  Help us improve Manifest and evolve it to be useful for you.
                </p>
                <InstallCLI />
                <div className="mt-4">
                  <a
                    className="ghost is-block"
                    href="https://stackblitz.com/fork/github/mnfst/manifest/tree/master/examples/main-demo?file=manifest/backend.yml"
                    target="_blank"
                  >
                    <img
                      alt="Open in StackBlitz"
                      className="is-block"
                      width={200}
                      src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
                    />
                  </a>
                </div>
                <p className="mt-5 pt-5">
                  <a href="https://manifest.build/docs/install" target="_blank">
                    <span className="icon-text">
                      <span>Get started</span>
                      <span className="icon">
                        <i className="lni lni-arrow-right"></i>
                      </span>
                    </span>
                  </a>
                </p>
                <p className="">
                  <a
                    href="https://github.com/mnfst/manifest/discussions/new?category=feature-request"
                    target="_blank"
                  >
                    <span className="icon-text">
                      <span>Request a feature</span>
                      <span className="icon">
                        <i className="lni lni-arrow-right"></i>
                      </span>
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div className="column is-6">
              <Image
                src="/assets/images/manifest-adminpanel.svg"
                alt="Manifest admin panel"
                width={640}
                height={337}
                className="image is-rounded"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid has-background-white">
        <div className="py-7">
          <div className="container">
            <div className="columns">
              <div className="column is-6">
                <div className="content is-size-6">
                  <h3 className="title is-3">Who we are</h3>
                  <p>
                    Bonjour! We are Sébastien and Bruno, 2 childhood friends
                    from France passionate about our work. 🫶
                  </p>

                  <p>
                    We know the backend struggle as we have been developing
                    together for the last 13 years for top companies and
                    organisations.
                  </p>

                  <p>
                    Wanna get in touch? Reach any of us through our{' '}
                    <a href="https://discord.gg/FepAked3W7" target="_blank">
                      Discord channel
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="pic-founders column is-6-tablet is-5-desktop is-offset-1-desktop is-flex is-justify-content-space-evenly">
                <div className="is-flex is-align-items-center is-justify-content-flex-start founder-card is-flex-direction-column">
                  <Image
                    src="/assets/images/bruno.jpg"
                    width={160}
                    height={160}
                    alt="Bruno"
                    className="is-rounded"
                    loading="lazy"
                  />

                  <div className="content is-size-6 is-flex is-align-items-center is-justify-content-flex-start is-flex-direction-column">
                    <span className="has-text-weight-bold">Bruno Pérez</span>
                    <div>
                      <a
                        className="ghost"
                        href="https://github.com/brunobuddy"
                        target="_blank"
                      >
                        <i className="lni lni-github-original mx-1"></i>
                      </a>
                      <a
                        className="ghost"
                        href="https://twitter.com/Bd_Perez"
                        target="_blank"
                      >
                        <svg
                            viewBox="0 0 20 20"
                            className="lni icon"
                            fill="#343C54"
                            x="0px"
                            y="0px"
                            xmlns="http://www.w3.org/2000/svg"
                            transform="rotate(0 0 0)"
                          >
                            <path
                              d="M17.7512 2.96094H20.818L14.1179 10.6187L22 21.0391H15.8284L10.9946 14.7191L5.4636 21.0391H2.39492L9.56132 12.8483L2 2.96094H8.32824L12.6976 8.73762L17.7512 2.96094ZM16.6748 19.2035H18.3742L7.40492 4.70014H5.58132L16.6748 19.2035Z"
                              fill="#343C54"
                            />
                          </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="is-flex is-align-items-center is-justify-content-flex-start founder-card is-flex-direction-column">
                  <div className="content is-size-6 is-flex is-align-items-center is-justify-content-flex-start is-flex-direction-column mb-0">
                    <span className="has-text-weight-bold">
                      Sébastien Conejo
                    </span>
                    <div>
                      <a
                        className="ghost"
                        href="https://github.com/SebConejo"
                        target="_blank"
                      >
                        <i className="lni lni-github-original mx-1"></i>
                      </a>
                      <a
                        className="ghost"
                        href="https://www.linkedin.com/in/sebastien-conejo"
                        target="_blank"
                      >
                        <i className="lni lni-linkedin-original mx-1"></i>
                      </a>
                    </div>
                  </div>
                  <Image
                    src="/assets/images/sebastien.jpg"
                    width={160}
                    height={160}
                    alt="Bruno"
                    className="is-rounded"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
