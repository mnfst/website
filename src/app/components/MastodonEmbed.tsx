'use client'

import { useEffect, useRef } from 'react'

type MastodonEmbedProps = {
  embedHtml: string
}

export default function MastodonEmbed({ embedHtml }: MastodonEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://social.numerique.gouv.fr/embed.js"]'
    )
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://social.numerique.gouv.fr/embed.js'
      script.async = true
      script.setAttribute(
        'data-allowed-prefixes',
        'https://social.numerique.gouv.fr/'
      )
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: embedHtml }} />
  )
}
