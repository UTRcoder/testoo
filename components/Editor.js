import { useState, useRef } from 'react'

export default function Editor() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const inputRef = useRef(null)

  const handleUpload = (e) => {
    const f = e.target.files[0]
    if (!f) return
    setFile(f)
    setPreview(URL.createObjectURL(f))
  }

  const clear = () => {
    if (preview) URL.revokeObjectURL(preview)
    setFile(null); setPreview(null)
    if (inputRef.current) inputRef.current.value = null
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <label className="block text-sm font-medium text-gray-700">Upload image or video</label>
      <input ref={inputRef} onChange={handleUpload} type="file" accept="image/*,video/*" className="mt-3 block w-full text-sm text-gray-600 file:py-2 file:px-4 file:rounded-full file:bg-primary-500 file:text-white" />
      {preview ? (
        <div className="mt-4">
          {file.type.startsWith('image') ? (
            <img src={preview} alt="preview" className="rounded-md media-preview" />
          ) : (
            <video src={preview} controls className="rounded-md media-preview" />
          )}
          <div className="mt-3 flex gap-2">
            <button onClick={clear} className="px-3 py-1 border rounded">Remove</button>
            <a href={preview} download={file?.name} className="px-3 py-1 border rounded">Download</a>
          </div>
        </div>
      ) : (
        <div className="mt-4 text-gray-500">No file selected. Upload to preview.</div>
      )}
    </div>
  )
}
