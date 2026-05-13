'use client'
import { useState } from 'react'
import { priestConfig } from '@/config/priest.config'

const { contact, languages, navSymbol, contactInquiryTypes } = priestConfig

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', inquiry: contactInquiryTypes[0], message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactItems = [
    {
      icon: '📞',
      label: 'Phone / WhatsApp',
      value: contact.phone,
      sub: contact.whatsappAvailable ? 'Call or WhatsApp anytime' : 'Call anytime',
    },
    {
      icon: '✉️',
      label: 'Email',
      value: contact.email,
      sub: `We respond within ${contact.responseTime}`,
    },
    {
      icon: '📍',
      label: 'Service Areas',
      value: contact.serviceAreasDisplay,
      sub: `Home visits across the ${contact.serviceAreas[0]} metroplex`,
    },
    {
      icon: '🕐',
      label: 'Availability',
      value: contact.availability,
      sub: contact.availabilityNote,
    },
  ]

  return (
    <main>

      {/* Page header */}
      <div className="px-8 py-12" style={{ background: 'var(--maroon)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-widest uppercase mb-2 opacity-70"
            style={{ color: 'var(--gold-light)' }}>{navSymbol} Get in Touch</div>
          <h1 className="font-serif text-5xl" style={{ color: '#FFF8EE' }}>Contact Us</h1>
        </div>
      </div>

      <section className="px-8 py-14" style={{ background: 'white' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact info */}
          <div>
            <div className="w-12 h-0.5 mb-2" style={{ background: 'var(--saffron)' }} />
            <h2 className="font-serif text-3xl mb-6" style={{ color: 'var(--maroon)' }}>
              Reach Shastriji
            </h2>
            {contactItems.map(item => (
              <div key={item.label} className="flex gap-4 mb-6">
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--saffron-light)' }}>
                  <span style={{ fontSize: '18px' }}>{item.icon}</span>
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase mb-0.5"
                    style={{ color: 'var(--muted)' }}>{item.label}</div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>{item.value}</div>
                  <div className="text-xs font-light" style={{ color: 'var(--muted)' }}>{item.sub}</div>
                </div>
              </div>
            ))}

            {/* Languages */}
            <div className="mt-4 p-4 rounded" style={{
              background: 'var(--saffron-pale)',
              border: '1px solid rgba(180,120,40,0.2)'
            }}>
              <div className="text-xs font-medium tracking-widest uppercase mb-3"
                style={{ color: 'var(--brown)' }}>
                Languages
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.filter(l => l !== '+ more').map(l => (
                  <span key={l} className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: 'var(--saffron-light)',
                      color: 'var(--brown)',
                      border: '1px solid rgba(212,96,10,0.2)'
                    }}>
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="p-6 rounded" style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🙏</div>
                <h3 className="font-serif text-2xl mb-2" style={{ color: 'var(--maroon)' }}>
                  Message Sent!
                </h3>
                <p className="text-sm font-light" style={{ color: 'var(--muted)' }}>
                  Thank you for reaching out. Shastriji will get back to you within {contact.responseTime}.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl mb-5" style={{ color: 'var(--maroon)' }}>
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                      style={{ color: 'var(--brown)' }}>Full Name</label>
                    <input
                      type="text" required placeholder="Your full name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded"
                      style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                        style={{ color: 'var(--brown)' }}>Email</label>
                      <input
                        type="email" required placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded"
                        style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                        style={{ color: 'var(--brown)' }}>Phone</label>
                      <input
                        type="tel" placeholder="(xxx) xxx-xxxx"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded"
                        style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                      style={{ color: 'var(--brown)' }}>Inquiry Type</label>
                    <select
                      value={form.inquiry}
                      onChange={e => setForm({ ...form, inquiry: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded"
                      style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }}
                    >
                      {contactInquiryTypes.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                      style={{ color: 'var(--brown)' }}>Message</label>
                    <textarea
                      required rows={4}
                      placeholder="Describe your ceremony or question..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded resize-none"
                      style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }}
                    />
                  </div>
                  <button type="submit"
                    className="w-full py-3 text-xs uppercase tracking-wide font-medium"
                    style={{ background: 'var(--saffron)', color: 'white' }}>
                    Send Message →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

    </main>
  )
}
