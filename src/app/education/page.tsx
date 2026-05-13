import Link from 'next/link'
import { priestConfig } from '@/config/priest.config'

const { educationPrograms, educationIntro, navSymbol } = priestConfig

export default function EducationPage() {
  return (
    <main>

      {/* Page header */}
      <div className="px-8 py-12" style={{ background: 'var(--maroon)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-widest uppercase mb-2 opacity-70"
            style={{ color: 'var(--gold-light)' }}>{navSymbol} Spiritual Learning</div>
          <h1 className="font-serif text-5xl" style={{ color: '#FFF8EE' }}>
            Cultural & Religious Education
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="px-8 py-10" style={{ background: 'var(--saffron-pale)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationIntro.map(item => (
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
            {educationPrograms.map(p => (
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
