import { ImageResponse } from 'next/og'

export const size = { width: 48, height: 48 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 10,
          background: 'linear-gradient(135deg, #1d4ed8, #2563EB)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Camera body */}
          <div style={{
            width: 26,
            height: 18,
            borderRadius: 4,
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            {/* Camera lens */}
            <div style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1d4ed8, #60a5fa)',
              border: '2px solid #1d4ed8',
            }} />
            {/* Viewfinder bump */}
            <div style={{
              position: 'absolute',
              top: -5,
              left: 6,
              width: 8,
              height: 5,
              borderRadius: '2px 2px 0 0',
              background: 'white',
            }} />
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
