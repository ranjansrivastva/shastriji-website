import Link from 'next/link'

const programs = [
  {
    badge: 'Children · Ages 5–12',
    title: 'Bala Vihar — Sanskrit & Shloka',
    desc: 'Weekly classes teaching Devanagari script, simple Sanskrit shlokas, stories from the Ramayana and Mahabharata, and the meaning of Hindu festivals and rituals.',
    detail: ['Every Sunday morning', 'At the temple', 'Free for ages 5–8'],
  },
  {
    badge: 'Youth · Ages 13–18',
    title: 'Hindu Heritage Program',
    desc: 'Deeper engagement with Bhagavad Gita, Upanishads, Vedic philosophy, and the significance of Samskaras. Builds cultural identity for second-generation youth.',
    detail: ['Bi-weekly sessions', 'In-person & online', 'Certificate on completion'],
  },
  {
    badge: 'Adults',
    title: 'Bhagavad Gita Study Circle',
    desc: 'Weekly satsang and discourse on selected chapters of the Gita. Practical applications of Vedantic philosophy for everyday life and parenting.',
    detail: ['Every Saturday evening', 'In-person & Zoom', 'Open to all'],
  },
  {
    badge: 'Adults',
    title: 'Vedic Astrology (Jyotish)',
    desc: 'Introduction to Jyotish principles, birth chart reading, planetary periods, and muhurta (auspicious timing) for major life decisions.',
    detail: ['Monthly workshops', 'Limited seats', 'Contact to enroll'],
  },
  {
    badge: 'All Ages',
    title: 'Festival Workshops',
    desc: 'Hands-on learning around major festivals — Diwali, Navratri, Holi, Ganesh Chaturthi. Craft, story, ritual explanation, and prasad preparation.',
    detail: ['Seasonal schedule', 'Family-friendly', 'Free to attend'],
  },
  {
    badge: 'All Ages',
    title: 'Sanskrit Chanting & Mantra',
    desc: 'Learn correct pronunciation and meaning of key Vedic mantras, Stotras, and Suprabhatam. Suitable for beginners and devotees seeking refinement.',
    detail: ['Weekly sessions', 'In-person & online', 'Beginners welcome'],
  },
]

export default function EducationPage() {
  return (
    <main>

      {/* Page header */}
      <div className="px-8 py-12" style={{ background: 'var(--maroon)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-widest uppercase mb-2 opacity-70"
            style={{ color: 'var(--gold-light)' }}>✦ Spiritual Learning</div>
          <h1 className="font-serif text-5xl" style={{ color: '#FFF8EE' }}>
            Cultural & Religious Education
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="px-8 py-10" style={{ background: 'var(--saffron-pale)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '📖', title: 'Rooted in tradition', desc: 'Authentic Vedic curriculum taught directly from scripture by a qualified Kashi-trained Pandit.' },
            { icon: '🌍', title: 'Relevant to modern life', desc: 'Practical application of dharmic principles for Hindu families living in the United States.' },
            { icon: '👨‍👩‍👧', title: 'For the whole family', desc: 'Programs designed for every age — from young children to adults seeking deeper spiritual understanding.' },
          ].map(item => (
            <div key={item.title} className="flex gap-4">
              <div className="text-3xl">{item.icon}</div>
              <div>
                <div className="text-sm font-medium mb-1" style={{ color: 'var(--maroon)' }}>{item.title}</div>
                <div className="text-sm font-light leading-relaxed" style={{ color: 'var(--muted)' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="px-8 py-14" style={{ background: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-0.5 mb-2" style={{ background: 'var(--saffron)' }} />
          <h2 className="font-serif text-3xl mb-1" style={{ color: 'var(--maroon)' }}>
            Programs for All Ages
          </h2>
          <p className="text-sm font-light mb-8" style={{ color: 'var(--muted)' }}>
            Classes run weekly. In-person at the temple and online via Zoom.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {programs.map(p => (
              <div key={p.title} className="p-6 rounded"
                style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
                <span className="inline-block text-xs px-3 py-1 rounded-full mb-3"
                  style={{
                    background: 'var(--saffron-light)',
                    color: 'var(--saffron)',
                    border: '1px solid rgba(212,96,10,0.2)'
                  }}>
                  {p.badge}
                </span>
                <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--maroon)' }}>{p.title}</h3>
                <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.detail.map(d => (
                    <span key={d} className="text-xs px-2 py-1 rounded"
                      style={{
                        background: 'var(--saffron-pale)',
                        color: 'var(--brown)',
                        border: '1px solid rgba(180,120,40,0.15)'
                      }}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-12 text-center" style={{ background: 'var(--saffron-pale)' }}>
        <h2 className="font-serif text-3xl mb-3" style={{ color: 'var(--maroon)' }}>
          Enroll Your Family Today
        </h2>
        <p className="text-sm font-light mb-6 max-w-lg mx-auto" style={{ color: 'var(--muted)' }}>
          Classes run weekly. In-person at the temple and online via Zoom.
          Contact us for the current schedule and fees.
        </p>
        <Link href="/contact"
          className="inline-block text-xs px-8 py-3 uppercase tracking-wide font-medium"
          style={{ background: 'var(--saffron)', color: 'white' }}>
          Get in Touch →
        </Link>
      </section>

    </main>
  )
}