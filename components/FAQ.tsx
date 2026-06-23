const faqs = [
  {
    q: 'What is a HEIC file?',
    a: 'HEIC (High Efficiency Image Container) is the default photo format used by iPhones since iOS 11. It offers better compression than JPEG while maintaining higher quality, but it\'s not natively supported by Windows or many older apps.',
  },
  {
    q: 'Why can\'t I open HEIC files on Windows?',
    a: 'Windows does not natively support HEIC files without purchasing the HEVC Video Extensions codec from the Microsoft Store. Converting your HEIC files to JPEG makes them universally compatible with Windows, browsers, and virtually all software.',
  },
  {
    q: 'Are my photos uploaded to a server?',
    a: 'No. This converter runs entirely in your browser using JavaScript. Your photos are processed locally on your device and never sent to any server. Once you close the tab, no trace of your files remains anywhere online.',
  },
  {
    q: 'How do I convert HEIC to JPEG on Windows?',
    a: 'Simply drag and drop your HEIC files onto this page (or click to browse), choose your output format, and download the converted files. No software to install, no account to create.',
  },
  {
    q: 'Can I convert multiple HEIC files at once?',
    a: 'Yes. You can drag and drop multiple files at once or select them all at once using the file browser. Each file converts in parallel and gets its own download button, plus a "Download All" button appears when two or more files are ready.',
  },
  {
    q: 'Will the JPEG quality be good?',
    a: 'Yes. We convert at 92% JPEG quality, which is considered excellent quality and near-lossless for everyday photography. The resulting files are visually indistinguishable from the originals at normal viewing sizes.',
  },
  {
    q: 'Does this work on iPhone and iPad?',
    a: 'Yes. The converter works in any modern browser including Safari on iPhone and iPad. However, since HEIC is an Apple format, you may find it most useful when sharing photos with Windows or Android users.',
  },
  {
    q: 'What\'s the difference between HEIC and HEIF?',
    a: 'HEIF (High Efficiency Image Format) is the standard specification, while HEIC is Apple\'s implementation of that standard. In practice, they\'re functionally the same — files with both .heic and .heif extensions are supported by this converter.',
  },
  {
    q: 'Is heic2jpeg.app completely free?',
    a: 'Yes, completely free. There are no limits on file size, number of files, or conversions per day. The site is supported by ads, which is what keeps it free and ad-free for you otherwise.',
  },
  {
    q: 'What output formats are supported?',
    a: 'You can convert HEIC files to JPEG (the most compatible format), PNG (lossless, larger files), or WebP (modern format with great compression). JPEG is recommended for photos; PNG is best for screenshots or images needing transparency.',
  },
]

export default function FAQ() {
  return (
    <section className="mx-auto w-full max-w-2xl">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
        {faqs.map((faq, i) => (
          <details key={i} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-gray-900 hover:bg-gray-50 [&::-webkit-details-marker]:hidden">
              <span>{faq.q}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </summary>
            <div className="px-5 pb-4 pt-1 text-sm leading-relaxed text-gray-600">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
