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

        <h2 className="text-lg font-semibold text-gray-900 pt-2">Why This Tool Exists</h2>
        <p className="text-gray-600 leading-relaxed">
          Since iOS 11, every iPhone defaults to saving photos in HEIC format — High Efficiency
          Image Container. HEIC is genuinely better than JPEG: it compresses photos to roughly
          half the file size at equivalent quality, supports 16-bit color depth, and handles
          modern camera features like HDR and wide color gamut. Apple adopted it for good
          reasons.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The problem is that the rest of the world hasn&apos;t caught up. Windows does not support
          HEIC without a separately purchased codec. Android phones have inconsistent support
          depending on manufacturer and software version. Web browsers cannot display HEIC files
          inline. Social media platforms reject HEIC uploads. Most older photo editors simply
          refuse to open the files. For an iPhone user trying to share photos with anyone outside
          the Apple ecosystem, HEIC creates a constant, low-grade friction that shouldn&apos;t exist.
        </p>
        <p className="text-gray-600 leading-relaxed">
          This tool exists to eliminate that friction. Drop your HEIC files in, get universally
          compatible images back, and move on with your day.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 pt-2">Privacy as a Design Constraint</h2>
        <p className="text-gray-600 leading-relaxed">
          Most online image converters work by uploading your files to a server, processing them
          remotely, and serving the results back to your browser. That means your photos touch
          someone else&apos;s infrastructure — potentially stored in a temporary directory, logged,
          or accessible to the operator. For personal photos, that&apos;s an unnecessary privacy risk.
        </p>
        <p className="text-gray-600 leading-relaxed">
          heic2jpeg.app takes a different approach: every conversion happens entirely inside your
          browser using <strong>libheif-js</strong>, a WebAssembly port of the open-source libheif
          library. Your files are decoded in memory on your own device, rendered to an HTML5 Canvas,
          and exported as the format you choose. Nothing is transmitted over the network. There are
          no servers receiving your images — not because of a privacy policy, but because the
          architecture physically cannot send them anywhere.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 pt-2">Who Benefits</h2>
        <p className="text-gray-600 leading-relaxed">
          The typical user is an iPhone owner trying to share photos with family members on
          Windows or Android — people who don&apos;t know what a HEIC file is and don&apos;t care, they
          just want the photos to open. But the tool is also regularly used by photographers
          submitting images to editors or agencies that require JPEG, social media managers
          preparing content for platforms that reject HEIC uploads, HR departments processing
          employee ID photos taken on iPhones, and developers building workflows that need
          universally compatible image formats.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 pt-2">Technical Approach</h2>
        <p className="text-gray-600 leading-relaxed">
          The converter is built on Next.js and deployed as a static site with no server-side
          image processing. The core decoding is handled by libheif-js compiled to WebAssembly,
          which runs in the browser at near-native speed. Decoded pixel data is written to an
          HTML5 Canvas element, which exports the final image using the browser&apos;s native Canvas
          API. This means the output quality and format support are determined entirely by the
          browser — a modern approach that requires zero server infrastructure and zero ongoing
          bandwidth costs per conversion. That is why the tool can be offered free, with no usage
          limits, indefinitely.
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
