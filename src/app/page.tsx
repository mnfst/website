import Image from 'next/image'
import InstallCLI from './components/InstallCLI'
import LiveCodeHero from './components/LiveCodeHero'
import SubscribeForm from './components/SubscribeForm'

export default function Home() {
  return (
    <main>
      <div>
        <div className="has-background-glass">
          <div className="container is-header">
            <nav
              className="navbar has-background-transparent"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img
                    src="/assets/images/logo-poc.svg"
                    alt="logo of manifest"
                    loading="lazy"
                    className="mx-2"
                  />
                </a>
                <div className="is-flex is-hidden-desktop">
                  <a className="navbar-item px-5-tablet" href="/docs">
                    <i className="lni lni-empty-file is-size-6"></i>
                  </a>
                  <a
                    className="navbar-item px-5-tablet"
                    href="https://discord.gg/FepAked3W7"
                    target="_blank"
                  >
                    <i className="lni lni-discord-alt  is-size-6"></i>
                  </a>
                  <a
                    className="navbar-item px-5-tablet"
                    href="https://github.com/mnfst/manifest"
                    target="_blank"
                  >
                    <i className="lni lni-github-original is-size-6"></i>
                  </a>
                </div>
              </div>

              <div className="navbar-menu has-text-weight-bold">
                <div className="navbar-end">
                  <a className="navbar-item" href="/docs">
                    Docs
                  </a>
                  <a
                    className="navbar-item"
                    href="https://discord.gg/FepAked3W7"
                    target="_blank"
                  >
                    Discord
                  </a>
                  <a
                    className="navbar-item"
                    href="https://github.com/mnfst/manifest"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="my-6 pt-3">
          <div className="container zi-1">
            <div className="columns is-multiline">
              <div className="column is-6-tablet">
                <div className="content is-medium  ">
                  <h1 className="title is-1 mb-5">
                    The
                    <span className="title-gradient">
                      {' '}
                      simplest backend
                    </span>{' '}
                    you will find
                  </h1>
                </div>
              </div>
              <div className="column is-5-tablet is-offset-1-tablet">
                <div className="content is-normal  mb-6 pb-2">
                  <p>
                    Manifest is a complete backend that fits into one file of
                    simple code.
                  </p>
                  <InstallCLI />
                </div>
              </div>
              <div className="column is-12">
                <LiveCodeHero />
              </div>
              <div className="column is-12 has-text-centered">
                <span className="tag is-rounded is-success mt-5 is-hidden-mobile"> <span>🎉 Help us grow! We're in POC and need your feedback on our</span> <a className="has-text-dark has-text-weight-bold px-1 is-underlined" href="https://discord.gg/FepAked3W7"> Discord </a> <span>to enhance Manifest.</span></span>
                <div className="box has-background-success mt-5 is-hidden-tablet"> 
                  
                    <span>🎉 Help us grow! We're in POC and need your feedback on our</span> <a className="has-text-dark has-text-weight-bold px-1 is-underlined" href="https://discord.gg/FepAked3W7"> Discord </a> <span>to enhance Manifest.</span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-full has-background-white">
          <div className="container py-6">
            <div className="columns is-multiline">
              <div className="column is-4">
                <div className="card has-background-white-bis is-shadowless is-fullheight">
                  <div className="card-content">
                    <div className="content has-text-centered">
                    <svg width="110" height="90" viewBox="0 0 267 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path clipRule="evenodd"  d="M66.75 67L0 0V134L66.75 67ZM133.5 67L66.75 0V67V134L133.5 67ZM200.25 67L133.5 0V67V134L200.25 67ZM200.25 67V0L267 67L200.25 134V67Z" fill="#2BE1B7"/>
                    </svg>

                      <h4 className=" mt-4">Develop 10x faster</h4>
                      <p className="is-size-6">
                      Manifest's simple code approach makes backend development a breeze.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="card has-background-white-bis is-shadowless is-fullheight">
                  <div className="card-content">
                    <div className="content has-text-centered">

                    <svg width="90" height="90" viewBox="0 0 268 268" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd"  d="M267.99 133.99C267.99 133.99 269.579 72.4171 232.581 35.4189C195.583 -1.57858 134.01 0.00993423 134.01 0.00993423C134.01 0.00993423 134.001 0.327069 134 0.929324C134 0.674973 133.997 0.47149 133.996 0.321236C133.994 0.11577 133.99 0.00993423 133.99 0.00993423C133.99 0.00993423 72.4171 -1.57858 35.4189 35.4189C-1.57858 72.4171 0.00993423 133.99 0.00993423 133.99C0.00993423 133.99 61.5835 135.578 98.5806 98.5806C132.398 64.7643 133.979 10.4162 134 1.32065C134.022 10.4162 135.603 64.7643 169.419 98.5806C206.417 135.578 267.99 133.99 267.99 133.99ZM35.4189 232.581C-1.57858 195.583 0.00993423 134.01 0.00993423 134.01C0.00993423 134.01 61.5835 132.422 98.5806 169.419C132.398 203.236 133.979 257.584 134 266.68C134.022 257.584 135.603 203.236 169.419 169.419C206.417 132.422 267.99 134.01 267.99 134.01C267.99 134.01 269.579 195.583 232.581 232.581C195.583 269.578 134.01 267.99 134.01 267.99C134.01 267.99 134.001 267.672 134 267.071C133.999 267.672 133.99 267.99 133.99 267.99C133.99 267.99 72.4171 269.578 35.4189 232.581Z" fill="#F2C79C"/>
                    </svg>

                      <h4 className=" mt-4">Develop 10x faster</h4>
                      <p className="is-size-6">
                      Manifest's simple code approach makes backend development a breeze.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="card has-background-white-bis is-shadowless is-fullheight">
                  <div className="card-content">
                    <div className="content has-text-centered">
                      <svg width="90" viewBox="0 0 267 267" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.00751 0C1.0025 0 0 1.33667 0 3.00751V263.992C0 265.663 1.33667 267 3.00751 267H263.992C265.663 267 267 265.663 267 263.992V3.00751C267 1.0025 265.663 0 263.992 0L3.00751 0ZM50.1252 26.0651L107.602 83.5419L50.1252 141.019L26.0651 116.959L59.4819 83.5419L26.0651 50.1252L50.1252 26.0651ZM133.667 100.25H233.917V133.667H133.667V100.25Z" fill="#2430F0"/>
                      </svg>
                      <h4 className=" mt-4">Develop 10x faster</h4>
                      <p className="is-size-6">
                      Manifest's simple code approach makes backend development a breeze.
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
                        Define your data structure, get a business-ready backend
                        with essential features:
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
                        An SQLite database lightweight and serverless, ideal for embedded applications and local storage.
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
                        Provides a ready-to-use admin panel for your admins.
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
                        A standardized and accessible interface for interacting with your application.
                        </p>
                      </div>
                  
                </div>
                <div className="column is-3">
                  
                      <div className="content backend-list__wrapper">
                        <span className="backend-list__item">
                          <span className="icon  backend-list__icon">
                            <i className="lni lni-package has-text-success"></i>
                          </span>
                          <span><span className="is-hidden-touch">Javascript</span><span className="is-hidden-desktop">JS</span> SDK</span>
                        </span>
                        
                        <p className="is-size-6">
                        Simplifies integration for client-side development.
                        </p>
                      </div>
                  
                </div>
              </div>
              <div className="columns">
                <div className="column is-12">

                      <div className="stack-list is-flex is-align-items-center is-justify-content-center is-flex-wrap-wrap is-flex-direction-column is-size-6">
                        <span>
                          Plug-and-play with top frontend stacks through SDK or
                          classic REST API:{' '}
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
<div className="container-fluid has-background-white-bis">
            <div className="container">       
            <div className="columns is-multiline">
                <div className="column is-8 is-offset-2 is-6-fullhd is-offset-3-fullhd section--journey">
                  <div className="bg-shape"></div>
                  <div className="content is-normal has-text-left">
                    <h2 className="title is-2">
                      Our journey to rethink the backend
                    </h2>
                    <p>
                      If you ask 10 backend developers what you should use for
                      your app’s backend, they will probably come up with 10
                      different stacks. Why? Because there is no straightforward
                      way to create a backend. One more step and you suddenly get
                      overwhelmed with databases, runtimes, containers,
                      infrastructure and so on.
                    </p>

                    <p>
                      Recently, we have seen cool Backend-as-a-Service products
                      like Supabase or Appwrite gaining popularity as they offer a
                      fast and reliable way to deploy backends. However, their
                      no-code approach generates awful code difficult to follow,
                      making apps less reliable. Moreover, using a UI is slower
                      than coding, especially now that AI assistants are here to
                      help you.
                    </p>

                    <p>
                      Finally, we strongly believe that we can eliminate the
                      backend hassle without trading off our love for coding
                      properly.
                    </p>
                  </div>
                </div>
                <div className="column is-8 is-offset-2 is-6-fullhd is-offset-3-fullhd my-4">
                  <div className="content is-normal has-text-left">
                    <article className="message is-info is-success is-bordered">
                      <div className="message-header">
                        <p>Manifest is currently a Proof-of-Concept (POC)</p>
                      </div>
                      <div className="message-body">
                        We aim to validate this new approach for the backend,
                        thanks to your feedback. Give it a try and let us know what you think via our poll.

                      </div>
                    </article>
                  </div>
                </div>
                <div className="column is-8 is-offset-2 is-6-fullhd is-offset-3-fullhd">
                  <div className="content is-normal has-text-left mb-4">
                    <div className="content is-normal has-text-left">
                      <h2 className="title is-2">Get your hands on!</h2>
                      <ul>
                        <li>
                          <a href="/docs" target="_blank">
                            Read the documentation
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/mnfst/manifest"
                            target="_blank"
                          >
                            Source code
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
        <footer className="footer has-background-black has-text-white pb-4">
          <div className="container">
            <div>
              <div className="columns is-multiline">
                <div className="column is-3">
                  <div className="content">
                    <p className="has-text-weight-bold is-size-6">Docs</p>
                    <ul className="no-lst">
                      <li>
                        <a href="https://manifest.build/docs" target="_blank">
                          Developer Docs
                        </a>
                      </li>
                      <li>
                        <span className="mr-2 has-text-grey">
                          Contributor Docs
                        </span>
                        <span className="tag is-small is-dark">
                          Coming soon
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="column is-3">
                  <div className="content">
                    <p className="has-text-weight-bold is-size-6">Community</p>
                    <ul className="no-lst">
                      <li>
                        <span className="icon-text">
                          <span className="icon">
                            <i className="lni lni-discord-alt is-size-6"></i>
                          </span>
                          <a
                            href="https://discord.gg/FepAked3W7"
                            target="_blank"
                          >
                            {' '}
                            Discord
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="icon-text">
                          <span className="icon">
                            <i className="lni lni-comments-alt-2 is-size-6"></i>
                          </span>
                          <a
                            href="https://github.com/mnfst/manifest/discussions"
                            target="_blank"
                          >
                            Discussions
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="column is-3">
                  <div className="content">
                    <p className="has-text-weight-bold is-size-6">More</p>
                    <ul className="no-lst">
                      <li>
                        <span className="icon-text">
                          <span className="icon">
                            <i className="lni lni-github-original is-size-6"></i>
                          </span>
                          <a
                            href="https://github.com/mnfst/manifest"
                            target="_blank"
                          >
                            Github
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="icon-text">
                          <span className="icon">
                            <i className="lni lni-heart-fill is-size-6"></i>
                          </span>
                          <a
                            href="https://opencollective.com/casejs"
                            target="_blank"
                          >
                            Support us
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="column is-3">
                  <div className="content">
                    <p className="has-text-weight-bold is-size-6">Stay tuned</p>
                    <p>
                      We are building the simplest backend in the world. Do you
                      want to embark on this adventure with us? Leave your email
                      to stay in touch and start that journey with us.
                    </p>
                    <SubscribeForm />
                  </div>
                </div>
                <div className="column is-12">
                  <div className="separator"></div>
                </div>
                <div className="column is-6">
                  <Image
                    src="/assets/images/logo-light.svg"
                    width={180}
                    height={50}
                    alt="logo of manifest"
                    className="footer-logo"
                    loading="lazy"
                  />
                </div>
                <div className="column is-6 has-text-right pt-5">
                  <span>
                    Source code licensed{' '}
                    <a
                      className="has-text-white is-underlined"
                      href="https://opensource.org/license/mit"
                      target="_blank"
                    >
                      MIT
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
