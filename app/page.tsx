'use client'

import dynamic from 'next/dynamic'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import FAQSchema from '@/components/FAQSchema'

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
          <span className="font-mono text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
            heic2jpeg.app
          </span>
        </div>
      </header>

      {/* Hero — full-width with background image */}
      <section
        className="relative w-full bg-cover bg-center py-10 px-4"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/15" />
        {/* Bottom fade to white */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[680px] space-y-5">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-sm">
              HEIC to JPEG Converter
            </h1>
            <p className="text-base text-white/80">
              Convert iPhone photos instantly in your browser.{' '}
              <span className="font-medium text-white">No upload required.</span>
            </p>
          </div>

          {/* Converter card */}
          <div className="rounded-2xl bg-white/90 shadow-xl backdrop-blur-sm p-5">
            <Converter />
          </div>
        </div>
      </section>

      {/* Below-fold content — plain white */}
      <main className="mx-auto w-full max-w-2xl px-4 py-6 space-y-6">
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

        <Footer />
        <FAQSchema />
      </main>
    </>
  )
}
