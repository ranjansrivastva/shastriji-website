import Image from 'next/image'
import Link from 'next/link'
import { priestConfig } from '@/config/priest.config'

const {
  name, roles, tagline, photo, photoAlt, navSymbol,
  bio, contact, colors, stats, featuredServices, featuredServicesSubtitle, testimonials,
} = priestConfig

export default function Home() {
  return (
    <main>

      {/* ── HERO ── */}
      <section style={{ background: colors.heroBackground }} className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs tracking-widest uppercase mb-4 opacity-75"
              style={{ color: 'var(--gold-light)' }}>
              {navSymbol} {tagline}
            </div>
            <h1 className="font-serif mb-2" style={{
              fontSize: '52px', lineHeight: '1.08', color: '#FFF8EE'
            }}>
              {name.split(' ').slice(0, 2).join(' ')}<br />
              <em style={{ color: 'var(--gold-light)' }}>{name.split(' ').slice(2).join(' ')}</em>
            </h1>
            <div className="text-xs tracking-widest uppercase mb-4"
              style={{ color: 'rgba(255,240,200,0.55)' }}>
              {roles.join(' · ')}
            </div>
            <p className="text-sm font-light leading-relaxed mb-6 max-w-md"
              style={{ color: 'rgba(255,240,200,0.65)' }}>
              {bio.heroText}
            </p>

            {/* Contact bar */}
            <div className="flex gap-5 mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,96,10,0.22)', border: '1px solid rgba(212,96,10,0.35)' }}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M1.5 1.5h2.8l1.2 3.2-1.7.9a7.5 7.5 0 003.6 3.6l.9-1.7 3.2 1.2v2.8a1 1 0 01-1 1A9.5 9.5 0 01.5 2.5a1 1 0 011-1z"
                      fill="rgba(240,208,128,0.75)" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs" style={{ color: 'rgba(255,240,200,0.4)', letterSpacing: '0.08em' }}>
                    PHONE / WHATSAPP
                  </div>
                  <div className="text-sm" style={{ color: 'rgba(255,240,200,0.85)' }}>
                    {contact.phone}
                  </div>
                </div>
              </div>

              <div style={{ width: '1px', background: 'rgba(240,208,128,0.12)' }} className="self-stretch" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,96,10,0.22)', border: '1px solid rgba(212,96,10,0.35)' }}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <rect x="1" y="2.5" width="11" height="8" rx="1"
                      stroke="rgba(240,208,128,0.75)" strokeWidth="1.1" />
                    <path d="M1 3.5l5.5 3.5 5.5-3.5"
                      stroke="rgba(240,208,128,0.75)" strokeWidth="1.1" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs" style={{ color: 'rgba(255,240,200,0.4)', letterSpacing: '0.08em' }}>
                    EMAIL
                  </div>
                  <div className="text-sm" style={{ color: 'rgba(255,240,200,0.85)' }}>
                    {contact.email}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href="/booking"
                className="text-xs px-7 py-3 uppercase tracking-wide font-medium"
                style={{ background: 'var(--saffron)', color: 'white' }}>
                Book a Pooja
              </Link>
              <Link href="/services"
                className="text-xs px-7 py-3 uppercase tracking-wide"
                style={{ color: 'var(--gold-light)', border: '1px solid rgba(240,208,128,0.35)' }}>
                Our Services
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative rounded overflow-hidden"
              style={{ width: '320px', height: '400px', border: '1px solid rgba(240,208,128,0.25)' }}>
              <Image
                src={photo}
                alt={photoAlt}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
                style={{ background: 'rgba(30,5,0,0.72)' }}>
                <div className="font-serif text-base" style={{ color: '#FFF8EE' }}>
                  {name}
                </div>
                <div className="text-xs mt-0.5" style={{
                  color: 'rgba(255,240,200,0.55)', letterSpacing: '0.06em', textTransform: 'uppercase'
                }}>
                  {roles[0]} · {contact.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <div style={{ background: 'var(--maroon)', borderTop: '1px solid rgba(240,208,128,0.1)' }}
        className="px-8 py-3 flex items-center justify-center gap-8 flex-wrap">
        {[
          { icon: '📞', label: contact.phone },
          { icon: '✉️', label: contact.email },
          { icon: '📍', label: contact.serviceAreasDisplay },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm"
            style={{ color: 'rgba(255,240,200,0.72)' }}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* ── FEATURED SERVICES ── */}
      <section className="px-8 py-14" style={{ background: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-0.5 mb-2" style={{ background: 'var(--saffron)' }} />
          <h2 className="font-serif text-4xl mb-1" style={{ color: 'var(--maroon)' }}>Our Services</h2>
          <p className="text-sm font-light mb-8" style={{ color: 'var(--muted)' }}>
            {featuredServicesSubtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredServices.map(s => (
              <div key={s.title} className="p-6 rounded"
                style={{ border: '1px solid var(--border, rgba(180,120,40,0.2))' }}>
                <div className="w-10 h-10 rounded-full mb-3 flex items-center justify-center"
                  style={{ background: 'var(--saffron-light)' }}>
                  <span style={{ color: 'var(--saffron)', fontSize: '18px' }}>ॐ</span>
                </div>
                <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--maroon)' }}>{s.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="px-8 py-10" style={{ background: 'var(--saffron-pale)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0
          border rounded overflow-hidden" style={{ borderColor: 'rgba(180,120,40,0.2)' }}>
          {stats.map((s, i) => (
            <div key={i} className="py-8 text-center bg-white"
              style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(180,120,40,0.2)' : 'none' }}>
              <div className="font-serif text-4xl mb-1" style={{ color: 'var(--saffron)' }}>{s.num}</div>
              <div className="text-xs font-light" style={{ color: 'var(--muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="px-8 py-14" style={{ background: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-0.5 mb-2" style={{ background: 'var(--saffron)' }} />
          <h2 className="font-serif text-4xl mb-1" style={{ color: 'var(--maroon)' }}>What Families Say</h2>
          <p className="text-sm font-light mb-8" style={{ color: 'var(--muted)' }}>
            Blessed moments shared by those we've served
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map(t => (
              <div key={t.name} className="p-6 rounded"
                style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
                <div className="mb-3 tracking-widest" style={{ color: 'var(--gold)', fontSize: '14px' }}>
                  ★★★★★
                </div>
                <p className="font-serif text-base leading-relaxed italic mb-4"
                  style={{ color: 'var(--text)' }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium"
                    style={{ background: 'var(--saffron-light)', color: 'var(--saffron)' }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: 'var(--brown)' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: 'var(--muted)' }}>{t.event}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="px-8 py-6 flex items-center justify-between flex-wrap gap-4"
        style={{ background: 'var(--maroon)' }}>
        <div>
          <div className="font-serif text-2xl mb-1" style={{ color: '#FFF8EE' }}>
            Ready to book a ceremony with Shastriji?
          </div>
          <div className="text-sm font-light" style={{ color: 'rgba(255,240,200,0.55)' }}>
            Call, WhatsApp, or book online — serving {contact.serviceAreasDisplay}.
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm" style={{ color: 'rgba(255,240,200,0.85)' }}>{contact.phone}</div>
            <div className="text-xs" style={{ color: 'rgba(255,240,200,0.4)' }}>Call or WhatsApp</div>
          </div>
          <Link href="/booking"
            className="text-xs px-7 py-3 uppercase tracking-wide font-medium"
            style={{ background: 'var(--saffron)', color: 'white' }}>
            Book a Pooja →
          </Link>
        </div>
      </section>

    </main>
  )
}
