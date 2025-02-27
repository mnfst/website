import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Sponsor - Manifest',
  description:
    'Become a sponsor of Manifest and help us build the future of backend development.'
}

export default function SponsorPage() {
  return (
    <div>
      <div className="mt-6 pt-4 mb-6">
        <div className="container zi-1">
          <div className="columns is-multiline">
            <div className="column is-8 is-offset-2">
              <div className="content">
                <h1>Become a Sponsor</h1>
                <p>
                  Manifest is an Open Source project and relies on the support
                  of the community.
                </p>

                <p>
                  Every contribution directly impacts the growth and
                  sustainability of Manifest. Your sponsorship helps us:
                </p>
                <ul>
                  <li>✅ Maintain and improve the product</li>
                  <li>✅ Develop new features and capabilities</li>
                  <li>✅ Create better documentation and learning resources</li>
                  <li>✅ Provide community support</li>
                </ul>
                <p>
                  By sponsoring Manifest, you're not just funding an open-source
                  project. You're ensuring its long-term success and making it
                  more accessible to developers worldwide.
                </p>

                <h2>Why sponsor Manifest ?</h2>
                <div className="columns">
                  <div className="column">
                    <div className="card is-shadowless">
                      <div className="card-content">
                        <div className="content">
                          <h3>For businesses 📈</h3>
                          <ul>
                            <li>
                              Ensure <strong>long-term sustainability</strong>{' '}
                              of a solution you rely on
                            </li>
                            <li>
                              Gain <strong>visibility</strong> in the Manifest
                              ecosystem
                            </li>

                            <li>Demonstrate commitment to open source</li>
                            <li>
                              Potential <strong>tax benefits</strong> for
                              supporting an open-source project
                            </li>
                          </ul>
                          <br></br>
                          <a
                            href="https://opencollective.com/mnfst"
                            className="button is-dark is-small"
                          >
                            Become a Sponsor
                          </a>
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
                            <li>Support a tool you love</li>
                            <li>
                              Help maintain and improve independent{' '}
                              <strong>open-source development</strong>
                            </li>
                            <li>Get recognition for your contribution</li>
                            <li>
                              Keep Manifest{' '}
                              <strong>free and open-source for everyone</strong>
                            </li>
                          </ul>
                          <br></br>
                          <a
                            href="https://opencollective.com/mnfst"
                            className="button is-dark is-small"
                          >
                            Become an individual backer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Every Contribution Matters</h2>

                <p>
                  Whether you're an independent developer chipping in a few
                  dollars a month or a company looking to make a bigger impact,
                  your support drives Manifest forward.
                </p>

                <p>
                  This isn't just about funding. It's about joining a community
                  that values independent, open-source innovation. Together, we
                  can ensure Manifest keeps evolving while staying true to its
                  core principles.
                </p>
                <div className="has-text-centered is-size-5 mt-6 has-text-weight-bold">
                  Thank you ❤️
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
