'use client'

import dynamic from 'next/dynamic'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'

const Converter = dynamic(() => import('@/components/Converter'), {
  ssr: false,
  loading: () => (
    <div className="flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-gray-200">
      <p className="text-sm text-gray-400">Loading converter…</p>
    </div>
  ),
})

export default function Home() {
  return (
    <>
      <header className="border-b border-gray-100">
        <div className="mx-auto w-full max-w-2xl px-4 py-3">
          <span className="font-mono text-sm font-semibold tracking-tight text-gray-900">
            heic2jpeg
          </span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl px-4 py-6 space-y-6">
      {/* Hero */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          HEIC to JPEG Converter
        </h1>
        <p className="text-base text-gray-500">
          Convert iPhone photos instantly in your browser.{' '}
          <span className="font-medium text-gray-700">No upload required.</span>
        </p>
      </div>

      {/* Converter */}
      <Converter />

      {/* Ad — below converter */}
      <AdBanner slot="2222222222" />

      {/* Trust signals */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: 'No Upload', icon: '🛡️' },
          { label: 'Instant', icon: '⚡' },
          { label: 'Unlimited', icon: '∞' },
          { label: 'Free', icon: '✓' },
        ].map(({ label, icon }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 rounded-xl border border-gray-100 bg-gray-50 py-4 px-2 text-center"
          >
            <span className="text-xl">{icon}</span>
            <span className="text-sm font-semibold text-gray-700">{label}</span>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <FAQ />

      {/* Ad — below FAQ */}
      <AdBanner slot="3333333333" />

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 pb-4">
        <p>heic2jpeg.app — Free browser-based HEIC converter</p>
      </footer>
    </main>
    </>
  )
}
