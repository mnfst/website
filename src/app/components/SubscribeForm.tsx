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
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">Subscribe</button>
    </form>
  )
}

export default SubscribeForm
