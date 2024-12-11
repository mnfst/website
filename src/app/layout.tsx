import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manifest - The 1-file Headless CMS',
  description:
    'Instant Micro-backend with Admin Panel, REST API, Auth, Storage and more. All in one YAML file.',
  openGraph: {
    type: 'website',
    url: 'https://manifest.build',
    title: 'Manifest - The 1-file Headless CMS',
    description:
      'Instant Micro-backend with Admin Panel, REST API, Auth, Storage and more. All in one YAML file.',
    siteName: 'Manifest',
    images: [
      {
        url: 'https://manifest.build/assets/images/og-image.png'
      }
    ]
  }
}

const RootLayout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <html lang="en" data-theme="light" className="has-navbar-fixed-top">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
