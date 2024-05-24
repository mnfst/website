'use client'

import React, { useState } from 'react'

const InstallCLI: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false)
  const command = 'npx add-manifest'

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command)
    setIsCopied(true)
  }

  return (
    <div className="is-flex is-justify-content-center">
      <div className="is-flex is-flex-direction-column is-align-items-flex-start is-justify-content-flex-start npx-wrapper">
        <div className="has-border-radius is-flex is-full-height is-align-items-stretch is-family-code p-0 has-background-dark has-text-light has-shadow-success">
          <span className="px-4 py-2 install-code">{command}</span>
          <a
            className="icon-text has-background-grey-darker px-4 py-2 is-flex is-align-items-center has-text-white is-relative"
            onClick={handleCopy}
          >
            <span className="icon">
              <i className="icon icon-copy"></i>
            </span>
            <span className="is-inline-flex is-flex-direction-column is-relative is-hidden-touch has-text-centered">
              <span className="button-copy">
                {isCopied ? 'Copied !' : 'Copy'}
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default InstallCLI
