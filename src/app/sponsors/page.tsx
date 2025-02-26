import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sponsors - Manifest',
  description: 'Become an Official Manifest Sponsor'
}

export default function PressAssetsPage() {
  return (
    <div>
      <div className="mt-6 pt-4 mb-6">
        <div className="container zi-1">
          <div className="columns is-multiline">
            <div className="column is-8 is-offset-2">
              <div className="content">
                <h1>Become an offical Manifest Sponsor</h1>
              </div>
            </div>
            <div className="column is-8 is-offset-2">
              <div className="content">
                <p>
                  Support the development of Manifest and help shape the future
                  of web development.
                </p>
                <p>
                  The easiest way to partner with us is through{' '}
                  <strong>sponsorship</strong>. Your contributions fund the
                  ongoing maintenance and growth of this{' '}
                  <strong>open-source project</strong>.
                </p>
                <p>
                  Sponsors at certain tiers receive logo placement and links on
                  key Manifest platforms like our homepage, GitHub README, and
                  documentation site.
                </p>
                <p>
                  Become a sponsor: Join via{' '}
                  <a
                    href="https://opencollective.com/mnfst"
                    target="_blank"
                    className=""
                  >
                    Open Collective
                  </a>{' '}
                  or GitHub Sponsors (Coming soon).
                </p>

                <p>Thank you for supporting Manifest!</p>
                <div className="card is-bordered is-shadowless is-dark">
                  <div className="card-content">
                    <div className="content">
                      <p>
                        Need a <strong>custom sponsorship tier</strong>? Contact
                        us at
                        <a
                          className="ml-1"
                          href="mailto:partner@manifest.build"
                          target="_blank"
                        >
                          partner@manifest.build
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
                <h2>Why Sponsor Manifest?</h2>
                <div className="columns">
                  <div className="column">
                    <div className="card is-shadowless">
                      <div className="card-content">
                        <div className="content">
                          <h3>For businesses 📈</h3>
                          <ul>
                            <li>
                              <strong>Ensure long-term sustainability</strong>{' '}
                              of a solution you rely on
                            </li>
                            <li>
                              <strong>Gain visibility</strong> in the Manifest
                              ecosystem
                            </li>
                            <li>
                              Support feature development that benefits your
                              business
                            </li>
                            <li>
                              Demonstrate commitment to{' '}
                              <strong>open source</strong>
                            </li>
                            <li>
                              Potential <strong>tax benefits</strong> for
                              supporting an open-source project
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="column">
                    <div className="card is-shadowless is-fullheight">
                      <div className="card-content">
                        <div className="content">
                          <h3>For individuals 🧑‍💻</h3>
                          <ul>
                            <li>
                              <strong>Support a tool you love</strong> and use
                              daily
                            </li>
                            <li>
                              Help maintain and improve independent{' '}
                              <strong>open-source development</strong>
                            </li>
                            <li>
                              <strong>Get recognition</strong> for your
                              contribution
                            </li>
                            <li>
                              Keep Manifest{' '}
                              <strong>free and open-source for everyone</strong>
                            </li>
                          </ul>
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
    </div>
  )
}
