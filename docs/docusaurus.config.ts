import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

const config: Config = {
  title: 'Manifest Docs',
  tagline: 'Effortless backends',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://manifest.build',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'manifest', // Usually your GitHub org/user name.
  projectName: 'manifest', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          path: 'content',

          // Remove this to remove the "edit this page" links.
          editUrl: ({ versionDocsDirPath, docPath }) => {
            const baseUrl = 'https://github.com/mnfst/docs/blob/master/'
            // Enlève 'content/' du chemin pour correspondre à la structure du repo GitHub
            const newDocPath = docPath.replace(/^content\//, '')
            return baseUrl + newDocPath
          }
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        },
        gtag: {
          trackingID: 'GTM-PDRQLHB',
          anonymizeIP: true
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      { name: 'og:image', content: '/img/og-image.png' },
      { name: 'twitter:image', content: '/img/og-image.png' }
    ],
    announcementBar: {
      id: 'poc-banner',
      content:
        '🚀 Manifest is in BETA version. Give it a try and let us know what you think on our <a href="https://discord.gg/FepAked3W7" target="_blank"> Discord</a>.',
      backgroundColor: '#0a15b7',
      textColor: '#fff',
      isCloseable: false
    },
    navbar: {
      logo: {
        alt: 'Manifest Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg'
      },
      items: [
        {
          href: 'https://github.com/mnfst/manifest',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Developer Docs',
              to: '/'
            },
            {
              label: 'Contributor Docs',
              to: 'https://github.com/mnfst/manifest/blob/master/CONTRIBUTING.md'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/FepAked3W7'
            },
            {
              label: 'Discussion',
              href: 'https://github.com/mnfst/manifest/discussions'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mnfst/manifest/'
            },
            {
              label: 'manifest.build',
              href: 'https://manifest.build'
            }
          ]
        }
      ]
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true
      }
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['http', 'json', 'docker', 'tsx']
    }
  } satisfies Preset.ThemeConfig
}

export default config
