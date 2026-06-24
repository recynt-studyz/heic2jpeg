import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — heic2jpeg.app',
  description: 'About heic2jpeg.app — a free, private, browser-based HEIC to JPEG converter.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="mx-auto w-full max-w-2xl px-4 py-3">
          <Link
            href="/"
            className="font-mono text-lg font-semibold tracking-tight text-gray-900 sm:text-xl hover:text-blue-600 transition-colors"
          >
            heic2jpeg.app
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl px-4 py-10 space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">About</h1>

        <p className="text-gray-600 leading-relaxed">
          heic2jpeg.app is a free, browser-based tool for converting HEIC and HEIF photos to
          JPEG, PNG, or WebP. No software to install, no account to create, no file size
          limits. Just drop your photos and download the converted files.
        </p>

        <p className="text-gray-600 leading-relaxed">
          It was built for a simple problem: iPhone cameras default to HEIC format, but
          Windows, most websites, and older apps don&apos;t support it. Sharing photos with
          family, uploading to a form, or sending to a colleague shouldn&apos;t require a trip
          to the app store. This tool gets out of your way and just works.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Privacy was the primary design constraint. Every conversion happens entirely inside
          your browser — your photos are never uploaded to any server, never stored, and never
          seen by anyone but you. The site is free to use and supported by ads, with no plans
          to change that.
        </p>

        <div className="pt-4 border-t border-gray-100">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to converter
          </Link>
        </div>
      </main>
    </div>
  )
}
