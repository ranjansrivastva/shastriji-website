import Link from 'next/link'
import { priestConfig } from '@/config/priest.config'

const { name, navSymbol, site, footerServices, footerInfoLinks, contact } = priestConfig

export default function Footer() {
  return (
    <>
      <footer style={{ background: 'var(--maroon)' }} className="px-8 py-10 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-serif text-lg mb-2" style={{ color: 'var(--gold-light)' }}>
              {navSymbol} {name}
            </div>
            <p className="text-xs font-light leading-relaxed" style={{ color: 'rgba(255,240,200,0.5)' }}>
              {site.footerTagline}
            </p>
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(255,240,200,0.45)' }}>Services</div>
            {footerServices.map(s => (
              <div key={s} className="text-xs mb-1.5" style={{ color: 'rgba(255,240,200,0.65)' }}>{s}</div>
            ))}
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(255,240,200,0.45)' }}>Info</div>
            {footerInfoLinks.map(l => (
              <Link key={l.href} href={l.href} className="block text-xs mb-1.5" style={{ color: 'rgba(255,240,200,0.65)' }}>
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(255,240,200,0.45)' }}>Contact</div>
            <div className="text-xs mb-1.5" style={{ color: 'rgba(255,240,200,0.65)' }}>{contact.phone}</div>
            <div className="text-xs mb-1.5" style={{ color: 'rgba(255,240,200,0.65)' }}>{contact.email}</div>
            <div className="text-xs mb-1.5" style={{ color: 'rgba(255,240,200,0.65)' }}>{contact.location}</div>
            <div className="text-xs" style={{ color: 'rgba(255,240,200,0.65)' }}>{contact.locationSecondary}</div>
          </div>
        </div>
      </footer>
      <div style={{ background: '#3A0000' }} className="px-8 py-3 flex justify-between items-center">
        <span className="text-xs" style={{ color: 'rgba(255,240,200,0.35)' }}>
          © {site.copyrightYear} {name}. All rights reserved.
        </span>
        <span className="text-xs" style={{ color: 'rgba(255,240,200,0.35)' }}>Privacy · Terms</span>
      </div>
    </>
  )
}
