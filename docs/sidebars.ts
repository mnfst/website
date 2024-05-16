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
      label: 'Getting started',
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
      label: 'The Manifest file',
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
          id: 'property-types'
        },
        {
          type: 'doc',
          id: 'dummy-data'
        }
      ]
    },
    {
      type: 'category',
      label: 'Use your backend',
      items: [
        {
          type: 'doc',
          id: 'connect'
        },
        {
          type: 'doc',
          id: 'auth'
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
        }
      ]
    },
    {
      type: 'category',
      label: 'Deploy',
      items: [
        {
          type: 'doc',
          id: 'going-to-production'
        }
      ]
    }
  ]
}

export default sidebars
