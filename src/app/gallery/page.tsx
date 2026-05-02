'use client'
import { useState } from 'react'

const photos = [
  { title: 'Wedding Ceremony', desc: 'A beautiful Vedic Vivah Sanskaar — seven steps, sacred fire, and lifelong vows.', category: 'Life Events' },
  { title: 'Ganesh Havan', desc: 'Sacred fire ritual invoking Lord Ganesh — removal of obstacles and new beginnings.', category: 'Havan' },
  { title: 'Annaprashan', desc: 'The joyous first rice-feeding ceremony for a six-month-old, surrounded by family.', category: 'Life Events' },
  { title: 'Navaratri Festival', desc: 'Nine nights of Devi worship — the temple adorned with flowers and lights.', category: 'Festival' },
  { title: 'Griha Pravesh', desc: 'House warming blessings — Vastu Pooja and sacred threshold crossing.', category: 'Pooja' },
  { title: 'Bala Vihar Class', desc: 'Children learning Sanskrit shlokas — the next generation carrying dharma forward.', category: 'Education' },
  { title: 'Mundan Ceremony', desc: 'The sacred first haircut — a joyful family moment full of blessings.', category: 'Life Events' },
  { title: 'Diwali Pooja', desc: 'Deepawali Lakshmi Pooja at the temple — lamps, flowers, and the goddess of prosperity.', category: 'Festival' },
  { title: 'Rudrabhishek', desc: 'Sacred Shiva Abhishekam with milk, honey, and sacred water.', category: 'Pooja' },
  { title: 'Satyanarayan Katha', desc: 'Families gathered for Katha Vachan — stories from the Skanda Purana.', category: 'Katha' },
  { title: 'Upanayana', desc: 'Sacred thread ceremony — a young boy\'s initiation into Vedic learning.', category: 'Life Events' },
  { title: 'Bhagwat Katha', desc: 'Seven-day Bhagwat Katha discourse — devotees from across DFW gathered.', category: 'Katha' },
]

const videos = [
  { title: 'Wedding Ceremony Highlights', duration: '12 min', category: 'Life Events' },
  { title: 'Rudrabhishek — Full Recitation', duration: '28 min', category: 'Pooja' },
  { title: 'Navagraha Homa — Morning Ritual', duration: '45 min', category: 'Havan' },
  { title: 'Satyanarayan Katha — Full Discourse', duration: '90 min', category: 'Katha' },
  { title: 'Bala Vihar — Sanskrit Shloka Class', duration: '20 min', category: 'Education' },
  { title: 'Diwali Celebration at the Temple', duration: '8 min', category: 'Festival' },
]

const filters = ['All', 'Life Events', 'Pooja', 'Havan', 'Katha', 'Festival', 'Education']

export default function GalleryPage() {
  const [tab, setTab] = useState<'photos' | 'videos'>('photos')
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState<typeof photos[0] | null>(null)

  const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.category === filter)
  const filteredVideos = filter === 'All' ? videos : videos.filter(v => v.category === filter)

  return (
    <main>

      {/* Page header */}
      <div className="px-8 py-12" style={{ background: 'var(--maroon)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-widest uppercase mb-2 opacity-70"
            style={{ color: 'var(--gold-light)' }}>✦ Sacred Moments</div>
          <h1 className="font-serif text-5xl" style={{ color: '#FFF8EE' }}>Photo & Video Gallery</h1>
        </div>
      </div>

      <section className="px-8 py-12" style={{ background: '#FAF6F0' }}>
        <div className="max-w-6xl mx-auto">

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
                {t}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className="px-4 py-1.5 text-xs rounded-full"
                style={{
                  background: filter === f ? 'var(--maroon)' : 'white',
                  color: filter === f ? 'white' : 'var(--muted)',
                  border: `1px solid ${filter === f ? 'var(--maroon)' : 'rgba(180,120,40,0.2)'}`
                }}>
                {f}
              </button>
            ))}
          </div>

          {/* Photos grid */}
          {tab === 'photos' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {filteredPhotos.map(photo => (
                <div key={photo.title}
                  onClick={() => setLightbox(photo)}
                  className="rounded overflow-hidden cursor-pointer group"
                  style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
                  <div className="aspect-square flex flex-col items-center justify-center transition-colors group-hover:opacity-90"
                    style={{ background: 'var(--saffron-pale)' }}>
                    <div className="text-3xl mb-2 opacity-30">🪷</div>
                    <div className="text-xs text-center px-3 font-medium"
                      style={{ color: 'var(--brown)' }}>{photo.title}</div>
                    <div className="text-xs mt-1 px-2 py-0.5 rounded-full"
                      style={{ background: 'var(--saffron-light)', color: 'var(--saffron)', fontSize: '10px' }}>
                      {photo.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos grid */}
          {tab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredVideos.map(video => (
                <div key={video.title} className="rounded overflow-hidden"
                  style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
                  <div className="aspect-video flex flex-col items-center justify-center"
                    style={{ background: 'var(--brown)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                      style={{ background: 'rgba(212,96,10,0.8)' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 2l10 6-10 6V2z" fill="white" />
                      </svg>
                    </div>
                    <div className="text-xs text-center px-4 leading-relaxed"
                      style={{ color: 'rgba(255,240,200,0.7)' }}>{video.title}</div>
                  </div>
                  <div className="px-4 py-3 bg-white flex justify-between items-center">
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>{video.category}</span>
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>{video.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Upload note */}
          <div className="mt-8 p-4 rounded text-sm text-center font-light"
            style={{ background: 'white', border: '1px solid rgba(180,120,40,0.2)', color: 'var(--muted)' }}>
            📸 Real photos and videos will be added here once provided. Contact us to share your ceremony photos.
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(30,5,0,0.9)' }}
          onClick={() => setLightbox(null)}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full text-center"
            onClick={e => e.stopPropagation()}>
            <div className="text-5xl mb-4">🪷</div>
            <h3 className="font-serif text-2xl mb-2" style={{ color: 'var(--maroon)' }}>
              {lightbox.title}
            </h3>
            <p className="text-sm font-light mb-4" style={{ color: 'var(--muted)' }}>
              {lightbox.desc}
            </p>
            <button onClick={() => setLightbox(null)}
              className="text-xs px-6 py-2 uppercase tracking-wide"
              style={{ background: 'var(--maroon)', color: 'white' }}>
              Close
            </button>
          </div>
        </div>
      )}

    </main>
  )
}