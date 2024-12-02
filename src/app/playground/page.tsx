'use client'
import sdk, { VM } from '@stackblitz/sdk'
import { useEffect } from 'react'

import './playground.scss'

export default function Playground() {
  const editorId = 'embed-editor'
  let vm: VM

  useEffect(() => {
    const connect = async () => {
      vm = await sdk.embedGithubProject(
        editorId,
        'mnfst/manifest/tree/master/examples/main-demo',
        {
          openFile: 'manifest/backend.yml'
        }
      )
    }

    connect()
  })

  return (
    <div>
      <div className="mt-6 pt-4">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title is-1">Playground</h1>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <div id="embed-editor"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
