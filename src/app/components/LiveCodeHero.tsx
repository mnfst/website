import React from 'react'
import './LiveCodeHero.scss'

const LiveCodeHero: React.FC = () => {
    return (
        <div className="box-wrapper">
            <img
                src="./assets/images/yaml-file.svg"
                alt="example of yaml file"
                loading="lazy"
                className="yaml-code is-fullwidth"
            />
        </div>
    )
}

export default LiveCodeHero
