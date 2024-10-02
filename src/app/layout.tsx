import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import HotjarSnippet from './components/Hotjar'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manifest - Effortless Backends',
  description:
    'We are building the simplest backend in the world. Do you want to embark on this adventure with us?',
  openGraph: {
    type: 'website',
    url: 'https://manifest.build',
    title: 'Manifest - Effortless Backends',
    description:
      'We are building the simplest backend in the world. Do you want to embark on this adventure with us?',
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
        <Script id="cr-relay-script" strategy="afterInteractive">
          {`
            (function() {
              if (typeof window === 'undefined') return;
              if (typeof window.signals !== 'undefined') return;
              var script = document.createElement('script');
              script.src = 'https://cdn.cr-relay.com/v1/site/43b5a956-ea4c-403e-8f29-fb180fc604a9/signals.js';
              script.async = true;
              window.signals = Object.assign(
                [],
                ['page', 'identify', 'form'].reduce(function (acc, method){
                  acc[method] = function () {
                    signals.push([method, arguments]);
                    return signals;
                  };
                return acc;
                }, {})
              );
              document.head.appendChild(script);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
