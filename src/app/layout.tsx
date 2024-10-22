import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'
import HotjarSnippet from './components/Hotjar'
import SubscribeForm from './components/SubscribeForm'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manifest - A Whole Backend That Fits Into 1 YAML file',
  description:
    'Complete Backend with Admin Panel, REST API, Auth, Storage and more. All in one YAML file.',
  openGraph: {
    type: 'website',
    url: 'https://manifest.build',
    title: 'A Whole Backend That Fits Into 1 YAML file',
    description:
      'Complete Backend with Admin Panel, REST API, Auth, Storage and more. All in one YAML file.',
    siteName: 'Manifest',
    images: [
      {
        url: 'https://manifest.build/assets/images/og-image.png'
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <span className="notification is-success is-block has-text-centered mb-0">
          {' '}
          <span>
            🎉 Help us grow! We're in BETA version and need your feedback on our
          </span>{' '}
          <a
            className="has-text-dark has-text-weight-bold px-1 is-underlined"
            href="https://discord.gg/FepAked3W7"
          >
            {' '}
            Discord{' '}
          </a>{' '}
          <span>to enhance Manifest.</span>
        </span>
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
        <main>{children}</main>
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
                          <a href="/assets" target="_blank">
                            Brand assets
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
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <HotjarSnippet />
        <GoogleAnalytics gaId="G-FPJ74C43L9" />
        <Script id="cr-relay-script" strategy="afterInteractive">
          {`
            (function() {
              if (typeof window === 'undefined') return;
              if (typeof window.signals !== 'undefined') return;
              var script = document.createElement('script');
              script.src = 'https://cdn.cr-relay.com/v1/site/43b5a956-ea4c-403e-8f29-fb180fc604a9/signals.js';
              script.async = true;
              window.signals = Object.assign(
                [],
                ['page', 'identify', 'form'].reduce(function (acc, method){
                  acc[method] = function () {
                    signals.push([method, arguments]);
                    return signals;
                  };
                return acc;
                }, {})
              );
              document.head.appendChild(script);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
