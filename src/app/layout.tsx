import { Analytics } from '@vercel/analytics/react'
import type { Metadata as NextMetadata } from 'next'
import { Inter } from 'next/font/google'

import Script from 'next/script'
import React from 'react'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import PostHogPageView from './PostHogPageView'
import { PostHogProvider } from './providers'

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

export const metadata = {
  title: 'Manifest - Meet the 1-file micro-backend',
  description:
    'Instant Micro-backend with Admin Panel, REST API, Auth, Storage and more. All in one YAML file.',
  openGraph: {
    type: 'website',
    url: 'https://manifest.build',
    title: 'Manifest - Meet the 1-file micro-backend',
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
    <html
      lang="en"
      data-theme="light"
      className="has-navbar-fixed-top"
      suppressHydrationWarning
    >
      <head>
        {process.env.NODE_ENV === 'production' && (
          <Script
            id="cookieyes"
            type="text/javascript"
            src="https://cdn-cookieyes.com/client_data/d8a8f8d74309d7ede1458cdf/script.js"
          ></Script>
        )}
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
