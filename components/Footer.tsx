'use client'

const parts = ['recyntstudyz', 'gmail', 'com']

const handleContact = () => {
  window.location.href = `mailto:${parts[0]}@${parts[1]}.${parts[2]}`
}

export default function Footer() {
  return (
    <footer className="text-center text-xs text-gray-400 pb-4">
      <p className="pb-2">Free online tool to convert iPhone HEIC photos to JPEG, PNG or WebP. No upload, no signup, no limits.</p>
      <p className="flex flex-wrap items-center justify-center gap-x-2">
        <span>heic2jpeg.app</span>
        <span>·</span>
        <a href="/privacy" className="hover:text-gray-500 transition-colors">Privacy Policy</a>
        <span>·</span>
        <a href="/about" className="hover:text-gray-500 transition-colors">About</a>
        <span>·</span>
        <button onClick={handleContact} className="hover:text-gray-500 transition-colors">
          Contact
        </button>
      </p>
    </footer>
  )
}
