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
      label: '🚀 Getting started',
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
      label: '📦 Entities and Properties',
      items: [
        {
          type: 'doc',
          id: 'manifest-file'
        },
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
