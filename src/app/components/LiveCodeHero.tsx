'use client'

import React, { useEffect, useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml'

import './LiveCodeHero.scss'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

SyntaxHighlighter.registerLanguage('yaml', yaml)

const LiveCodeHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [displayedContent, setDisplayedContent] = useState('')
  const [animationIndex, setAnimationIndex] = useState(0) //

  const tabs = [
    {
      label: 'Data models',
      content: `name: Pokemon app 🐣

entities:
  Pokemon 🐉:
    properties:
      - name
      - {
          name: type,
          type: choice,
          options: { values: [Fire, Water, Grass, Electric] },
        }
      - { name: level, type: number }
    belongsTo:
      - Trainer

  Trainer 🧑‍🎤:
    properties:
      - name
      - { name: isChampion, type: boolean}`
    },
    {
      label: 'Auth',
      content: `name: Invoice Management System 🗂️

  entities:
    User 👩🏻‍💼:
        authenticable: true

    Accountant 👔:
        authenticable: true

    Invoice 🧾:
        properties:
        - number
        - { name: amount, type: money, options: { currency: "EUR" } }
        policies:
            create:
                - { access: restricted, allow: Accountant }
            read:
                - { access: restricted, allow: [Accountant, User] }
            update:
                - access: admin
            delete:
                - access: forbidden`
    },
    {
      label: 'Validation',
      content: `name: Newsletter sign up form 🗒️

entities:
  Subscriber 💎:
    properties:
      - name
      - { name: email, type: email }
      - { name: subscriptionDate, type: date }
    validation:
      name: { minLength: 3 }
      email: { required: true, contains: "@company.com" }`
    },
    {
      label: 'Storage',
      content: `name: Job recruitment app 💼

entities:
UserProfile 👤:
properties:
- name
- { name: email, type: email }
- { name: linkedIn profile, type: link }
- { name: resume, type: file }
- {
  name: profilePicture,
  type: image,
  options:
    {
      sizes:
        {
          standard: { height: 256, width: 256 },
          thumbnail: { height: 64, width: 64 },
        },
    },
}`
    }
  ]

  const handleTabClick = (index: number) => {
    setTimeout(() => {
      setActiveTab(index)
      setAnimationIndex(0)
      setDisplayedContent(''), 0
    })
  }

  useEffect(() => {
    const content = tabs[activeTab]?.content || ''

    // Skip spaces.
    const nextIndex = (() => {
      let index = animationIndex
      while (index < content.length && content[index] === ' ') {
        index++
      }
      return index
    })()

    if (animationIndex < content.length) {
      setDisplayedContent(
        (prev) => prev + content.slice(animationIndex, nextIndex + 1)
      )
      setAnimationIndex(nextIndex + 1)
    }
  }, [animationIndex, activeTab])

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
          {displayedContent}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default LiveCodeHero
