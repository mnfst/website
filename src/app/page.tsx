import Image from 'next/image'
import LiveCodeHero from './components/LiveCodeHero'
import SubscribeForm from './components/SubscribeForm'

export default function Home() {
  return (
    <main>
      <div>
        <div className="container is-fluid has-background-glass">
          <div className="container is-header">
            <nav
              className="navbar has-background-transparent"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <a className="navbar-item">
                  <Image
                    src="/logo.svg"
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
        <div className="my-8">
          <div className="container">
            <div className="columns">
              <div className="column is-6">
                <div className="content">
                  <h1 className="title is-3 mb-5">
                    Building{' '}
                    <span className="title-gradient">the simplest backend</span>{' '}
                    in the world
                  </h1>

                  <p className="subtitle">Manifest is the simplest Backend-as-a-Service for rapid web application development</p>

                  <SubscribeForm />
                </div>
              </div>
              <div className="column is-6">
                <div className="content">
                  <LiveCodeHero />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
