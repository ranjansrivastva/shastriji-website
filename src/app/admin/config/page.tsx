'use client'
import { useState } from 'react'
import AdminShell from '@/components/layout/AdminShell'
import { priestConfig } from '@/config/priest.config'

type Section = 'identity' | 'contact' | 'colors' | 'booking' | 'payment' | 'social' | 'admin'

export default function AdminConfigPage() {
  const [activeSection, setActiveSection] = useState<Section>('identity')
  const [saved, setSaved] = useState(false)

  const sections: { id: Section; label: string; icon: string }[] = [
    { id: 'identity', label: 'Identity', icon: '👤' },
    { id: 'contact', label: 'Contact', icon: '📞' },
    { id: 'colors', label: 'Colors', icon: '🎨' },
    { id: 'booking', label: 'Booking', icon: '📅' },
    { id: 'payment', label: 'Payment', icon: '💳' },
    { id: 'social', label: 'Social', icon: '🔗' },
    { id: 'admin', label: 'Admin', icon: '⚙' },
  ]

  const field = (label: string, value: string, key?: string) => (
    <div key={label} className="mb-4">
      <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
        style={{ color: 'var(--brown)' }}>{label}</label>
      <input
        type="text"
        defaultValue={value}
        className="w-full px-3 py-2 text-sm rounded"
        style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }}
        onChange={() => setSaved(false)}
      />
    </div>
  )

  const colorField = (label: string, value: string) => (
    <div key={label} className="mb-4">
      <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
        style={{ color: 'var(--brown)' }}>{label}</label>
      <div className="flex gap-2 items-center">
        <input
          type="color"
          defaultValue={value}
          className="w-10 h-10 rounded cursor-pointer"
          style={{ border: '1px solid rgba(180,120,40,0.3)', padding: '2px' }}
          onChange={() => setSaved(false)}
        />
        <input
          type="text"
          defaultValue={value}
          className="flex-1 px-3 py-2 text-sm rounded font-mono"
          style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }}
          onChange={() => setSaved(false)}
        />
      </div>
    </div>
  )

  const toggle = (label: string, value: boolean) => (
    <div key={label} className="flex items-center justify-between mb-4 py-2"
      style={{ borderBottom: '1px solid rgba(180,120,40,0.1)' }}>
      <label className="text-sm" style={{ color: 'var(--text)' }}>{label}</label>
      <div className="relative inline-flex cursor-pointer" onClick={() => setSaved(false)}>
        <div className="w-11 h-6 rounded-full transition-colors"
          style={{ background: value ? 'var(--saffron)' : '#DDD' }}>
          <div className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform"
            style={{ transform: value ? 'translateX(20px)' : 'none' }} />
        </div>
      </div>
    </div>
  )

  return (
    <AdminShell>
      <div className="px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-serif text-3xl mb-1" style={{ color: 'var(--maroon)' }}>Configuration</h1>
            <p className="text-sm font-light" style={{ color: 'var(--muted)' }}>
              All content is sourced from <code className="text-xs px-1 rounded" style={{ background: 'var(--saffron-pale)' }}>src/config/priest.config.ts</code>.
              Edit that file directly to make permanent changes.
            </p>
          </div>
          <button onClick={() => setSaved(true)}
            className="text-xs px-6 py-2.5 uppercase tracking-wide font-medium"
            style={{ background: saved ? '#2E7D32' : 'var(--saffron)', color: 'white' }}>
            {saved ? '✓ Saved' : 'Save Changes'}
          </button>
        </div>

        <div className="bg-white rounded-lg overflow-hidden" style={{ border: '1px solid rgba(180,120,40,0.15)' }}>
          <div className="flex">
            {/* Section nav */}
            <div className="w-44 flex-shrink-0 border-r" style={{ borderColor: 'rgba(180,120,40,0.15)', background: 'var(--saffron-pale)' }}>
              {sections.map(s => (
                <button key={s.id} onClick={() => setActiveSection(s.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left border-b"
                  style={{
                    borderColor: 'rgba(180,120,40,0.1)',
                    background: activeSection === s.id ? 'white' : 'transparent',
                    color: activeSection === s.id ? 'var(--maroon)' : 'var(--muted)',
                    fontWeight: activeSection === s.id ? '500' : '400',
                    borderLeft: activeSection === s.id ? '2px solid var(--saffron)' : '2px solid transparent',
                  }}>
                  <span>{s.icon}</span> {s.label}
                </button>
              ))}
            </div>

            {/* Section content */}
            <div className="flex-1 px-8 py-6">

              {activeSection === 'identity' && (
                <div>
                  <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--maroon)' }}>Priest Identity</h3>
                  {field('Full Name', priestConfig.name)}
                  {field('Title / Designation', priestConfig.title)}
                  {field('Roles (comma separated)', priestConfig.roles.join(', '))}
                  {field('Hero Tagline', priestConfig.tagline)}
                  {field('Photo Path', priestConfig.photo)}
                  {field('Site Title (SEO)', priestConfig.site.title)}
                  {field('Site Description (SEO)', priestConfig.site.description)}
                  {field('Footer Tagline', priestConfig.site.footerTagline)}
                  {field('Copyright Year', priestConfig.site.copyrightYear)}
                  {field('Booking Ref Prefix', priestConfig.site.bookingRefPrefix)}
                </div>
              )}

              {activeSection === 'contact' && (
                <div>
                  <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--maroon)' }}>Contact Details</h3>
                  {field('Phone Number', priestConfig.contact.phone)}
                  {field('Email Address', priestConfig.contact.email)}
                  {field('Primary Location', priestConfig.contact.location)}
                  {field('Secondary Location', priestConfig.contact.locationSecondary)}
                  {field('Service Areas Display', priestConfig.contact.serviceAreasDisplay)}
                  {field('Availability Hours', priestConfig.contact.availability)}
                  {field('Availability Note', priestConfig.contact.availabilityNote)}
                  {field('Response Time', priestConfig.contact.responseTime)}
                  {toggle('WhatsApp Available', priestConfig.contact.whatsappAvailable)}
                </div>
              )}

              {activeSection === 'colors' && (
                <div>
                  <h3 className="font-serif text-xl mb-1" style={{ color: 'var(--maroon)' }}>Color Theme</h3>
                  <p className="text-xs mb-4 font-light" style={{ color: 'var(--muted)' }}>
                    These colors apply across the entire website instantly.
                  </p>
                  {colorField('Primary (Buttons, Highlights)', priestConfig.colors.primary)}
                  {colorField('Primary Light (Soft Backgrounds)', priestConfig.colors.primaryLight)}
                  {colorField('Primary Pale (Section Backgrounds)', priestConfig.colors.primaryPale)}
                  {colorField('Secondary (Navbar, Footer, Headers)', priestConfig.colors.secondary)}
                  {colorField('Accent / Gold', priestConfig.colors.accent)}
                  {colorField('Accent Light (Gold on Dark)', priestConfig.colors.accentLight)}
                  {colorField('Cream (Body Background)', priestConfig.colors.cream)}
                  {colorField('Brown (Labels)', priestConfig.colors.brown)}
                  {colorField('Text (Body)', priestConfig.colors.text)}
                  {colorField('Muted Text', priestConfig.colors.muted)}
                  {colorField('Hero Background', priestConfig.colors.heroBackground)}
                </div>
              )}

              {activeSection === 'booking' && (
                <div>
                  <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--maroon)' }}>Booking Settings</h3>
                  {field('Advance Booking Days', String(priestConfig.booking.advanceBookingDays))}
                  {field('Approval Window (hours)', String(priestConfig.booking.approvalHours))}
                  {field('Suggested Dakshina', priestConfig.booking.suggestedDakshina)}
                  {toggle('Approval Required', priestConfig.booking.approvalRequired)}
                  <div className="mt-2">
                    <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                      style={{ color: 'var(--brown)' }}>Time Slots (one per line)</label>
                    <textarea rows={5} defaultValue={priestConfig.booking.timeSlots.join('\n')}
                      className="w-full px-3 py-2 text-sm rounded resize-none font-mono"
                      style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }}
                      onChange={() => setSaved(false)} />
                  </div>
                </div>
              )}

              {activeSection === 'payment' && (
                <div>
                  <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--maroon)' }}>Payment Settings</h3>
                  <div className="p-4 rounded mb-5 text-sm"
                    style={{ background: '#FFF8E1', border: '1px solid #FFD54F', color: '#7A5C00' }}>
                    ⚠️ Keep your Stripe secret key in environment variables (.env.local), not in this config.
                  </div>
                  {field('Stripe Publishable Key (pk_...)', priestConfig.payment.stripePublishableKey || '')}
                  {field('Currency', priestConfig.payment.currency)}
                </div>
              )}

              {activeSection === 'social' && (
                <div>
                  <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--maroon)' }}>Social Media</h3>
                  {field('Facebook Page URL', priestConfig.social.facebook)}
                  {field('YouTube Channel URL', priestConfig.social.youtube)}
                  {field('Instagram Profile URL', priestConfig.social.instagram)}
                  {field('WhatsApp Number (digits only)', priestConfig.social.whatsapp)}
                </div>
              )}

              {activeSection === 'admin' && (
                <div>
                  <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--maroon)' }}>Admin Settings</h3>
                  {toggle('Admin Portal Enabled', priestConfig.admin.enabled)}
                  <div className="mt-2">
                    <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                      style={{ color: 'var(--brown)' }}>Admin Password</label>
                    <input type="password" defaultValue={priestConfig.admin.password}
                      className="w-full px-3 py-2 text-sm rounded"
                      style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }}
                      onChange={() => setSaved(false)} />
                    <p className="text-xs mt-1 font-light" style={{ color: 'var(--muted)' }}>
                      Store in an environment variable for production use.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        <div className="mt-5 p-4 rounded text-sm font-light"
          style={{ background: '#FFF8E1', border: '1px solid #FFD54F', color: '#7A5C00' }}>
          ⚠️ This UI previews configuration. To make permanent changes, edit{' '}
          <code className="text-xs">src/config/priest.config.ts</code> directly and redeploy.
          In a production system, connect this form to a database or CMS API.
        </div>
      </div>
    </AdminShell>
  )
}
