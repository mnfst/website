import { Analytics } from '@vercel/analytics/react'
import type { Metadata as NextMetadata } from 'next'
import { Inter } from 'next/font/google'

import Script from 'next/script'
import React from 'react'
import HotjarSnippet from './components/Hotjar'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { PostHogProvider } from './providers'
import PostHogPageView from './PostHogPageView'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

interface Metadata extends NextMetadata {
  openGraph: {
    url: string
    title: string
    description: string
    siteName: string
    type: string
    images: Array<{ url: string; type: string }>
  }
}

export const metadata: Metadata = {
  title: 'Manifest - The 1-file Micro-backend',
  description:
    'Instant Micro-backend with Admin Panel, REST API, Auth, Storage and more. All in one YAML file.',
  openGraph: {
    type: 'website',
    url: 'https://manifest.build',
    title: 'Manifest - The 1-file Micro-backend',
    description:
      'Instant Micro-backend with Admin Panel, REST API, Auth, Storage and more. All in one YAML file.',
    siteName: 'Manifest',
    images: [
      {
        url: 'https://manifest.build/assets/images/og-image.png',
        type: 'image/png'
      }
    ]
  }
}

const RootLayout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <html lang="en" data-theme="light" className="has-navbar-fixed-top">
      <head>
        <Script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/d8a8f8d74309d7ede1458cdf/script.js"
        ></Script>
        <title>{String(metadata.title) ?? 'Default Title'}</title>
        <meta
          name="description"
          content={metadata.description ?? 'Default description'}
        />
        <meta property="og:type" content={metadata.openGraph?.type} />
        <meta property="og:url" content={metadata.openGraph?.url?.toString()} />
        <meta property="og:title" content={String(metadata.openGraph?.title)} />
        <meta
          property="og:description"
          content={metadata.description ?? undefined}
        />
        <meta property="og:site_name" content={metadata.openGraph?.siteName} />
        <meta
          property="og:image"
          content={
            Array.isArray(metadata.openGraph?.images) &&
            metadata.openGraph.images[0] &&
            'url' in metadata.openGraph.images[0]
              ? metadata.openGraph.images[0].url.toString()
              : ''
          }
        />
        <HotjarSnippet />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          <PostHogProvider>
            <PostHogPageView />
            {children}
          </PostHogProvider>
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
