import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HEIC to JPEG Converter — Free, Instant, No Upload Required',
  description:
    'Convert HEIC photos to JPEG instantly in your browser. No upload, no signup, completely free. Your photos never leave your device.',
  keywords: [
    'heic to jpeg',
    'heic2jpeg',
    'convert heic to jpeg',
    'heic converter',
    'heic to jpg',
    'iphone photos to jpeg',
    'heif to jpeg',
  ],
  openGraph: {
    title: 'HEIC to JPEG Converter — Free, Instant, No Upload Required',
    description:
      'Convert HEIC photos to JPEG instantly in your browser. No upload, no signup, completely free. Your photos never leave your device.',
    url: 'https://heic2jpeg.app',
    siteName: 'heic2jpeg.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to JPEG Converter — Free, Instant, No Upload Required',
    description:
      'Convert HEIC photos to JPEG instantly in your browser. No upload, no signup, completely free. Your photos never leave your device.',
  },
  metadataBase: new URL('https://heic2jpeg.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8792838105001561"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
