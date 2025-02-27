import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy policy - Manifest',
  description:
    '<meta name="description" content="Read our Privacy Policy to understand how we collect, use, and protect your data on Manifest.'
}
export default function PrivacyPolicy() {
  return (
    <div>
      <div className="mt-6 pt-4 mb-6">
        <div className="container zi-1">
          <div className="columns is-multiline">
            <div className="column is-8 is-offset-2">
              <div className="content">
                <h1>Privacy policy</h1>
              </div>
            </div>
            <div className="column is-8 is-offset-2">
              <div className="content">
                <p>
                  Manifest is a project developed within the Inria Startup
                  Studio.
                </p>
                <p>
                  Inria uses this form for prospecting purposes based on the
                  legal basis of consent.
                </p>
                <p>
                  Inria is the recipient of this data. This data will be
                  retained by Inria for one year and will not be transferred
                  outside the European Union. This data collection is voluntary
                  and does not involve any automated decision-making.
                </p>
                <p>
                  You can access your data, request its deletion, and exercise
                  your rights to object, rectify, and limit the processing of
                  your data. To exercise these rights or for any questions about
                  data processing, you can contact the DPO at dpo@inria.fr.
                </p>
                <p>
                  However, if you believe that your rights are not being
                  respected or that the processing of your data is not
                  compliant, you can file a complaint with the CNIL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
