'use client'
import { useState } from 'react'
import AdminShell from '@/components/layout/AdminShell'
import { priestConfig } from '@/config/priest.config'

type Photo = typeof priestConfig.gallery.photos[0]
type Video = typeof priestConfig.gallery.videos[0]

export default function AdminGalleryPage() {
  const [tab, setTab] = useState<'photos' | 'videos'>('photos')
  const [photos, setPhotos] = useState<Photo[]>(priestConfig.gallery.photos)
  const [videos, setVideos] = useState<Video[]>(priestConfig.gallery.videos)

  const removePhoto = (idx: number) => setPhotos(p => p.filter((_, i) => i !== idx))
  const removeVideo = (idx: number) => setVideos(v => v.filter((_, i) => i !== idx))

  return (
    <AdminShell>
      <div className="px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-serif text-3xl mb-1" style={{ color: 'var(--maroon)' }}>Gallery Manager</h1>
            <p className="text-sm font-light" style={{ color: 'var(--muted)' }}>
              Add, edit, or remove photos and videos from the public gallery.
            </p>
          </div>
          <button
            className="text-xs px-6 py-2.5 uppercase tracking-wide font-medium"
            style={{ background: 'var(--saffron)', color: 'white' }}>
            + Add {tab === 'photos' ? 'Photo' : 'Video'}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(['photos', 'videos'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className="px-5 py-2 text-sm rounded-full capitalize"
              style={{
                background: tab === t ? 'var(--saffron)' : 'white',
                color: tab === t ? 'white' : 'var(--muted)',
                border: `1px solid ${tab === t ? 'var(--saffron)' : 'rgba(180,120,40,0.2)'}`
              }}>
              {t} ({tab === t ? (t === 'photos' ? photos : videos).length : (t === 'photos' ? photos : videos).length})
            </button>
          ))}
        </div>

        {tab === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {photos.map((photo, i) => (
              <div key={i} className="bg-white rounded-lg p-4 flex gap-4 items-start"
                style={{ border: '1px solid rgba(180,120,40,0.15)' }}>
                <div className="w-14 h-14 rounded flex items-center justify-center flex-shrink-0 text-2xl"
                  style={{ background: 'var(--saffron-pale)' }}>🪷</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium mb-0.5" style={{ color: 'var(--text)' }}>{photo.title}</div>
                  <div className="text-xs mb-1" style={{ color: 'var(--muted)' }}>{photo.desc}</div>
                  <span className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--saffron-light)', color: 'var(--saffron)' }}>
                    {photo.category}
                  </span>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button className="text-xs px-2.5 py-1 rounded"
                    style={{ background: 'var(--saffron-pale)', color: 'var(--brown)' }}>
                    Edit
                  </button>
                  <button onClick={() => removePhoto(i)}
                    className="text-xs px-2.5 py-1 rounded"
                    style={{ background: '#FFEBEE', color: '#C62828' }}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.map((video, i) => (
              <div key={i} className="bg-white rounded-lg p-4 flex gap-4 items-start"
                style={{ border: '1px solid rgba(180,120,40,0.15)' }}>
                <div className="w-14 h-14 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--brown)' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 2l10 6-10 6V2z" fill="rgba(240,208,128,0.8)" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium mb-0.5" style={{ color: 'var(--text)' }}>{video.title}</div>
                  <div className="flex gap-3">
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>{video.category}</span>
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>{video.duration}</span>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button className="text-xs px-2.5 py-1 rounded"
                    style={{ background: 'var(--saffron-pale)', color: 'var(--brown)' }}>
                    Edit
                  </button>
                  <button onClick={() => removeVideo(i)}
                    className="text-xs px-2.5 py-1 rounded"
                    style={{ background: '#FFEBEE', color: '#C62828' }}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 p-4 rounded text-sm font-light"
          style={{ background: 'var(--saffron-pale)', border: '1px solid rgba(180,120,40,0.2)', color: 'var(--muted)' }}>
          💡 Changes here update priest.config.ts gallery data. Real image uploads require a storage backend (S3, Cloudinary, etc.).
        </div>
      </div>
    </AdminShell>
  )
}
