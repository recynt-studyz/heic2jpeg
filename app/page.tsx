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
        className="relative w-full bg-cover bg-center pt-8 pb-0 px-4"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/15" />
        {/* Bottom fade to white */}
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-b from-transparent to-white" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[680px] space-y-5">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-sm">
              HEIC to JPEG Converter
            </h1>
            <p className="text-base text-white/80">
              Convert iPhone photos from HEIC to JPG, PNG, or WebP — free, instant,{' '}
              <span className="font-medium text-white">no upload required.</span>
            </p>
          </div>

          {/* Converter card */}
          <div className="rounded-2xl bg-white/90 shadow-xl backdrop-blur-sm p-5">
            <Converter />
          </div>
        </div>
      </section>

      {/* Below-fold content — plain white */}
      <main className="mx-auto w-full max-w-2xl px-4 pt-2 pb-6 space-y-5">
        {/* Ad — above the fold for viewability */}
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


        {/* How It Works */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">How HEIC to JPEG Conversion Works</h2>
          <p className="text-gray-600 leading-relaxed">
            HEIC stands for High Efficiency Image Container, a file format introduced by Apple in 2017 with iOS 11. It is built on the HEIF standard — High Efficiency Image File Format — which was developed by the Moving Picture Experts Group (MPEG) as a modern replacement for aging image formats. HEIC uses the HEVC (H.265) codec to compress image data, achieving roughly twice the compression efficiency of JPEG at the same perceptual quality. A photo that would be 4MB as a JPEG can often be stored as a 2MB HEIC file with no visible loss of detail.
          </p>
          <p className="text-gray-600 leading-relaxed">
            JPEG, by contrast, uses the older DCT (Discrete Cosine Transform) algorithm developed in the early 1990s. While JPEG is universally supported across every device, browser, and operating system, it was designed for the hardware constraints of three decades ago. HEIC supports features JPEG simply cannot: 16-bit color depth, wide color gamut (Display P3), transparency layers, image sequences, and non-destructive metadata — all in a smaller file.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This tool converts HEIC files entirely inside your browser using <strong>libheif-js</strong>, a WebAssembly port of the open-source libheif C++ library. When you drop a HEIC file onto the converter, libheif-js decodes the compressed image data in memory on your device. The decoded pixel data is then painted onto an HTML5 Canvas element, and the Canvas API exports it as JPEG, PNG, or WebP — whichever format you choose. The entire process happens locally: no file is ever transmitted to a server, and nothing touches the network.
          </p>
          <p className="text-gray-600 leading-relaxed">
            HEIC files fail to open on Windows and Android because neither platform has licensed the HEVC codec required to decode them. Microsoft offers an optional HEVC Video Extensions codec in its store, but it is not installed by default, and many users never encounter it until they need to open a photo sent from an iPhone. Android has similarly patchy support — some recent Samsung devices can display HEIC files, but compatibility is not guaranteed across manufacturers or app versions. Converting to JPEG eliminates this uncertainty entirely.
          </p>
        </section>

        {/* Worked Example */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">A Real-World Example</h2>
          <p className="text-gray-600 leading-relaxed">
            Consider James, who upgraded to an iPhone 15 and spent two weeks photographing a vacation across Portugal. He came home with just over 200 photos, each a crisp HEIC file averaging 2–3 MB. When he tried to share the highlights with his parents on Windows and his sister on Android, none of the photos would open. His parents saw a generic file icon; his sister's gallery app refused to display the images. The files weren't corrupted — they simply weren't in a format those devices understood.
          </p>
          <p className="text-gray-600 leading-relaxed">
            James dropped all 200 photos into this converter, selected JPEG output at 88% quality, and downloaded the converted files in a few minutes. The resulting JPEGs averaged 1.8 MB — slightly smaller than the originals, with no perceptible quality difference on screen. Every photo opened instantly on every device. His parents could view them in Windows Photo Viewer; his sister could scroll through them in her default Android gallery.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When choosing your output format, JPEG is the right default for photos: it achieves the best balance of file size and compatibility. PNG is lossless and produces larger files, but is the right choice when you need to preserve exact pixel values — for screenshots, diagrams, or images with transparent backgrounds. WebP offers excellent compression and is supported by all modern browsers, making it a good choice if the images are destined for a website rather than general sharing.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For quality settings, 85–90% JPEG quality is the sweet spot for photos — it preserves essentially all visible detail while keeping file sizes manageable. Setting quality to 100% produces a near-lossless JPEG but can triple the file size with minimal visible gain. If you are converting photos for archival purposes or further editing, use PNG instead of JPEG at 100%, since PNG is truly lossless and avoids the generational quality loss that accumulates when a JPEG is saved repeatedly. For batch conversions, the converter processes all files in parallel, so dropping 50 photos at once is just as fast as dropping one.
          </p>
        </section>

        {/* Key Factors */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">What Affects Conversion Quality</h2>
          <ul className="space-y-3 text-gray-600 leading-relaxed">
            <li>
              <strong className="text-gray-800">Output format choice (JPEG vs PNG vs WebP).</strong>{' '}
              JPEG uses lossy compression and is the best choice for photographs destined for sharing or uploading. PNG is lossless and better suited for graphics, screenshots, or any image you plan to edit further. WebP combines strong compression with broad browser support, making it ideal for web publishing but less useful for sharing with non-technical recipients.
            </li>
            <li>
              <strong className="text-gray-800">Quality setting.</strong>{' '}
              The quality slider controls how aggressively the JPEG encoder discards subtle detail. At 85–90%, the result is visually indistinguishable from the original to most viewers. Dropping below 75% starts to introduce visible compression artifacts — blocky areas in smooth gradients and ringing around sharp edges. For archival or print purposes, use PNG rather than pushing JPEG quality to 100%.
            </li>
            <li>
              <strong className="text-gray-800">Original iPhone camera settings.</strong>{' '}
              Photos taken in HDR mode, Portrait mode, or as Live Photos contain additional data layers — depth maps, focus information, and motion frames — that HEIC can store but JPEG cannot. The converter extracts the primary image layer; these extra layers are not carried over to the output file. This is expected behavior: the converted photo looks identical to the still frame you see in your camera roll.
            </li>
            <li>
              <strong className="text-gray-800">Color profile handling (P3 wide color gamut).</strong>{' '}
              iPhones capture photos in the Display P3 color space, which covers a wider range of colors than the sRGB standard used by most displays and software. When a P3 image is converted to JPEG without a color profile conversion, vivid colors — particularly reds, greens, and cyans — can appear oversaturated or shifted on devices that interpret the file as sRGB. The converter preserves the embedded color profile in the output file, allowing color-aware applications to render the image correctly.
            </li>
          </ul>
        </section>

        {/* Compatibility Guide */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">HEIC Compatibility Guide</h2>
          <p className="text-gray-600 leading-relaxed">
            HEIC is natively supported on <strong>Apple devices running iOS 11 or later</strong> and <strong>macOS High Sierra (10.13) or later</strong>. Adobe Photoshop (version 19.1+) and Lightroom Classic also support HEIC natively, as does Google Photos on Android when files are uploaded through the app. These platforms can open, display, and edit HEIC files without any conversion.
          </p>
          <p className="text-gray-600 leading-relaxed">
            HEIC is <em>not</em> supported by default on <strong>Windows</strong> (requires a paid Microsoft Store codec), most <strong>Android</strong> gallery apps, all major <strong>web browsers</strong> (Chrome, Firefox, Edge cannot display HEIC inline), <strong>social media platforms</strong> (Twitter, Instagram, Facebook reject HEIC uploads), most <strong>email clients</strong>, and virtually all older photo editing software. If you need your photos to work reliably everywhere — not just on Apple hardware — converting to JPEG is the only guarantee.
          </p>
        </section>

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
