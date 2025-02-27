import Image from 'next/image'
import React from 'react'
import SubscribeForm from '../SubscribeForm'
import InstallCLI from './../InstallCLI'

const Footer: React.FC = () => {
  return (
    <div>
      <div className="container-fluid has-background-white is-relative is-bottom-cta">
        <div className="has-background-wheel"></div>
        <div className="container py-7">
          <div className="columns is-multiline">
            <div className="column is-8 is-offset-2">
              <div className="content is-normal has-text-centered">
                <Image
                  src="./assets/images/logo-peacock.svg"
                  width={64}
                  height={98}
                  alt="Manifest logo"
                />
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

      <footer className="footer has-background-white-bis has-text-dark pb-4 has-border-top">
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
                      <a
                        href="https://github.com/mnfst/manifest/blob/master/CONTRIBUTING.md"
                        target="_blank"
                      >
                        Contributor Docs
                      </a>
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
                        <a href="https://discord.gg/FepAked3W7" target="_blank">
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
                          href="https://opencollective.com/mnfst"
                          target="_blank"
                        >
                          Support us
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <span className="icon">
                          <i className="lni lni-heart-fill is-size-6"></i>
                        </span>
                        <a href="/partnerships">Become a partner</a>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <span className="icon">
                          <i className="lni lni-plug is-size-6"></i>
                        </span>
                        <a href="/integrations">Integrations</a>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <span className="icon">
                          <i className="lni lni-image is-size-6"></i>
                        </span>
                        <a href="/brand-assets">Brand assets</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-3">
                <div className="content">
                  <p className="has-text-weight-bold is-size-6">
                    1-click deploy
                  </p>
                  <p>Join the waitlist</p>
                  <SubscribeForm />
                </div>
              </div>
              <div className="column is-12">
                <div className="separator"></div>
              </div>
              <div className="column is-6">
                <Image
                  src="./assets/images/logo-transparent.svg"
                  width={180}
                  height={50}
                  alt="logo of manifest"
                  className="footer-logo"
                  loading="lazy"
                />
              </div>
              <div className="column is-6 has-text-right is-align-items-center is-flex is-justify-content-flex-end">
                <a className=" is-underlined" href="/privacy">
                  Privacy policy
                </a>
                <span className="mx-4 has-text-grey-lighter">•</span>
                <span>
                  Source code licensed{' '}
                  <a
                    className=" is-underlined"
                    href="https://opensource.org/license/mit"
                    target="_blank"
                  >
                    MIT
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
