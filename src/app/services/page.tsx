import Link from 'next/link'

const categories = [
  {
    title: 'Regular Pooja',
    items: [
      { name: 'Ganesh Pooja', desc: 'Morning / Evening' },
      { name: 'Satyanarayan Katha', desc: 'Monthly & on demand' },
      { name: 'Lakshmi Pooja', desc: 'Fridays & Deepawali' },
      { name: 'Rudrabhishek', desc: 'Monday Shravan' },
      { name: 'Navagraha Pooja', desc: 'Planetary remedy' },
      { name: 'Durga Saptashati', desc: 'Navaratri & monthly' },
      { name: 'Vishnu Sahasranama', desc: 'Ekadashi' },
      { name: 'Sundarkand Path', desc: 'Tuesday & Saturday' },
    ],
  },
  {
    title: 'Havan & Homam',
    items: [
      { name: 'Ganesh Havan', desc: 'Remove obstacles' },
      { name: 'Navagraha Homa', desc: 'Planetary remedy' },
      { name: 'Mrityunjaya Homa', desc: 'Health & longevity' },
      { name: 'Vastu Havan', desc: 'New home / office' },
      { name: 'Sudarshana Homa', desc: 'Protection' },
      { name: 'Ayush Homa', desc: 'Long life & health' },
    ],
  },
  {
    title: 'Life Event Samskaras',
    items: [
      { name: 'Jatakarma', desc: 'Birth ceremony' },
      { name: 'Namakaran', desc: 'Naming ceremony' },
      { name: 'Annaprashan', desc: 'First solid food' },
      { name: 'Karnavedha', desc: 'Ear piercing' },
      { name: 'Nath / Nasavedha', desc: 'Nose piercing' },
      { name: 'Mundan / Chudakarma', desc: 'First hair removal' },
      { name: 'Upanayana', desc: 'Sacred thread ceremony' },
      { name: 'Vivah / Wedding', desc: 'Marriage ceremony' },
      { name: 'Antim Sanskar', desc: 'Last rites' },
    ],
  },
  {
    title: 'Katha Vachan',
    items: [
      { name: 'Bhagwat Katha', desc: '1 day or 7 days' },
      { name: 'Ram Katha', desc: '1 day or multi-day' },
      { name: 'Shiv Maha Puran', desc: 'Per day' },
      { name: 'Devi Bhagwat', desc: 'Navaratri special' },
      { name: 'Sundarkand Path', desc: 'Group recitation' },
    ],
  },
  {
    title: 'Business & Vastu',
    items: [
      { name: 'Griha Pravesh', desc: 'House warming' },
      { name: 'Vastu Shanti', desc: 'Property blessing' },
      { name: 'Business Opening Pooja', desc: 'New business' },
      { name: 'Bhoomi Pujan', desc: 'Groundbreaking' },
      { name: 'Satyanarayan Katha', desc: 'Business milestone' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main>

      {/* Page header */}
      <div className="px-8 py-12" style={{ background: 'var(--maroon)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-widest uppercase mb-2 opacity-70"
            style={{ color: 'var(--gold-light)' }}>
            ✦ What We Offer
          </div>
          <h1 className="font-serif text-5xl" style={{ color: '#FFF8EE' }}>Our Sacred Services</h1>
        </div>
      </div>

      {/* Categories */}
      {categories.map((cat, ci) => (
        <section key={cat.title}
          className="px-8 py-12"
          style={{ background: ci % 2 === 0 ? 'white' : 'var(--saffron-pale)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="w-12 h-0.5 mb-2" style={{ background: 'var(--saffron)' }} />
            <h2 className="font-serif text-3xl mb-1" style={{ color: 'var(--maroon)' }}>{cat.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {cat.items.map(item => (
                <div key={item.name} className="p-4 rounded"
                  style={{
                    background: ci % 2 === 0 ? 'var(--saffron-pale)' : 'white',
                    border: '1px solid rgba(180,120,40,0.2)'
                  }}>
                  <div className="text-sm font-medium mb-1" style={{ color: 'var(--brown)' }}>
                    {item.name}
                  </div>
                  <div className="text-xs font-light" style={{ color: 'var(--muted)' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="px-8 py-12 text-center" style={{ background: 'var(--maroon)' }}>
        <h2 className="font-serif text-3xl mb-3" style={{ color: '#FFF8EE' }}>
          Ready to book a ceremony?
        </h2>
        <p className="text-sm font-light mb-6" style={{ color: 'rgba(255,240,200,0.6)' }}>
          Check availability and confirm your pooja in just a few steps.
        </p>
        <Link href="/booking"
          className="inline-block text-xs px-8 py-3 uppercase tracking-wide font-medium"
          style={{ background: 'var(--saffron)', color: 'white' }}>
          Book a Pooja →
        </Link>
      </section>

    </main>
  )
}