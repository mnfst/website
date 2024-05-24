import React from 'react'
import './LiveCodeHero.scss'

const LiveCodeHero: React.FC = () => (
  <div className="box-wrapper">
    <div className="box box--code is-flex is-align-items-flex-start is-justify-content-flex-start is-flex-direction-column px-0 pt-0 pb-3 is-shadowless">
      <img
        src="./assets/images/yaml-file.svg"
        alt="example of yaml file"
        loading="lazy"
      />
    </div>
  </div>
)

export default LiveCodeHero
