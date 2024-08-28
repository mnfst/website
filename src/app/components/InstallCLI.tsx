'use client'
import './InstallCLI.scss'

import React, { useState } from 'react'

const InstallCLI: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false)
  const command = 'npx add-manifest'

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command)
    setIsCopied(true)
  }

  return (
    <div className="is-flex is-justify-content-flex-start">
      <div className="is-flex is-align-items-center is-justify-content-flex-start npx-wrapper">
        <div className="is-rounded is-clipped is-flex is-full-height is-align-items-stretch p-0 has-background-dark has-text-light has-shadow-success install-wrap has-background-grey-darker">
          <span className="px-5 py-4 install-code">{command}</span>
          <a
            className="icon-text has-background-grey-darker px-4 py-2 is-flex is-align-items-center has-text-white is-relative"
            onClick={handleCopy}
          >
            <span className="icon">
              <i className="lni lni-files"></i>
            </span>
          </a>
        </div>
        {isCopied && <span className="ml-4 info-copy is-size-6">Copied!</span>}
      </div>
    </div>
  )
}

export default InstallCLI
