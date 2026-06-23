'use client'

import { useEffect, useRef } from 'react'

interface AdBannerProps {
  slot: string
  className?: string
}

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export default function AdBanner({ slot, className = '' }: AdBannerProps) {
  const ref = useRef<HTMLModElement>(null)
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    pushed.current = true
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      // AdSense not loaded yet
    }
  }, [])

  return (
    <div className={`min-h-0 overflow-hidden ${className}`}>
      <ins
        ref={ref}
        className="adsbygoogle block"
        style={{ display: 'block', minHeight: 0 }}
        data-ad-client="ca-pub-XXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
