'use client'

import { FileItem } from './Converter'

interface FileCardProps {
  file: FileItem
}

export default function FileCard({ file }: FileCardProps) {
  const handleDownload = () => {
    if (!file.outputUrl || !file.outputName) return
    const a = document.createElement('a')
    a.href = file.outputUrl
    a.download = file.outputName
    a.click()
  }

  const statusColors: Record<FileItem['status'], string> = {
    pending: 'bg-gray-100 text-gray-500',
    converting: 'bg-blue-50 text-blue-600',
    done: 'bg-green-50 text-green-700',
    error: 'bg-red-50 text-red-700',
  }

  const statusLabel: Record<FileItem['status'], string> = {
    pending: 'Pending',
    converting: 'Converting…',
    done: 'Done',
    error: 'Error',
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm">
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900">{file.name}</p>
        {file.error && (
          <p className="mt-0.5 truncate text-xs text-red-600">{file.error}</p>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[file.status]}`}
        >
          {file.status === 'converting' && (
            <svg
              className="h-3 w-3 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          )}
          {statusLabel[file.status]}
        </span>

        {file.status === 'done' && file.outputUrl && (
          <button
            onClick={handleDownload}
            className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            Download
          </button>
        )}
      </div>
    </div>
  )
}
