import Image from 'next/image'
import SubscribeForm from './components/SubscribeForm'

export default function Home() {
  return (
    <main>
      <div className="container">
        <nav className="navbar has-background-white-ter" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              <Image
                src="/logo-transparent.svg"
                width={180}
                height={52}
                alt="logo of manifest"
              />
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu has-text-weight-bold">
            <div className="navbar-end">
              <a className="navbar-item is-hidden" href="https://docs.case.app" target="_blank">
                Documentation
              </a>
              <a className="navbar-item" href="https://discord.gg/FepAked3W7" target="_blank">
                Discord
              </a>
              <a className="navbar-item is-hidden" href="https://github.com/casejs/CASE" target="_blank">
                Github
              </a>
              <div className="navbar-item is-hidden">
                <div className="buttons">
                  <a className="button is-small is-dark" href="https://github.com/casejs/CASE" target="_blank">
                    <strong>Github</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav >
        <div className="my-8">
          <div className="columns">
            <div className="column is-10-tablet is-8-widescreen is-offset-1-tablet is-offset-2-widescreen">
              <div className="content">
                <h1 className="title is-3">
                  Building <span className="title-gradient">the simplest backend</span> in the world
                </h1>

                <h2 className="title is-4">There are no “easy backends”</h2>
                <p>
                  Let's imagine that you have a web app, built with React or
                  something similar, and you need to implement a simple backend
                  feature to make it less static.
                </p>
                <p>
                  How would you do it ? A quick internet search and you suddenly
                  need to learn about different databases, runtimes, infrastructure
                  and so on.. The amount of skills and energy needed for a simple
                  backend implementation is ridiculously high.
                </p>
                <p>
                  If you ask that question to 10 backend developers, they will
                  probably come up with 10 different stacks. Why ? Because there is
                  no straightforward way to create a backend.
                </p>

                <h2 className="title is-4">
                  Aren't no-code tools the solution to simplify backends ?
                </h2>

                <p>
                  No-code tools are great for people that do not know how to code.
                </p>
                <p>
                  What is the added value when you can do it faster by coding ? Not
                  that much. Moreover all of those solutions generate an awful code
                  that is hard to validate and maintain, especially when working
                  with a team.
                </p>

                <h2 className="title is-4">Our journey to rethink the backend</h2>
                <p>
                  We strongly think that the backend can be simpler and more
                  inclusive. We also think that this can be done without a
                  perceptible performance drop, and more importantly, without
                  trading off our love for coding properly.
                </p>

                <p>Here are some statements that we believe in:</p>

                <h3 className="title is-6">Simple code over no code</h3>
                <p>
                  We are looking for the simplest and more minimalist syntax
                  possible. We do not want to trade off professionalism for
                  simplicity.
                </p>

                <h3 className="title is-6">Inclusive rather than powerful</h3>
                <p>
                  Making a backend easy to learn and use is the key. A perfect
                  backend should be appealing even for frontend developers with no
                  backend experience.
                </p>

                <h3 className="title is-6">Cloud-based equals lock-in</h3>
                <p>
                  Even if Open Source, cloud-based apps revoke your ownership and
                  impose vendor lock-in by design. A truly free tool should be made
                  for your machine first.
                </p>

                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
