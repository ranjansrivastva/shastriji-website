'use client'
import { useState } from 'react'
import AdminShell from '@/components/layout/AdminShell'
import { priestConfig } from '@/config/priest.config'

type Testimonial = typeof priestConfig.testimonials[0]

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(priestConfig.testimonials)
  const [editing, setEditing] = useState<number | null>(null)
  const [draft, setDraft] = useState<Testimonial | null>(null)
  const [adding, setAdding] = useState(false)
  const [newItem, setNewItem] = useState<Testimonial>({ text: '', name: '', event: '', initials: '' })

  const startEdit = (i: number) => { setEditing(i); setDraft({ ...testimonials[i] }) }
  const cancelEdit = () => { setEditing(null); setDraft(null) }
  const saveEdit = (i: number) => {
    if (!draft) return
    setTestimonials(t => t.map((x, idx) => idx === i ? draft : x))
    setEditing(null)
    setDraft(null)
  }
  const remove = (i: number) => setTestimonials(t => t.filter((_, idx) => idx !== i))
  const addNew = () => {
    if (!newItem.name || !newItem.text) return
    setTestimonials(t => [...t, { ...newItem, initials: newItem.initials || newItem.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase() }])
    setNewItem({ text: '', name: '', event: '', initials: '' })
    setAdding(false)
  }

  return (
    <AdminShell>
      <div className="px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-serif text-3xl mb-1" style={{ color: 'var(--maroon)' }}>Testimonials</h1>
            <p className="text-sm font-light" style={{ color: 'var(--muted)' }}>
              Manage family testimonials shown on the home page.
            </p>
          </div>
          <button onClick={() => setAdding(true)}
            className="text-xs px-6 py-2.5 uppercase tracking-wide font-medium"
            style={{ background: 'var(--saffron)', color: 'white' }}>
            + Add Testimonial
          </button>
        </div>

        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-lg p-5"
              style={{ border: '1px solid rgba(180,120,40,0.15)' }}>
              {editing === i && draft ? (
                <div className="flex flex-col gap-3">
                  <textarea rows={3} value={draft.text}
                    onChange={e => setDraft({ ...draft, text: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded resize-none font-serif italic"
                    style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }} />
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { key: 'name', label: 'Name', placeholder: 'Full Name' },
                      { key: 'event', label: 'Event', placeholder: 'Ceremony · City, TX' },
                      { key: 'initials', label: 'Initials', placeholder: 'AB' },
                    ].map(f => (
                      <div key={f.key}>
                        <label className="block text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--brown)' }}>{f.label}</label>
                        <input value={draft[f.key as keyof Testimonial]}
                          onChange={e => setDraft({ ...draft, [f.key]: e.target.value })}
                          placeholder={f.placeholder}
                          className="w-full px-3 py-2 text-sm rounded"
                          style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }} />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => saveEdit(i)}
                      className="text-xs px-4 py-1.5 rounded"
                      style={{ background: '#E8F5E9', color: '#2E7D32' }}>Save</button>
                    <button onClick={cancelEdit}
                      className="text-xs px-4 py-1.5 rounded"
                      style={{ background: 'var(--saffron-pale)', color: 'var(--muted)' }}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="text-xs mb-1" style={{ color: 'var(--gold)' }}>★★★★★</div>
                    <p className="font-serif text-sm italic mb-3" style={{ color: 'var(--text)' }}>"{t.text}"</p>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium"
                        style={{ background: 'var(--saffron-light)', color: 'var(--saffron)' }}>
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-sm font-medium" style={{ color: 'var(--brown)' }}>{t.name}</div>
                        <div className="text-xs" style={{ color: 'var(--muted)' }}>{t.event}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button onClick={() => startEdit(i)}
                      className="text-xs px-3 py-1.5 rounded"
                      style={{ background: 'var(--saffron-pale)', color: 'var(--brown)' }}>Edit</button>
                    <button onClick={() => remove(i)}
                      className="text-xs px-3 py-1.5 rounded"
                      style={{ background: '#FFEBEE', color: '#C62828' }}>Remove</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add new form */}
        {adding && (
          <div className="mt-4 bg-white rounded-lg p-5"
            style={{ border: '2px dashed rgba(212,96,10,0.3)' }}>
            <div className="text-sm font-medium mb-3" style={{ color: 'var(--maroon)' }}>New Testimonial</div>
            <div className="flex flex-col gap-3">
              <textarea rows={3} value={newItem.text}
                onChange={e => setNewItem({ ...newItem, text: e.target.value })}
                placeholder="Enter the testimonial text..."
                className="w-full px-3 py-2 text-sm rounded resize-none font-serif italic"
                style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }} />
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: 'name', label: 'Name', placeholder: 'Full Name' },
                  { key: 'event', label: 'Event', placeholder: 'Ceremony · City, TX' },
                  { key: 'initials', label: 'Initials (auto)', placeholder: 'AB' },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--brown)' }}>{f.label}</label>
                    <input value={newItem[f.key as keyof Testimonial]}
                      onChange={e => setNewItem({ ...newItem, [f.key]: e.target.value })}
                      placeholder={f.placeholder}
                      className="w-full px-3 py-2 text-sm rounded"
                      style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }} />
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={addNew}
                  className="text-xs px-5 py-2 rounded font-medium"
                  style={{ background: 'var(--saffron)', color: 'white' }}>Add Testimonial</button>
                <button onClick={() => setAdding(false)}
                  className="text-xs px-5 py-2 rounded"
                  style={{ background: 'var(--saffron-pale)', color: 'var(--muted)' }}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminShell>
  )
}
