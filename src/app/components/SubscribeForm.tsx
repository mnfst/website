'use client'
import React, { FormEvent, useState } from 'react'

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState<string>('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const response = await fetch(
      'https://api.manifest.build/api/dynamic/emails',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      }
    )

    if (response.ok) {
      // Handle success
      alert('Thanks for subscribing!')
    } else {
      // Handle error
      alert('Oops, something went wrong.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="is-flex is-align-items-flex-end is-justify-content-flex-start">
        <div className="field has-addons is-fullwidth">
          <div className="control is-fullwidth">
            <input
              type="email"
              className="input is-default"
              id="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="control">
            <button className="button is-dark">
              <span className="icon">
                <i className="lni lni-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SubscribeForm
