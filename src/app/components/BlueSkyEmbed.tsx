'use client'

import { useEffect } from 'react'

export default function BlueskyEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://embed.bsky.app/static/embed.js'
    script.async = true
    script.charset = 'utf-8'
    document.body.appendChild(script)
  }, [])

  return (
    <blockquote
      className="bluesky-embed"
      data-bluesky-uri="at://did:plc:oiawuf6mbqiigagveorctrsj/app.bsky.feed.post/3lbf3etdjxc24"
      data-bluesky-cid="bafyreiedxioeahzpxk2syaj45rxj3xxu2wedqw2ajlntlu2ewijjnx73am"
      data-bluesky-embed-color-mode="system"
    >
      <p lang="en">
        manifest.build
        <br />
        Interesting project. Lots of handy features behind a minimalistic
        interface.
        <br />
        I think it's worth trying out for many small-to-medium-sized personal
        projects. Maybe even alongside bolt.new?
        <br />
        <a href="https://bsky.app/profile/did:plc:oiawuf6mbqiigagveorctrsj/post/3lbf3etdjxc24?ref_src=embed">
          [image or embed]
        </a>
      </p>
      &mdash; Haoqun Jiang (
      <a href="https://bsky.app/profile/did:plc:oiawuf6mbqiigagveorctrsj?ref_src=embed">
        @haoqun.dev
      </a>
      ){' '}
      <a href="https://bsky.app/profile/did:plc:oiawuf6mbqiigagveorctrsj/post/3lbf3etdjxc24?ref_src=embed">
        20 novembre 2024 à 14:43
      </a>
    </blockquote>
  )
}
