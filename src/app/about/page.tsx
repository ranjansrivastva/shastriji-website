import Image from 'next/image'
import Link from 'next/link'

const timeline = [
  {
    year: 'Birth',
    title: 'Born in Odisha, India',
    text: 'Raised in a deeply spiritual environment in Odisha, Shastriji developed an early love of Sanskrit, scripture, and ritual from his family and community.',
  },
  {
    year: 'Education',
    title: 'Sampurnanand Sanskrit Vishwavidyalaya, Kashi',
    text: 'Completed his Vedic education at one of India\'s oldest and most respected Sanskrit universities, specialising in Karmakanda, Katha Vachan, and Vedic ritual procedure.',
  },
  {
    year: 'India',
    title: 'Head Priest — Temples across India',
    text: 'Served as head priest at temples across India, conducting major Mahotsavams, Katha events, Havans, and thousands of family Samskaras.',
  },
  {
    year: 'USA',
    title: 'Head Priest — Dallas–Fort Worth & Houston',
    text: 'Brought his Vedic expertise to North America, serving as head priest at temples in the DFW and Houston areas, serving families of all regional Indian traditions.',
  },
]

const languages = ['Hindi', 'Odia', 'Telugu', 'Bengali', 'Sanskrit', 'English', '+ more']

const specialisations = [
  { title: 'Katha Vachan', desc: 'Bhagwat Katha, Ram Katha, Shiv Maha Puran, Devi Bhagwat, and more' },
  { title: 'Vedic Samskaras', desc: 'All 16 life ceremonies from birth to death, North & South Indian style' },
  { title: 'Havan & Homam', desc: 'Navagraha, Ganesh, Mrityunjaya, Sudarshana, Vastu & more' },
]

export default function AboutPage() {
  return (
    <main>

      {/* Page header */}
      <div className="px-8 py-12" style={{ background: 'var(--maroon)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-widest uppercase mb-2 opacity-70"
            style={{ color: 'var(--gold-light)' }}>✦ His Story</div>
          <h1 className="font-serif text-5xl" style={{ color: '#FFF8EE' }}>
            About Gopal Chandra Shastri Jee
          </h1>
        </div>
      </div>

      {/* Main content */}
      <section className="px-8 py-14" style={{ background: 'white' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left — photo + languages */}
          <div>
            <div className="relative rounded overflow-hidden mb-5"
              style={{ height: '380px', border: '1px solid rgba(180,120,40,0.2)' }}>
              <Image
                src="/images/shastriji.jpeg"
                alt="Gopal Chandra Shastri Jee"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-4 rounded" style={{
              background: 'var(--saffron-pale)',
              border: '1px solid rgba(180,120,40,0.2)'
            }}>
              <div className="text-xs font-medium tracking-widest uppercase mb-3"
                style={{ color: 'var(--brown)' }}>Languages</div>
              <div className="flex flex-wrap gap-2">
                {languages.map(l => (
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

          {/* Right — bio + timeline */}
          <div className="md:col-span-2">
            <div className="w-12 h-0.5 mb-2" style={{ background: 'var(--saffron)' }} />
            <h2 className="font-serif text-3xl mb-1" style={{ color: 'var(--maroon)' }}>
              A Life in Service to Dharma
            </h2>
            <p className="text-sm font-light leading-relaxed mb-3"
              style={{ color: 'var(--muted)' }}>
              Born and raised in the spiritually rich land of Odisha, Gopal Chandra Shastri Jee
              was immersed in Vedic culture from his earliest years. His formal education at the
              renowned Sampurnanand Sanskrit Vishwavidyalaya in Kashi — one of India's most
              prestigious centres of Sanskrit and Vedic learning — gave him a deep mastery of
              Karmakanda, Katha Vachan, and the full spectrum of Hindu ritual traditions.
            </p>
            <p className="text-sm font-light leading-relaxed mb-8"
              style={{ color: 'var(--muted)' }}>
              With over two decades of service as Head Priest at temples in India, the
              Dallas–Fort Worth area, and Houston, Shastriji has guided thousands of families
              through life's most sacred milestones — from the joy of a child's first
              rice-feeding to the solemnity of last rites, and every ceremony in between.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-0 rounded overflow-hidden mb-8"
              style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
              {[
                { num: '20+', label: 'Years of service' },
                { num: '6+', label: 'Languages' },
                { num: 'All', label: 'Indian traditions' },
              ].map((s, i) => (
                <div key={i} className="py-5 text-center bg-white"
                  style={{ borderRight: i < 2 ? '1px solid rgba(180,120,40,0.2)' : 'none' }}>
                  <div className="font-serif text-3xl" style={{ color: 'var(--saffron)' }}>{s.num}</div>
                  <div className="text-xs font-light mt-1" style={{ color: 'var(--muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div>
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-4 mb-5">
                  <div className="font-serif text-sm font-semibold pt-0.5 min-w-16"
                    style={{ color: 'var(--saffron)' }}>{t.year}</div>
                  <div className="pl-4" style={{ borderLeft: '1px solid rgba(180,120,40,0.2)' }}>
                    <div className="text-sm font-medium mb-1" style={{ color: 'var(--maroon)' }}>
                      {t.title}
                    </div>
                    <div className="text-sm font-light leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {t.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Specialisations */}
            <div className="mt-6">
              <div className="text-xs font-medium tracking-widest uppercase mb-4"
                style={{ color: 'var(--brown)' }}>Specialisations</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {specialisations.map(s => (
                  <div key={s.title} className="p-4 rounded"
                    style={{
                      background: 'var(--saffron-pale)',
                      border: '1px solid rgba(180,120,40,0.2)'
                    }}>
                    <div className="text-sm font-medium mb-1" style={{ color: 'var(--maroon)' }}>
                      {s.title}
                    </div>
                    <div className="text-xs font-light leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {s.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-8 flex items-center justify-between flex-wrap gap-4"
        style={{ background: 'var(--maroon)' }}>
        <div>
          <div className="font-serif text-2xl mb-1" style={{ color: '#FFF8EE' }}>
            Book a ceremony with Shastriji
          </div>
          <div className="text-sm font-light" style={{ color: 'rgba(255,240,200,0.55)' }}>
            Serving DFW and Houston · 608 575 9510
          </div>
        </div>
        <Link href="/booking"
          className="text-xs px-7 py-3 uppercase tracking-wide font-medium"
          style={{ background: 'var(--saffron)', color: 'white' }}>
          Book a Pooja →
        </Link>
      </section>

    </main>
  )
}