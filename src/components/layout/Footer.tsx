import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer style={{ background: 'var(--maroon)' }} className="px-8 py-10 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-serif text-lg mb-2" style={{ color: 'var(--gold-light)' }}>
              ✦ Gopal Chandra Shastri Jee
            </div>
            <p className="text-xs font-light leading-relaxed" style={{ color: 'rgba(255,240,200,0.5)' }}>
              Vedic Pandit & Katha Vachak serving the Hindu community of Dallas–Fort Worth and Houston with authentic rituals and spiritual education.
            </p>
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(255,240,200,0.45)' }}>Services</div>
            {['Temple Pooja', 'Home Pooja', 'Life Events', 'Katha Vachan', 'Education'].map(s => (
              <div key={s} className="text-xs mb-1.5" style={{ color: 'rgba(255,240,200,0.65)' }}>{s}</div>
            ))}
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(255,240,200,0.45)' }}>Info</div>
            {[
              { label: 'About Shastriji', href: '/about' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'Testimonials', href: '/#testimonials' },
              { label: 'Contact', href: '/contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="block text-xs mb-1.5" style={{ color: 'rgba(255,240,200,0.65)' }}>
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(255,240,200,0.45)' }}>Contact</div>
            <div className="text-xs mb-1.5" style={{ color: 'rgba(255,240,200,0.65)' }}>608 575 9510</div>
            <div className="text-xs mb-1.5" style={{ color: 'rgba(255,240,200,0.65)' }}>info@gopalshastriji.com</div>
            <div className="text-xs mb-1.5" style={{ color: 'rgba(255,240,200,0.65)' }}>Dallas–Fort Worth, TX</div>
            <div className="text-xs" style={{ color: 'rgba(255,240,200,0.65)' }}>Houston, TX</div>
          </div>
        </div>
      </footer>
      <div style={{ background: '#3A0000' }} className="px-8 py-3 flex justify-between items-center">
        <span className="text-xs" style={{ color: 'rgba(255,240,200,0.35)' }}>© 2025 Gopal Chandra Shastri Jee. All rights reserved.</span>
        <span className="text-xs" style={{ color: 'rgba(255,240,200,0.35)' }}>Privacy · Terms</span>
      </div>
    </>
  )
}