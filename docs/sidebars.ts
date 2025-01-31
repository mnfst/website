import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docSidebar: [
    {
      type: 'category',
      label: '🏁 Getting started',
      items: [
        {
          type: 'doc',
          id: 'introduction'
        },
        {
          type: 'doc',
          id: 'install'
        }
      ]
    },
    {
      type: 'category',
      label: '📦 Your data',
      items: [
        {
          type: 'doc',
          id: 'entities'
        },
        {
          type: 'doc',
          id: 'properties'
        },
        {
          type: 'doc',
          id: 'relations'
        },
        {
          type: 'doc',
          id: 'validation'
        }
      ]
    },
    {
      type: 'category',
      label: '🔒 Auth and Access Control',
      items: [
        {
          type: 'doc',
          id: 'authentication'
        },
        {
          type: 'doc',
          id: 'policies'
        }
      ]
    },
    {
      type: 'category',
      label: '🧩 Logic',
      items: [
        {
          type: 'doc',
          id: 'endpoints'
        },
        {
          type: 'doc',
          id: 'webhooks'
        }
      ]
    },
    {
      type: 'category',
      label: '🔌 Connect to your backend',
      items: [
        {
          type: 'doc',
          id: 'javascript-sdk'
        },
        {
          type: 'doc',
          id: 'rest-api'
        },
        {
          type: 'doc',
          id: 'upload'
        }
      ]
    },
    {
      type: 'category',
      label: '🚀 Deploy',
      items: [
        {
          type: 'doc',
          id: 'deploy'
        },
        {
          type: 'doc',
          id: 'deploy-digital-ocean'
        },
        {
          type: 'doc',
          id: 'deploy-fly-io'
        },
        {
          type: 'doc',
          id: 'deploy-render-com'
        },
        {
          type: 'doc',
          id: 'deploy-heroku'
        }
      ]
    },
    {
      type: 'category',
      label: '🎓 Quick starts',
      items: [
        {
          type: 'doc',
          id: 'react'
        },
        {
          type: 'doc',
          id: 'svelte'
        },
        {
          type: 'doc',
          id: 'angular'
        },
        {
          type: 'doc',
          id: 'vue'
        },
        {
          type: 'doc',
          id: 'astro'
        }
      ]
    }
  ]
}

export default sidebars
