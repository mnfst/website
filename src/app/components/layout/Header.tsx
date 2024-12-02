// components/Header.js

const Header = () => {
  return (
    <nav
      className="navbar has-background-glass is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="/assets/images/logo-poc.svg"
              width={198}
              alt="logo of manifest"
              loading="lazy"
              className="mx-2"
            />
          </a>
          <div className="is-flex">
            <a className="navbar-item px-5-tablet" href="/docs" target="_blank">
              <span className="is-hidden-touch">Documentation</span>
              <i className="lni lni-empty-file is-size-6 is-hidden-desktop"></i>
            </a>
            <a
              className="navbar-item px-5-tablet is-hidden-mobile"
              href="/playground"
            >
              <span className="is-hidden-touch">Playground</span>
              <i className="lni lni-empty-file is-size-6 is-hidden-desktop"></i>
            </a>
            <a
              className="navbar-item px-5-tablet is-hidden-desktop"
              href="https://discord.gg/FepAked3W7"
              target="_blank"
            >
              <i className="lni lni-discord-alt is-size-6"></i>
            </a>
            <a
              className="navbar-item px-5-tablet is-hidden-desktop"
              href="https://github.com/mnfst/manifest"
              target="_blank"
            >
              <i className="lni lni-github-original is-size-6"></i>
            </a>
          </div>
        </div>

        <div className="navbar-menu has-text-weight-bold">
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://discord.gg/FepAked3W7"
              target="_blank"
            >
              <i className="lni lni-discord-alt is-size-6"></i>
            </a>
            <a
              className="navbar-item"
              href="https://github.com/mnfst/manifest"
              target="_blank"
            >
              <i className="lni lni-github-original is-size-6"></i>
            </a>
            <div className="navbar-item">
              <a
                className="button is-small is-link"
                href="/docs/install"
                target="_blank"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
