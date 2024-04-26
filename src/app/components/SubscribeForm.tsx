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
    <div className="card has-background-white is-shadowless is-bordered mt-6">
      <div className="card-content p-6">
        <h2 className="title is-5">Stay tuned ✉️</h2>
        <p>
          We are building the simplest backend in the world. Do you want to
          embark on this adventure with us? Leave your email to stay in
          touch and start that journey with us.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="is-flex is-align-items-flex-end is-justify-content-flex-start">
            <div className='field is-fullwidth mb-0 '>
              <div className="field-label mr-3 has-text-left  has-text-weight-bold mb-1">
                <label htmlFor="email">Email:</label>
              </div>
              <div className="field-body mr-3">
                <div className="field">
                  <p className="control">
                    <input
                      type="email"
                      className="input is-small"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </p>
                </div>
              </div>
            </div>
            <button type="submit" className="button is-small is-dark">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SubscribeForm
