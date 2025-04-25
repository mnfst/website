'use client'

import { useEffect } from 'react'

export default function TwitterEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    script.setAttribute('async', 'true')
    document.body.appendChild(script)
  }, [])

  return (
    <blockquote className="twitter-tweet">
      <p lang="en" dir="ltr">
        Micro-backend in one file{' '}
        <a href="https://t.co/bzq7s93ja7">pic.twitter.com/bzq7s93ja7</a>
      </p>
      &mdash; Tom Dörr (@tom_doerr){' '}
      <a href="https://twitter.com/tom_doerr/status/1886152793125216688?ref_src=twsrc%5Etfw">
        February 2, 2025
      </a>
    </blockquote>
  )
}
