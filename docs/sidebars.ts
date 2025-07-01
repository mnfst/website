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
      type: 'doc',
      id: 'get-started'
    },
    {
      type: 'category',
      label: 'Data',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'entities'
        },
        {
          type: 'doc',
          id: 'crud'
        },
        {
          type: 'doc',
          id: 'access'
        },
        {
          type: 'doc',
          id: 'validation'
        }
      ]
    },
    {
      type: 'category',
      label: 'Logic',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'authentication'
        },
        {
          type: 'doc',
          id: 'endpoints'
        },
        {
          type: 'doc',
          id: 'webhooks'
        },
        {
          type: 'doc',
          id: 'middlewares'
        }
      ]
    },
    {
      type: 'category',
      label: 'Storage',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'upload'
        },
        {
          type: 'doc',
          id: 's3-storage'
        }
      ]
    },

    {
      type: 'category',
      label: 'Settings',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'config'
        },
        {
          type: 'doc',
          id: 'ai-editor-rules'
        },
        {
          type: 'doc',
          id: 'deploy',
          label: 'Deploy'
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
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
