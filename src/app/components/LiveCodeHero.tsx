'use client'

import React, { useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml'

import './LiveCodeHero.scss'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

SyntaxHighlighter.registerLanguage('yaml', yaml)

const LiveCodeHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      label: 'Data models',
      content: `# manifest/backend.yml
name: Healthcare application 🏥

entities:
  Doctor 👩🏾‍⚕️:
    properties:
      - fullName
      - avatar
      - { name: price, type: money, options: { currency: EUR } }
    belongsTo:
      - City

  Patient 🤒:
    properties:
      - fullName
      - { name: birthdate, type: date }
    belongsTo:
      - Doctor

  City 🌍:
    properties:
      - name`
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

  function handleTabClick(index: number) {
    console.log('handleTabClick', index)
    setActiveTab(index)
  }

  return (
    <div>
      {/* Tab Headers */}
      <div style={{ display: 'flex', borderBottom: '2px solid #ccc' }}>
        {tabs.map((tab, i) => (
          <span
            key={i}
            onClick={() => handleTabClick(i)}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              border: 'none',
              borderBottom: activeTab === i ? '3px solid #0070f3' : 'none',
              backgroundColor: 'transparent',
              fontWeight: activeTab === i ? 'bold' : 'normal'
            }}
          >
            {tab.label}
          </span>
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
        {/* TODO: Chose style: https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_STYLES_PRISM.MD */}
        <SyntaxHighlighter language="yaml" style={oneDark}>
          {tabs[activeTab].content}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default LiveCodeHero
