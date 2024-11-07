import type { Metadata } from 'next'

// Métadonnées spécifiques à la page press-assets
export const metadata: Metadata = {
  title: 'Brand assets - Manifest',
  description: 'Get Manifest brand assets here.'
  // Autres métadonnées spécifiques
}

export default function PressAssetsPage() {
  return (
    <div>
      <div className="mt-6 pt-4 mb-6">
        <div className="container zi-1">
          <div className="columns is-multiline">
            <div className="column is-8 is-offset-2">
              <div className="content">
                <h1>Brand assets</h1>
              </div>
            </div>
            <div className="column is-8 is-offset-2">
              <div className="content">
                <p>
                  Resources to ensure consistency when using Manifest's logos,
                  colors, and other brand elements across different platforms
                  and content.
                </p>
                <a
                  className="button is-dark is-small"
                  href="/assets/assets-manifest.zip"
                  download
                >
                  Download assets
                </a>
                <h2>Naming</h2>
                <p>
                  Always write ‘Manifest’ as a single word with an uppercase
                  ‘M.’ Please avoid variations like ‘manifest’ or ‘Manifest
                  Build.’
                </p>
                <h2>Logotype</h2>
                <p>
                  The Manifest logo is a key element of our brand identity.
                  Please avoid modifying it, and whenever possible, place it on
                  a neutral background.
                </p>
                <div className="columns">
                  <div className="column is-6">
                    <div className="card has-background-white is-shadowless">
                      <div className="is-flex is-align-items-center is-justify-content-center is-fullheight logotype-wrapper is-relative">
                        <img
                          src="./assets/images/logotype-white.svg"
                          alt="White logotype Manifest"
                          className="logo-presentation"
                        />

                        <p className="buttons download-buttons">
                          <a
                            className="button is-small is-outlined is-dark"
                            download
                            href="/assets/images/logotype/logotype-white.svg"
                          >
                            <span className="icon is-small">
                              <i className="lni lni-download"></i>
                            </span>
                            <span>SVG</span>
                          </a>
                          <a
                            className="button is-small is-outlined is-dark"
                            download
                            href="/assets/images/logotype/logotype-white.png"
                          >
                            <span className="icon is-small">
                              <i className="lni lni-download"></i>
                            </span>
                            <span>PNG</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="column is-6">
                    <div className="card has-background-dark is-shadowless">
                      <div className="is-flex is-align-items-center is-justify-content-center is-fullheight logotype-wrapper is-relative">
                        <img
                          src="./assets/images/logotype-dark.svg"
                          alt="Dark logotype Manifest"
                          className="logo-presentation"
                        />
                        <p className="buttons download-buttons">
                          <a
                            className="button is-small is-outlined is-white"
                            download
                            href="/assets/images/logotype/logotype-dark.svg"
                          >
                            <span className="icon is-small">
                              <i className="lni lni-download"></i>
                            </span>
                            <span>SVG</span>
                          </a>
                          <a
                            className="button is-small is-outlined is-white"
                            download
                            href="/assets/images/logotype/logotype-dark.png"
                          >
                            <span className="icon is-small">
                              <i className="lni lni-download"></i>
                            </span>
                            <span>PNG</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h2>Co-branding logotypes</h2>
                <p>
                  The spacing around the Manifest logo is determined by its
                  design. Unless specified by partner brands, all logos should
                  be treated as a balanced collection of shapes.
                </p>
                <div className="card has-background-white is-shadowless">
                  <div className="is-flex is-align-items-center is-justify-content-center is-fullheight logotype-wrapper is-relative">
                    <img
                      src="./assets/images/logotype/co-brand.svg"
                      alt="co-brand logotype Manifest"
                      className="logo-presentation"
                    />
                  </div>
                </div>

                <h2>Logomark</h2>
                <p>
                  For optimal brand recognition, we recommend using the full
                  Manifest logotype. The logomark can be used in situations
                  where space is limited and displaying the full logotype isn't
                  possible.
                </p>
                <div className="columns is-multiline">
                  <div className="column is-6">
                    <div className="card has-background-white-bis  is-shadowless">
                      <div className="is-flex is-align-items-center is-justify-content-center is-fullheight logotype-wrapper is-relative">
                        <img
                          src="./assets/images/logomark/logo.svg"
                          alt="Logomark Manifest"
                          className="logo-presentation"
                        />

                        <p className="buttons download-buttons">
                          <a
                            className="button is-small is-outlined is-dark"
                            download
                            href="/assets/images/logomark/logo.svg"
                          >
                            <span className="icon is-small">
                              <i className="lni lni-download"></i>
                            </span>
                            <span>SVG</span>
                          </a>
                          <a
                            className="button is-small is-outlined is-dark"
                            download
                            href="/assets/images/logomark/logo.png"
                          >
                            <span className="icon is-small">
                              <i className="lni lni-download"></i>
                            </span>
                            <span>PNG</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="column is-6">
                    <div className="card has-background-dark is-shadowless">
                      <div className="is-flex is-align-items-center is-justify-content-center is-fullheight logotype-wrapper is-relative">
                        <img
                          src="./assets/images/logomark/logo.svg"
                          alt="Dark Logomark Manifest"
                          className="logo-presentation"
                        />
                        <p className="buttons download-buttons">
                          <a
                            className="button is-small is-outlined is-white"
                            download
                            href="/assets/images/logomark/logo-dark.svg"
                          >
                            <span className="icon is-small">
                              <i className="lni lni-download"></i>
                            </span>
                            <span>SVG</span>
                          </a>
                          <a
                            className="button is-small is-outlined is-white"
                            download
                            href="/assets/images/logomark/logo-dark.png"
                          >
                            <span className="icon is-small">
                              <i className="lni lni-download"></i>
                            </span>
                            <span>PNG</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="column is-6">
                    <div className="card has-background-warning-light is-shadowless">
                      <div className="is-flex is-align-items-center is-justify-content-center is-fullheight logotype-wrapper is-relative">
                        <img
                          src="./assets/images/logomark/logo.svg"
                          alt="Sand logomark Manifest"
                          className="logo-presentation"
                        />
                        <p className="buttons download-buttons">
                          <a
                            className="button is-small is-outlined is-dark"
                            download
                            href="/assets/images/logomark/logo-sand.svg"
                          >
                            <span className="icon is-small">
                              <i className="lni lni-download"></i>
                            </span>
                            <span>SVG</span>
                          </a>
                          <a
                            className="button is-small is-outlined is-dark"
                            download
                            href="/assets/images/logomark/logo-sand.png"
                          >
                            <span className="icon is-small">
                              <i className="lni lni-download"></i>
                            </span>
                            <span>PNG</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="column is-6">
                    <div className="card has-background-white is-shadowless">
                      <div className="is-flex is-align-items-center is-justify-content-center is-fullheight logotype-wrapper is-relative">
                        <img
                          src="./assets/images/logomark/logo.svg"
                          alt="White logomark Manifest"
                          className="logo-presentation"
                        />
                        <p className="buttons download-buttons">
                          <a
                            className="button is-small is-outlined is-dark"
                            download
                            href="/assets/images/logomark/logo-white.svg"
                          >
                            <span className="icon is-small">
                              <i className="lni lni-download"></i>
                            </span>
                            <span>SVG</span>
                          </a>
                          <a
                            className="button is-small is-outlined is-dark"
                            download
                            href="/assets/images/logomark/logo-white.png"
                          >
                            <span className="icon is-small">
                              <i className="lni lni-download"></i>
                            </span>
                            <span>PNG</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h2>Co-branding logomark</h2>
                <p>
                  The spacing around the Manifest logo is determined by its
                  design. Unless specified by partner brands, all logos should
                  be treated as a balanced collection of shapes.
                </p>
                <div className="card has-background-white is-shadowless">
                  <div className="is-flex is-align-items-center is-justify-content-center is-fullheight logotype-wrapper is-relative">
                    <img
                      src="./assets/images/logomark/co-brand.svg"
                      alt="Co-brand logomark Manifest"
                      className="logo-presentation logo-presentation--small"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
