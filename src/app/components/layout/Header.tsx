// components/Header.js

const Header = () => {
  return (
    <div className="has-background-glass">
      <div className="container is-header">
        <nav
          className="navbar has-background-transparent"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
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
                <i className="lni lni-discord-alt is-size-6"></i>
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
  )
}

export default Header
