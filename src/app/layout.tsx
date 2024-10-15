import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HotjarSnippet from './components/Hotjar'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manifest - A Whole Backend That Fits Into 1 YAML file',
  description:
    'Complete Backend with Admin Panel, REST API, Auth, Storage and more. All in one YAML file.',
  openGraph: {
    type: 'website',
    url: 'https://manifest.build',
    title: 'A Whole Backend That Fits Into 1 YAML file',
    description:
      'Complete Backend with Admin Panel, REST API, Auth, Storage and more. All in one YAML file.',
    siteName: 'Manifest',
    images: [
      {
        url: 'https://manifest.build/assets/images/og-image.png'
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        {children}
        <HotjarSnippet />
        <GoogleAnalytics gaId="G-FPJ74C43L9" />
      </body>
    </html>
  )
}
