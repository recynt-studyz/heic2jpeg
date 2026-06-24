import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — heic2jpeg.app',
  description: 'Privacy policy for heic2jpeg.app — how we handle your data (spoiler: we don\'t).',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="mx-auto w-full max-w-2xl px-4 py-3">
          <Link href="/" className="font-mono text-lg font-semibold tracking-tight text-gray-900 sm:text-xl hover:text-blue-600 transition-colors">
            heic2jpeg.app
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl px-4 py-10 space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: June 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">The short version</h2>
          <p className="text-gray-600 leading-relaxed">
            Your photos never leave your device. heic2jpeg.app converts HEIC files entirely
            inside your browser using JavaScript. We have no servers that receive, store, or
            process your images. We physically cannot access your files.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">What we collect</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not collect, store, or transmit any personal data or file content.
            Specifically:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-600 leading-relaxed">
            <li>Your photos and files are processed locally in your browser only</li>
            <li>No image data is ever sent to any server</li>
            <li>No account or sign-up is required</li>
            <li>We do not use session cookies to track you</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Advertising (Google AdSense)</h2>
          <p className="text-gray-600 leading-relaxed">
            This site displays ads served by Google AdSense. Google may use cookies and
            similar technologies to show you relevant ads based on your browsing history
            across other sites. This is governed by{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
          <p className="text-gray-600 leading-relaxed">
            You can opt out of personalised advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google&apos;s Ad Settings
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Analytics</h2>
          <p className="text-gray-600 leading-relaxed">
            We may use basic, privacy-respecting analytics to understand aggregate traffic
            (e.g. page views, country of visit). No personally identifiable information is
            collected. No individual user behaviour is tracked or stored by us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Third-party links</h2>
          <p className="text-gray-600 leading-relaxed">
            This site may contain links to external websites. We are not responsible for the
            privacy practices or content of those sites.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Children&apos;s privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            heic2jpeg.app is not directed at children under 13. We do not knowingly collect
            any information from children.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Changes to this policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this policy from time to time. Changes will be reflected by the
            &quot;Last updated&quot; date at the top of this page.
          </p>
        </section>

        <div className="pt-4 border-t border-gray-100">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to converter
          </Link>
        </div>
      </main>
    </div>
  )
}
