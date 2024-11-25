'use client'

import React, { useState } from 'react'
import './LiveCodeHero.scss'

const LiveCodeHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      label: 'Data models',
      content: 'test 1'
    },
    {
      label: 'Auth',
      content: 'test 2'
    },
    {
      label: 'Validation',
      content: 'test 3'
    },
    {
      label: 'Storage',
      content: 'test 4'
    }
  ]

  return (
    <div>
      {/* Tab Headers */}
      <div style={{ display: 'flex', borderBottom: '2px solid #ccc' }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              border: 'none',
              borderBottom: activeTab === index ? '3px solid #0070f3' : 'none',
              backgroundColor: 'transparent',
              fontWeight: activeTab === index ? 'bold' : 'normal'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content: editor */}
      <div
        style={{
          height: 640,
          width: 1136,
          backgroundColor: 'black',
          color: 'white'
        }}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

export default LiveCodeHero
