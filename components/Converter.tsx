'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import FileCard from './FileCard'

export type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp'

export interface FileItem {
  id: string
  name: string
  status: 'pending' | 'converting' | 'done' | 'error'
  outputUrl?: string
  outputName?: string
  error?: string
}

const FORMAT_LABELS: Record<OutputFormat, string> = {
  'image/jpeg': 'JPG',
  'image/png': 'PNG',
  'image/webp': 'WebP',
}

const FORMAT_EXT: Record<OutputFormat, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
}

async function convertFile(
  file: File,
  format: OutputFormat
): Promise<{ url: string; name: string }> {
  const heic2any = (await import('heic2any')).default
  const result = await heic2any({ blob: file, toType: format, quality: 0.92 })
  const blob = Array.isArray(result) ? result[0] : result
  const url = URL.createObjectURL(blob)
  const baseName = file.name.replace(/\.(heic|heif)$/i, '')
  const name = `${baseName}.${FORMAT_EXT[format]}`
  return { url, name }
}

export default function Converter() {
  const [files, setFiles] = useState<FileItem[]>([])
  const [format, setFormat] = useState<OutputFormat>('image/jpeg')
  const [dragging, setDragging] = useState(false)
  const [batchWarning, setBatchWarning] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const objectUrlsRef = useRef<string[]>([])

  useEffect(() => {
    return () => {
      objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [])

  const processFiles = useCallback(
    async (incoming: File[]) => {
      const valid = incoming.filter((f) =>
        /\.(heic|heif)$/i.test(f.name)
      )
      if (!valid.length) return

      if (valid.length > 50) {
        setBatchWarning(true)
        valid.splice(50)
      } else {
        setBatchWarning(false)
      }

      const newItems: FileItem[] = valid.map((f) => ({
        id: `${f.name}-${f.size}-${Date.now()}-${Math.random()}`,
        name: f.name,
        status: 'pending',
      }))

      setFiles((prev) => [...prev, ...newItems])

      for (let i = 0; i < valid.length; i++) {
        const item = newItems[i]
        setFiles((prev) =>
          prev.map((f) =>
            f.id === item.id ? { ...f, status: 'converting' } : f
          )
        )
        try {
          const { url, name } = await convertFile(valid[i], format)
          objectUrlsRef.current.push(url)
          setFiles((prev) =>
            prev.map((f) =>
              f.id === item.id
                ? { ...f, status: 'done', outputUrl: url, outputName: name }
                : f
            )
          )
        } catch (err) {
          const message =
            err instanceof Error ? err.message : 'Conversion failed'
          setFiles((prev) =>
            prev.map((f) =>
              f.id === item.id ? { ...f, status: 'error', error: message } : f
            )
          )
        }
      }
    },
    [format]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragging(false)
      const dropped = Array.from(e.dataTransfer.files)
      processFiles(dropped)
    },
    [processFiles]
  )

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = () => setDragging(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? [])
    processFiles(selected)
    e.target.value = ''
  }

  const handleDownloadAll = () => {
    const done = files.filter((f) => f.status === 'done' && f.outputUrl)
    done.forEach((f) => {
      const a = document.createElement('a')
      a.href = f.outputUrl!
      a.download = f.outputName!
      a.click()
    })
  }

  const handleClear = () => {
    objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url))
    objectUrlsRef.current = []
    setFiles([])
  }

  const doneCount = files.filter((f) => f.status === 'done').length

  return (
    <div className="w-full space-y-4">
      {/* Format toggle */}
      <div className="flex items-center justify-center gap-1 rounded-lg border border-gray-200 bg-gray-50 p-1 w-fit mx-auto">
        {(Object.keys(FORMAT_LABELS) as OutputFormat[]).map((f) => (
          <button
            key={f}
            onClick={() => setFormat(f)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
              format === f
                ? 'bg-white text-blue-600 shadow-sm ring-1 ring-gray-200'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {FORMAT_LABELS[f]}
          </button>
        ))}
      </div>

      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => inputRef.current?.click()}
        className={`relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-16 text-center transition-all ${
          dragging
            ? 'border-blue-400 bg-blue-50'
            : 'border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".heic,.heif"
          multiple
          onChange={handleInputChange}
          className="sr-only"
        />
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
        </div>
        <div>
          <p className="text-base font-semibold text-gray-800">
            {dragging ? 'Drop your HEIC files here' : 'Drop HEIC files here'}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            or <span className="text-blue-600 font-medium">browse files</span> — .heic and .heif supported
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
          <span>🔒</span>
          <span>Files never leave your device</span>
        </div>
        {batchWarning && (
          <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 max-w-xs">
            Please convert up to 50 files at a time. Drop the rest after these finish.
          </p>
        )}
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-700">
              {files.length} file{files.length !== 1 ? 's' : ''}
            </p>
            <div className="flex gap-2">
              {doneCount >= 2 && (
                <button
                  onClick={handleDownloadAll}
                  className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                >
                  Download All ({doneCount})
                </button>
              )}
              <button
                onClick={handleClear}
                className="rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {files.map((file) => (
              <FileCard key={file.id} file={file} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
