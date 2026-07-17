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
            inside your browser using JavaScript and WebAssembly. We have no servers that
            receive, store, or process your images. We physically cannot access your files —
            not as a policy choice, but because the architecture never transmits them anywhere.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">How image processing works</h2>
          <p className="text-gray-600 leading-relaxed">
            When you drop a HEIC file into the converter, it is decoded in memory on your own
            device using libheif-js, a WebAssembly port of the open-source libheif library. The
            decoded pixel data is rendered to an HTML5 Canvas element in your browser, and the
            Canvas API exports the result as JPEG, PNG, or WebP. The converted file is then made
            available for download directly from your browser&apos;s memory — no upload, no
            intermediate server, no cloud storage. Once you close the tab, the data is gone.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This architecture was chosen specifically because it eliminates the privacy risks
            associated with server-side conversion. We never have custody of your files, so
            there is nothing to breach, subpoena, accidentally expose, or sell. Zero data
            retention is not a promise we make — it is a technical reality.
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
            <li>We do not collect your name, email address, or any identifying information</li>
            <li>We do not use session cookies to track you across visits</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Analytics (Google Analytics 4)</h2>
          <p className="text-gray-600 leading-relaxed">
            This site uses Google Analytics 4 to understand aggregate traffic patterns. GA4
            collects anonymized data including page views, session duration, country of visit,
            browser type, and device type. This data helps us understand how the tool is being
            used and whether it is working correctly — for example, whether mobile users are
            having a different experience than desktop users.
          </p>
          <p className="text-gray-600 leading-relaxed">
            GA4 does not receive any image data or file content. It cannot see what you convert
            or what your files contain. The data collected is aggregate and anonymized — we see
            that &quot;500 users visited today from the United States,&quot; not anything about
            individual users. Google&apos;s collection and use of this data is governed by{' '}
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
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Advertising (Google AdSense)</h2>
          <p className="text-gray-600 leading-relaxed">
            This site displays ads served by Google AdSense. AdSense uses cookies and similar
            technologies to serve ads that are relevant to your interests, based on your
            browsing activity across other websites. This is how the site generates the revenue
            that keeps it free and without usage limits. The ads we display are determined
            entirely by Google — we do not target, profile, or track users ourselves.
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
            . AdSense data handling is governed by{' '}
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
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">GDPR and CCPA</h2>
          <p className="text-gray-600 leading-relaxed">
            Because we do not collect personal data, store user information, or process images
            on any server, most GDPR and CCPA obligations do not apply to us in the traditional
            sense — there is no data to access, correct, delete, or port. If you are a user in
            the European Economic Area or California and have questions about your rights with
            respect to the third-party services on this site (Google Analytics, Google AdSense),
            those requests should be directed to Google directly, as they are the data controller
            for those services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Third-party links</h2>
          <p className="text-gray-600 leading-relaxed">
            This site may contain links to external websites. We are not responsible for the
            privacy practices or content of those sites. Clicking an external link means you
            are subject to that site&apos;s own privacy policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Children&apos;s privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            heic2jpeg.app is not directed at children under 13. We do not knowingly collect
            any information from children. If you believe a child has provided personal
            information through this site, please contact us and we will take appropriate steps.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Changes to this policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this policy from time to time, for example if we add new third-party
            services or change how the tool works. Changes will be reflected by the &quot;Last
            updated&quot; date at the top of this page. Continued use of the site after a policy
            update constitutes acceptance of the revised terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions or concerns about this privacy policy, you can reach us via
            the contact information listed on the{' '}
            <Link href="/about" className="text-blue-600 hover:underline">
              About page
            </Link>
            . We will respond to privacy-related inquiries within a reasonable timeframe.
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
