import type { Metadata } from 'next'

// Métadonnées spécifiques à la page press-assets
export const metadata: Metadata = {
  title: 'Press Assets - Manifest',
  description: 'Get Manifest Brand assets here.'
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
                <h1>Press assets</h1>
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
                    <div className="card has-background-light is-shadowless">
                      <div className="is-flex is-align-items-center is-justify-content-center is-fullheight logotype-wrapper is-relative">
                        <img
                          src="./assets/images/logotype-white.svg"
                          alt="Dark Logo Manifest"
                          className="logotype-presentation"
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
                          alt="Dark Logo Manifest"
                          className="logotype-presentation"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
