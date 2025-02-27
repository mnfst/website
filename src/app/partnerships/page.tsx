import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partnerships - Manifest',
  description: 'Become an official Manifest Partner'
}

export default function PressAssetsPage() {
  return (
    <div>
      <div className="mt-6 pt-4 mb-6">
        <div className="container zi-1">
          <div className="columns is-multiline">
            <div className="column is-8 is-offset-2">
              <div className="content">
                <img
                  src="./assets/images/partner-prog.svg"
                  alt="Partnership program"
                />
                <h1>Partner with Manifest</h1>
              </div>
            </div>
            <div className="column is-8 is-offset-2">
              <div className="content">
                <p>
                  We are open to partnerships that{' '}
                  <strong>benefit the Manifest community</strong> and help us
                  grow the ecosystem. Here are a few ways to partner with us in
                  addition to <a href="/sponsors">becoming a sponsor</a>:
                </p>

                <h3>Development & integration</h3>
                <p>
                  Partner with us to{' '}
                  <strong>expand Manifest's capabilities</strong> and{' '}
                  <strong>grow its ecosystem</strong>. Integrating your product
                  with Manifest makes it easier to adopt and{' '}
                  <strong>adds value</strong> to users.
                </p>
                <p>
                  No time or expertise to build an integration?{' '}
                  <strong>We can develop it for you</strong>, ensuring seamless
                  compatibility with Manifest.
                </p>
                <p>
                  Need a missing feature to adopt Manifest?{' '}
                  <strong>We welcome contributions</strong> and can facilitate
                  funding for key improvements.
                </p>
                <p>
                  📩 <strong>Contact us</strong> to discuss your project and
                  shape the future of Manifest together!
                </p>
                <a
                  href="mailto:partners@manifest.build?subject=Integration Partnership&body=Hi Manifest team,%0D%0A%0D%0AWe'd love to explore a possible integration between Manifest and [Your Product/Service]. Could we discuss how to make this happen?%0D%0A%0D%0AHere's a quick overview of our product:%0D%0A[Brief description]%0D%0A%0D%0ALooking forward to your thoughts!%0D%0A%0D%0ABest,%0D%0A[Your Name]%0A[Your Company]"
                  className="button is-dark is-small"
                >
                  Discuss an integration
                </a>

                <h3>Co-marketing</h3>
                <p>
                  Let's <strong>amplify each other's reach</strong>! If you're
                  building with Manifest, we'd love to
                  <strong> showcase your work</strong> through articles, case
                  studies, or events.
                </p>
                <a
                  href="mailto:partners@manifest.build?subject=Co-Marketing Opportunity&body=Hi Manifest team,%0D%0A%0D%0AI'm interested in a co-marketing partnership with Manifest. We'd love to collaborate on [article, event, case study, etc.].%0D%0A%0D%0AHere's an idea of what we had in mind:%0D%0A[Brief description]%0D%0A%0D%0ALet me know if this sounds interesting!%0D%0A%0D%0ABest,%0D%0A[Your Name]%0A[Your Company]"
                  className="button is-dark is-small"
                >
                  Explore Co-marketing
                </a>

                <h3>Technical case studies</h3>
                <p>
                  Have a <strong>unique use case</strong> with Manifest? We'd
                  love to <strong>interview you</strong>! Case studies{' '}
                  <strong>
                    build trust, increase adoption, and give your company
                    visibility
                  </strong>{' '}
                  as an innovative adopter.
                </p>
                <p>
                  <a
                    href="mailto:partners@manifest.build?subject=Case Study Interview Request&body=Hi Manifest team,%0D%0A%0D%0AWe've used Manifest for [describe your use case] and would love to share our experience in a case study. Let us know if you'd be interested in interviewing us!%0D%0A%0D%0ABest,%0D%0A[Your Name]%0A[Your Company]"
                    className="button is-dark is-small"
                  >
                    Share your case study
                  </a>
                </p>

                <h3>Podcasts & live streams</h3>
                <p>
                  Let's <strong>talk about Manifest</strong>! We're open to{' '}
                  <strong>guest appearances</strong> on podcasts or live streams
                  covering Manifest or related topics.
                </p>
                <a
                  href="mailto:partners@manifest.build?subject=Podcast/Live Stream Collaboration&body=Hi Manifest team,%0D%0A%0D%0AI run [Podcast/YouTube Channel] and would love to have a conversation with your team about Manifest. Would you be interested in joining an episode?%0D%0A%0D%0ALooking forward to your thoughts!%0D%0A%0D%0ABest,%0D%0A[Your Name]%0A[Your Show]"
                  className="button is-dark is-small"
                >
                  Invite us a to podcast
                </a>

                <h3>Third-party guides</h3>
                <p>
                  <strong>
                    Clear, high-quality documentation drives adoption
                  </strong>
                  . Many developers rely on integration guides to get started.
                </p>
                <p>
                  Want an <strong>official guide</strong> on how to use your
                  service with Manifest?{' '}
                  <strong>We can create it for you! </strong>
                  By funding this, you ensure developers get a{' '}
                  <strong>well-crafted integration guide</strong> that
                  simplifies adoption.
                </p>
                <a
                  href="mailto:partners@manifest.build?subject=Third-Party Guide Proposal&body=Hi Manifest team,%0D%0A%0D%0AWe'd like to create an official guide on how to use [Your Service] with Manifest. Can we discuss the process and funding options?%0D%0A%0D%0ABest,%0D%0A[Your Name]%0A[Your Company]"
                  className="button is-dark is-small"
                >
                  Propose a guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
