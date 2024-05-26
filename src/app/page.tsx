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
                  <Image
                    src="/assets/images/logo.svg"
                    width={180}
                    height={52}
                    alt="logo of manifest"
                    loading="lazy"
                  />
                </a>
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
                    className="navbar-item is-hidden"
                    href="https://github.com/casejs/CASE"
                    target="_blank"
                  >
                    Github
                  </a>
                  <div className="navbar-item is-hidden">
                    <div className="buttons">
                      <a
                        className="button is-small is-dark"
                        href="https://github.com/casejs/CASE"
                        target="_blank"
                      >
                        <strong>Github</strong>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="my-6">

          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-6">
                <div className="content  ">
                  <h1 className="title is-1 mb-5">
                    Building{' '}
                    <span className="title-gradient">the simplest backend</span>{' '}
                    in the world
                  </h1>

                  <p className="content   is-normal">
                    Manifest is the simplest Backend-as-a-Service for rapid web
                    application development
                  </p>
                  <InstallCLI />
                </div>
              </div>
              <div className="column is-6-tablet is-5-desktop is-offset-0-tablet is-offset-1-desktop">
                <div className="content  ">
                  <LiveCodeHero />
                </div>
              </div>
              <div className="column is-12">
                <div className="card has-background-glass">
                  <div className="card-content has-text-centered card-content--how-it-works">
                    <div className="content">
                      <h2 className="title is-2">Define your data structure,<br />get a backend ready for your business application.</h2>
                      <div className="backend-list is-boredered is-rounded is-flex is-align-items-center is-justify-content-center my-6">
                        <span className="is-flex is-align-items-center is-justify-content-center is-flex-direction-row backend-list__item">
                          <span className="icon  backend-list__icon">
                            <i className="lni lni-checkmark has-text-success"></i>
                          </span>
                          <span>Database</span>
                        </span>
                        <span className="is-flex is-align-items-center is-justify-content-center is-flex-direction-row backend-list__item">
                          <span className="icon  backend-list__icon">
                            <i className="lni lni-checkmark has-text-success"></i>
                          </span>
                          <span>API</span>
                        </span>
                        <span className="is-flex is-align-items-center is-justify-content-center is-flex-direction-row backend-list__item">
                          <span className="icon  backend-list__icon">
                            <i className="lni lni-checkmark has-text-success"></i>
                          </span>
                          <span>Rest API</span>
                        </span>
                        <span className="is-flex is-align-items-center is-justify-content-center is-flex-direction-row backend-list__item">
                          <span className="icon  backend-list__icon">
                            <i className="lni lni-checkmark has-text-success"></i>
                          </span>
                          <span>Admin panel</span>
                        </span>

                      </div>

                      <div className="stack-list is-flex is-align-items-center is-justify-content-center is-flex-wrap-wrap">
                        <span>It works with your favorite weapon:</span>
                        <span
                          title="See how to plug CASE with React"
                        >
                          <img
                            src="./assets/images/react.svg"
                            alt="React logo"
                            width="40px"
                            className="mx-2"
                          />
                        </span>
                        <span
                          title="See how to plug CASE with Vue"
                        >
                          <img
                            src="./assets/images/vue.svg"
                            alt="Vue logo"
                            width="40px"
                            className="mx-2"
                          />
                        </span>
                        <span
                          title="See how to plug CASE with Angular"
                        >
                          <img
                            src="./assets/images/angular.svg"
                            alt="Angular logo"
                            width="40px"
                            className="mx-2"
                          />
                        </span>
                        <span
                          title="See how to plug CASE with Svelte"
                        >
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
              <div className="column is-12">
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>

      </div>
    </main >
  )
}
