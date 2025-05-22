'use client'

import React, { useEffect, useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml'

import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './LiveCodeHero.scss'

SyntaxHighlighter.registerLanguage('yaml', yaml)

const LiveCodeHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [displayedContent, setDisplayedContent] = useState('')
  const [animationIndex, setAnimationIndex] = useState(0)

  const tabs: { label: string; content: string; demoUrl?: string }[] = [
    {
      label: 'Collections',
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
      - { name: isChampion, type: boolean }`,
      demoUrl: 'https://demo-collections.manifest.build'
    },
    {
      label: 'Singles',
      content: `name: Corporate website 🌐

entities:
  Homepage:
    single: true
    properties:
      - { name: title, type: string }
      - { name: description, type: richText }
      - { name: coverImage, type: image }

  Footer:
    single: true
    properties:
      - { name: githubLink, type: link }
      - { name: linkedinLink, type: link }
      - { name: copyright, type: string }
      `,
      demoUrl: 'https://demo-singles.manifest.build'
    },
    {
      label: 'Relations',
      content: `name: Basketball League 🏀

entities:
  Player 🤾:
    properties:
      - name
    belongsTo:
      - Team

  Team 👥:
    properties:
      - name

  Fixture 🏟️:
    properties:
      - { name: homeScore, type: number }
      - { name: awayScore, type: number }
    belongsTo:
      - { name: homeTeam, entity: Team }
      - { name: awayTeam, entity: Team }`,
      demoUrl: 'https://demo-relations.manifest.build'
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
        - access: forbidden`,
      demoUrl: 'https://demo-auth.manifest.build'
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
      email: { required: true, contains: "@company.com" }`,
      demoUrl: 'https://demo-validation.manifest.build'
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
        }`,
      demoUrl: 'https://demo-storage.manifest.build'
    },
    {
      label: 'Webhooks',
      content: `name: HR Management System 🏢

entities:
  
  Employee:
    properties:
      - name
      - position
    hooks:
      beforeCreate:
        - { url: 'https://my-webhook.com/' }
      afterDelete:
        - { 
            url: 'https://another-webhook.com',
            headers: { authorization: 'Bearer \${API_KEY}' }
          }
        - { url: 'https://my-webhook.com', method: 'PATCH' }`
    },
    {
      label: 'Endpoints',
      content: `name: Task Management Application

entities:
  Task:
    properties:
      - title
      - description
      - { name: isCompleted, type: boolean }
      - { name: upvotes, type: number }

endpoints:
  upvoteTask:
    path: /tasks/:id/upvote
    method: POST
    handler: upvoteTask`
    }
  ]

  const goToTab = (index: number) => {
    setTimeout(() => {
      setActiveTab(index)
      setAnimationIndex(0)
      setDisplayedContent('')
    })
  }

  useEffect(() => {
    const content = tabs[activeTab]?.content || ''

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
      setAnimationIndex(nextIndex + 1) //
    }
  }, [animationIndex, activeTab])

  return (
    <div>
      {/* Tab Headers */}
      <div className="card is-shadowless is-bordered p-4 tab-list is-flex is-align-items-flex-start mb-0"
        style={{ overflowX: "auto", whiteSpace: "nowrap", display: "flex" }}>
        {tabs.map((tab, i) => (
          <span key={i} onClick={() => goToTab(i)} className="tab">
            <span
              className={`tag is-rounded  ${
                activeTab === i ? 'is-white-bis' : 'is-white'
              }`}
            >
              {tab.label}
            </span>
          </span>
        ))}
      </div>

      {/* Tab Content: editor */}
      <div className="ui-ide is-fullwidth is-bordered">
        <div className="ide">
          <div className="sidebar has-text-grey-lighter">
            <div className="sidebar__title">
              <span>explorer</span>
              <i className="fa-solid fa-ellipsis"></i>
            </div>
            <div className="explorer-item is-small">
              <i className="fa-solid fa-chevron-right"></i>
              <span className="is-uppercase ">My-project</span>
            </div>
            <div className="explorer-item level-2 has-2-children is-parent ">
              <i className="fa-solid fa-chevron-down"></i>
              <i className="lni lni-folder"></i>
              <span className="">manifest</span>
            </div>
            <div className="explorer-item level-3">
              <i className="fa-solid fa-database has-text-info"></i>
              <span className="">backend.db</span>
            </div>
            <div className="explorer-item level-3 is-active">
              <i className="fa-solid fa-exclamation has-text-primary-light is-italic"></i>
              <span className="">backend.yml</span>
            </div>
            <div className="explorer-item is-parent level-2">
              <i className="fa-solid fa-chevron-right"></i>
              <i className="lni lni-folder"></i>
              <span className="">node_modules</span>
            </div>
            <div className="explorer-item is-parent level-2">
              <i className="fa-solid fa-chevron-right"></i>
              <i className="lni lni-folder"></i>
              <span className="">frontend</span>
            </div>
            <div className="explorer-item level-2">
              <i className="fa-solid fa-gear has-text-grey-light"></i>
              <span className="">.env</span>
            </div>
            <div className="explorer-item level-2">
              <i className="fa-brands fa-git-alt has-text-danger"></i>
              <span className="">.gitignore</span>
            </div>
            <div className="explorer-item level-2">
              <i className="has-text-info is-regular has-text-warning">
                {' '}
                &#123;&#125;
              </i>
              <span className="">package.json</span>
            </div>
            <div className="explorer-item level-2">
              <i className="fa-solid fa-circle-info"></i>
              <span className="">README.md</span>
            </div>
          </div>
          <div className="editor-container">
            <div className="tab-template">
              <div className="tab-ide">
                <i className="fa-solid fa-exclamation has-text-primary-light is-italic"></i>
                <span>backend.yml</span>
                <span className="is-size-8 pt-1 has-text-grey-light">
                  manifest/backend.yml
                </span>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="toolbar has-text-grey">
                <i className="fa-solid fa-code-compare"></i>
                <i className="fa-solid fa-table-columns"></i>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>
            <div className="editor-template">
              <div className="line-numbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
              </div>
              <div className="code">
                <SyntaxHighlighter
                  language="yaml"
                  style={nightOwl}
                  className="mt-0"
                >
                  {displayedContent}
                </SyntaxHighlighter>
              </div>
              <div className="buttons buttons--demo">
                {tabs[activeTab]?.demoUrl && (
                  <>
                    <a
                      className="button is-small is-light is-outlined"
                      href={tabs[activeTab].demoUrl}
                      target="_blank"
                    >
                      <i className="fa-solid fa-table-columns mr-2"></i>
                      <span>Admin panel live demo</span>
                    </a>
                    <a
                      className="button is-small is-light is-outlined"
                      href={`${tabs[activeTab].demoUrl}/api`}
                      target="_blank"
                    >
                      <i className="fa-solid fa-cloud-arrow-down mr-2"></i>
                      <span>REST API doc</span>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveCodeHero
