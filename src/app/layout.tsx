import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HotjarSnippet from './components/Hotjar'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manifest - Building the simplest backend in the world',
  description:
    'We are building the simplest backend in the world. Do you want to embark on this adventure with us?'
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
      </body>
    </html>
  )
}
