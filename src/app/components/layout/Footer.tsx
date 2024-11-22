import Image from 'next/image'
import React from 'react'
import SubscribeForm from '../SubscribeForm'

const Footer: React.FC = () => {
  return (
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
                        <i className="lni lni-arrow-right is-size-6"></i>
                      </span>
                      <a href="/assets">Brand assets</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column is-3">
              <div className="content">
                <p className="has-text-weight-bold is-size-6">Stay tuned</p>
                <p>
                  We are building the simplest backend in the world. Do you want
                  to embark on this adventure with us? Leave your email to stay
                  in touch and start that journey with us.
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
