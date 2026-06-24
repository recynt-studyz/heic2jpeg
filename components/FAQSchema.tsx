const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a HEIC file?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HEIC (High Efficiency Image Container) is the default photo format used by iPhones since iOS 11. It offers better compression than JPEG while maintaining higher quality, but it is not natively supported by Windows or many older apps.',
      },
    },
    {
      '@type': 'Question',
      name: "Why can't I open HEIC files on Windows?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Windows does not natively support HEIC files without purchasing the HEVC Video Extensions codec from the Microsoft Store. Converting your HEIC files to JPEG makes them universally compatible with Windows, browsers, and virtually all software.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my photos uploaded to a server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. This converter runs entirely in your browser using JavaScript. Your photos are processed locally on your device and never sent to any server. Once you close the tab, no trace of your files remains anywhere online.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert HEIC to JPEG on Windows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simply drag and drop your HEIC files onto the page or click to browse, choose your output format, and download the converted files. No software to install, no account to create.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert multiple HEIC files at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can drag and drop multiple files at once or select them all using the file browser. Each file converts and gets its own download button, plus a Download All button appears when two or more files are ready.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the JPEG quality be good?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We convert at 92% JPEG quality, which is considered excellent and near-lossless for everyday photography. The resulting files are visually indistinguishable from the originals at normal viewing sizes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this work on iPhone and iPad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The converter works in any modern browser including Safari on iPhone and iPad. However since HEIC is an Apple format you may find it most useful when sharing photos with Windows or Android users.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between HEIC and HEIF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "HEIF (High Efficiency Image Format) is the standard specification, while HEIC is Apple's implementation of that standard. In practice they are functionally the same — files with both .heic and .heif extensions are supported by this converter.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is heic2jpeg.app completely free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely free. There are no limits on file size, number of files, or conversions per day. The site is supported by ads which keeps it free for everyone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What output formats are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can convert HEIC files to JPEG (most compatible), PNG (lossless, larger files), or WebP (modern format with great compression). JPEG is recommended for photos, PNG is best for screenshots or images needing transparency.',
      },
    },
  ],
}

export default function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
