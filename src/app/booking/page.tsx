'use client'
import { useState } from 'react'
import Link from 'next/link'
import { priestConfig } from '@/config/priest.config'

const { booking, navSymbol, site, contact } = priestConfig
const { categories, timeSlots, traditions, languages, advanceBookingDays, approvalRequired, approvalHours, suggestedDakshina } = booking

const daysInMonth = 31
const startDay = 3
const bookedDays = [4, 5, 11, 14, 18, 23, 26]
const bookedSlots = ['6:00 AM', '7:30 AM', '7:00 PM']

type Step = 1 | 2 | 3 | 4 | 5

export default function BookingPage() {
  const [step, setStep] = useState<Step>(1)
  const [loginType, setLoginType] = useState<'guest' | 'login'>('guest')
  const [selectedCat, setSelectedCat] = useState(0)
  const [selectedCeremony, setSelectedCeremony] = useState(categories[0].ceremonies[0])
  const [location, setLocation] = useState<'home' | 'business' | 'temple'>('home')
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [paymentType, setPaymentType] = useState<'online' | 'inperson'>('online')
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '', tradition: '', language: languages[0], notes: ''
  })

  const locationLabel = (loc: 'home' | 'business' | 'temple') =>
    loc === 'home' ? 'At your home' : loc === 'business' ? 'At your business' : 'At the temple'

  const steps = ['Sign in', 'Ceremony', 'Date & Time', 'Your Details', 'Confirmation']
  const isBooked = (day: number) => bookedDays.includes(day)
  const isPast = (day: number) => day <= 1

  return (
    <main>

      {/* Page header */}
      <div className="px-8 py-10" style={{ background: 'var(--maroon)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-xs tracking-widest uppercase mb-2 opacity-70"
            style={{ color: 'var(--gold-light)' }}>{navSymbol} Schedule a Ceremony</div>
          <h1 className="font-serif text-4xl" style={{ color: '#FFF8EE' }}>Book a Pooja</h1>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-8 py-4 bg-white" style={{ borderBottom: '1px solid rgba(180,120,40,0.2)' }}>
        <div className="max-w-4xl mx-auto flex items-center gap-0">
          {steps.map((s, i) => {
            const n = i + 1
            const isDone = n < step
            const isActive = n === step
            return (
              <div key={s} className="flex items-center flex-1">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                    style={{
                      background: isDone ? '#2E7D32' : isActive ? 'var(--saffron)' : '#F0E8DC',
                      color: isDone || isActive ? 'white' : 'var(--muted)'
                    }}>
                    {isDone ? '✓' : n}
                  </div>
                  <span className="text-xs hidden sm:block"
                    style={{ color: isActive ? 'var(--saffron)' : isDone ? '#2E7D32' : 'var(--muted)', fontWeight: isActive ? '500' : '400' }}>
                    {s}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-px mx-2" style={{ background: 'rgba(180,120,40,0.2)' }} />
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="px-8 py-10" style={{ background: '#FAF6F0' }}>
        <div className="max-w-4xl mx-auto">

          {/* ── STEP 1: Sign in ── */}
          {step === 1 && (
            <div>
              <h2 className="font-serif text-2xl mb-1" style={{ color: 'var(--maroon)' }}>
                Sign in or continue as guest
              </h2>
              <p className="text-sm font-light mb-6" style={{ color: 'var(--muted)' }}>
                Logged-in users can track bookings and payment history.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { type: 'guest' as const, title: 'Continue as guest', desc: "No account needed. Enter your contact details on the next step. You'll receive updates by email and phone." },
                  { type: 'login' as const, title: 'Sign in / Register', desc: 'Access your booking history, saved addresses, and faster checkout. Create a free account in seconds.' },
                ].map(opt => (
                  <div key={opt.type}
                    onClick={() => setLoginType(opt.type)}
                    className="p-5 rounded cursor-pointer"
                    style={{
                      border: `1px solid ${loginType === opt.type ? 'var(--saffron)' : 'rgba(180,120,40,0.2)'}`,
                      background: loginType === opt.type ? 'var(--saffron-pale)' : 'white'
                    }}>
                    <div className="text-sm font-medium mb-2" style={{ color: 'var(--maroon)' }}>{opt.title}</div>
                    <div className="text-sm font-light leading-relaxed" style={{ color: 'var(--muted)' }}>{opt.desc}</div>
                  </div>
                ))}
              </div>
              {loginType === 'login' && (
                <div className="p-5 rounded mb-6" style={{ background: 'white', border: '1px solid rgba(180,120,40,0.2)', maxWidth: '400px' }}>
                  <div className="text-sm font-medium mb-4" style={{ color: 'var(--brown)' }}>Sign in</div>
                  {['Email', 'Password'].map(field => (
                    <div key={field} className="mb-3">
                      <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                        style={{ color: 'var(--brown)' }}>{field}</label>
                      <input type={field === 'Password' ? 'password' : 'email'}
                        placeholder={field === 'Email' ? 'your@email.com' : '••••••••'}
                        className="w-full px-3 py-2 text-sm rounded"
                        style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }} />
                    </div>
                  ))}
                </div>
              )}
              <div className="flex justify-end">
                <button onClick={() => setStep(2)}
                  className="text-xs px-8 py-3 uppercase tracking-wide font-medium"
                  style={{ background: 'var(--saffron)', color: 'white' }}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 2: Ceremony ── */}
          {step === 2 && (
            <div>
              <h2 className="font-serif text-2xl mb-1" style={{ color: 'var(--maroon)' }}>Choose your ceremony</h2>
              <p className="text-sm font-light mb-6" style={{ color: 'var(--muted)' }}>Select a category, pick the ceremony, then choose where it will be held.</p>

              {/* 3-column panel */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', alignItems: 'stretch' }}>

                {/* ── Column 1: Category ── */}
                <div style={{
                  background: 'white',
                  borderLeft: '3px solid #D4600A',
                  borderRadius: '8px',
                  boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'sticky', top: 0,
                    background: 'white',
                    padding: '14px 16px',
                    borderBottom: '1px solid rgba(212,96,10,0.15)',
                    display: 'flex', alignItems: 'center', gap: '10px',
                    zIndex: 1,
                  }}>
                    <div style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: '#D4600A', color: 'white',
                      fontSize: '11px', fontWeight: '700',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>1</div>
                    <span style={{ fontWeight: '700', color: '#2C1A0A', fontSize: '13px', letterSpacing: '0.01em' }}>Select Category</span>
                  </div>
                  <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {categories.map((cat, i) => (
                      <div key={cat.name}
                        onClick={() => { setSelectedCat(i); setSelectedCeremony(cat.ceremonies[0]) }}
                        style={{
                          padding: '9px 12px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          background: selectedCat === i ? '#D4600A' : 'transparent',
                          color: selectedCat === i ? 'white' : '#2C1A0A',
                          fontSize: '13px',
                          fontWeight: selectedCat === i ? '600' : '400',
                        }}>
                        {cat.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Column 2: Ceremony ── */}
                <div style={{
                  background: '#FDF6EC',
                  borderLeft: '3px solid #6B1A1A',
                  borderRadius: '8px',
                  boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'sticky', top: 0,
                    background: '#FDF6EC',
                    padding: '14px 16px',
                    borderBottom: '1px solid rgba(107,26,26,0.15)',
                    display: 'flex', alignItems: 'center', gap: '10px',
                    zIndex: 1,
                  }}>
                    <div style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: '#6B1A1A', color: 'white',
                      fontSize: '11px', fontWeight: '700',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>2</div>
                    <span style={{ fontWeight: '700', color: '#2C1A0A', fontSize: '13px', letterSpacing: '0.01em' }}>Select Ceremony</span>
                  </div>
                  <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '4px', overflowY: 'auto', maxHeight: '340px' }}>
                    {categories[selectedCat].ceremonies.map(cer => (
                      <div key={cer}
                        onClick={() => setSelectedCeremony(cer)}
                        style={{
                          padding: '9px 12px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          background: selectedCeremony === cer ? '#6B1A1A' : 'white',
                          color: selectedCeremony === cer ? 'white' : '#2C1A0A',
                          fontSize: '13px',
                          fontWeight: selectedCeremony === cer ? '600' : '400',
                          border: `1px solid ${selectedCeremony === cer ? '#6B1A1A' : 'rgba(107,26,26,0.1)'}`,
                        }}>
                        {cer}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Column 3: Location ── */}
                <div style={{
                  background: '#F5E6D0',
                  borderLeft: '3px solid #B8860B',
                  borderRadius: '8px',
                  boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'sticky', top: 0,
                    background: '#F5E6D0',
                    padding: '14px 16px',
                    borderBottom: '1px solid rgba(184,134,11,0.2)',
                    display: 'flex', alignItems: 'center', gap: '10px',
                    zIndex: 1,
                  }}>
                    <div style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: '#B8860B', color: 'white',
                      fontSize: '11px', fontWeight: '700',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>3</div>
                    <span style={{ fontWeight: '700', color: '#2C1A0A', fontSize: '13px', letterSpacing: '0.01em' }}>Select Location</span>
                  </div>
                  <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {([
                      { key: 'home' as const, icon: '🏠', title: 'At my home', desc: 'Shastriji comes to your residence' },
                      { key: 'business' as const, icon: '🏢', title: 'At my business', desc: 'Ceremony at your workplace or business' },
                      { key: 'temple' as const, icon: '🛕', title: 'At the temple', desc: 'Join at the local temple' },
                    ]).map(loc => (
                      <div key={loc.key}
                        onClick={() => setLocation(loc.key)}
                        style={{
                          padding: '12px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          background: location === loc.key ? '#B8860B' : 'white',
                          border: `1px solid ${location === loc.key ? '#B8860B' : 'rgba(184,134,11,0.2)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                        }}>
                        <span style={{ fontSize: '20px', lineHeight: 1 }}>{loc.icon}</span>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: '600', color: location === loc.key ? 'white' : '#2C1A0A' }}>
                            {loc.title}
                          </div>
                          <div style={{ fontSize: '11px', marginTop: '2px', color: location === loc.key ? 'rgba(255,255,255,0.8)' : 'var(--muted)' }}>
                            {loc.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="flex justify-between mt-8">
                <button onClick={() => setStep(1)} className="text-xs px-6 py-3 uppercase tracking-wide"
                  style={{ background: 'white', color: 'var(--muted)', border: '1px solid rgba(180,120,40,0.2)' }}>
                  ← Back
                </button>
                <button onClick={() => setStep(3)} className="text-xs px-8 py-3 uppercase tracking-wide font-medium"
                  style={{ background: 'var(--saffron)', color: 'white' }}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: Date & Time ── */}
          {step === 3 && (
            <div>
              <h2 className="font-serif text-2xl mb-1" style={{ color: 'var(--maroon)' }}>Pick a date & time</h2>
              <p className="text-sm font-light mb-6" style={{ color: 'var(--muted)' }}>
                Bookings must be made at least {advanceBookingDays} day in advance.
                {approvalRequired && ' Shastriji will confirm within a few hours.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Calendar */}
                <div className="p-5 rounded bg-white" style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <button className="w-7 h-7 flex items-center justify-center rounded"
                      style={{ border: '1px solid rgba(180,120,40,0.2)', color: 'var(--muted)' }}>‹</button>
                    <span className="font-serif text-lg" style={{ color: 'var(--maroon)' }}>May 2025</span>
                    <button className="w-7 h-7 flex items-center justify-center rounded"
                      style={{ border: '1px solid rgba(180,120,40,0.2)', color: 'var(--muted)' }}>›</button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center mb-1">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                      <div key={d} className="text-xs py-1 font-medium" style={{ color: 'var(--muted)' }}>{d}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {Array.from({ length: startDay }).map((_, i) => <div key={`e${i}`} />)}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1
                      const booked = isBooked(day)
                      const past = isPast(day)
                      const selected = selectedDay === day
                      return (
                        <div key={day}
                          onClick={() => !booked && !past && setSelectedDay(day)}
                          className="text-xs py-1.5 rounded cursor-pointer"
                          style={{
                            background: selected ? 'var(--saffron)' : 'transparent',
                            color: selected ? 'white' : booked || past ? '#CCC' : 'var(--saffron)',
                            fontWeight: !booked && !past ? '500' : '400',
                            cursor: booked || past ? 'default' : 'pointer',
                            textDecoration: booked ? 'line-through' : 'none'
                          }}>
                          {day}
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex gap-4 mt-3">
                    {[
                      { color: 'var(--saffron)', label: 'Available' },
                      { color: '#CCC', label: 'Unavailable' },
                    ].map(l => (
                      <div key={l.label} className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                        <span className="text-xs" style={{ color: 'var(--muted)' }}>{l.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Time slots */}
                  <div className="p-5 rounded bg-white" style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
                    <div className="text-xs font-medium tracking-widest uppercase mb-3"
                      style={{ color: 'var(--brown)' }}>
                      {selectedDay ? `Time slots — May ${selectedDay}` : 'Select a date first'}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map(slot => {
                        const taken = bookedSlots.includes(slot)
                        const sel = selectedSlot === slot
                        return (
                          <div key={slot}
                            onClick={() => !taken && selectedDay && setSelectedSlot(slot)}
                            className="py-2 text-xs text-center rounded"
                            style={{
                              border: `1px solid ${sel ? 'var(--saffron)' : taken ? 'rgba(180,120,40,0.1)' : 'rgba(180,120,40,0.3)'}`,
                              background: sel ? 'var(--saffron)' : 'white',
                              color: sel ? 'white' : taken ? '#CCC' : 'var(--saffron)',
                              cursor: taken || !selectedDay ? 'default' : 'pointer',
                              textDecoration: taken ? 'line-through' : 'none'
                            }}>
                            {slot}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="p-5 rounded bg-white" style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
                    <div className="text-xs font-medium tracking-widest uppercase mb-3"
                      style={{ color: 'var(--brown)' }}>Booking summary</div>
                    {[
                      { label: 'Ceremony', value: selectedCeremony },
                      { label: 'Category', value: categories[selectedCat].name },
                      { label: 'Location', value: locationLabel(location) },
                      { label: 'Date', value: selectedDay ? `May ${selectedDay}, 2025` : '—' },
                      { label: 'Time', value: selectedSlot || '—' },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between py-1.5"
                        style={{ borderBottom: '1px solid rgba(180,120,40,0.1)' }}>
                        <span className="text-xs" style={{ color: 'var(--muted)' }}>{row.label}</span>
                        <span className="text-xs font-medium" style={{ color: '#2C1A0A' }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button onClick={() => setStep(2)} className="text-xs px-6 py-3 uppercase tracking-wide"
                  style={{ background: 'white', color: 'var(--muted)', border: '1px solid rgba(180,120,40,0.2)' }}>
                  ← Back
                </button>
                <button
                  onClick={() => selectedDay && selectedSlot && setStep(4)}
                  className="text-xs px-8 py-3 uppercase tracking-wide font-medium"
                  style={{
                    background: selectedDay && selectedSlot ? 'var(--saffron)' : '#DDD',
                    color: 'white',
                    cursor: selectedDay && selectedSlot ? 'pointer' : 'default'
                  }}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 4: Details ── */}
          {step === 4 && (
            <div>
              <h2 className="font-serif text-2xl mb-1" style={{ color: 'var(--maroon)' }}>
                Your details & payment preference
              </h2>
              <p className="text-sm font-light mb-6" style={{ color: 'var(--muted)' }}>
                Tell Shastriji about yourself and how you'd like to pay.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded bg-white" style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
                  <div className="text-xs font-medium tracking-widest uppercase mb-4"
                    style={{ color: 'var(--brown)' }}>Contact information</div>
                  <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-3">
                      {['firstName', 'lastName'].map(field => (
                        <div key={field}>
                          <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                            style={{ color: 'var(--brown)' }}>
                            {field === 'firstName' ? 'First name' : 'Last name'}
                          </label>
                          <input type="text"
                            placeholder={field === 'firstName' ? 'Rajesh' : 'Sharma'}
                            value={form[field as keyof typeof form]}
                            onChange={e => setForm({ ...form, [field]: e.target.value })}
                            className="w-full px-3 py-2 text-sm rounded"
                            style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }} />
                        </div>
                      ))}
                    </div>
                    {[
                      { field: 'email', label: 'Email address', type: 'email', placeholder: 'your@email.com' },
                      { field: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: '(xxx) xxx-xxxx' },
                      { field: 'address', label: 'Address for ceremony', type: 'text', placeholder: 'Street address, city, TX' },
                    ].map(f => (
                      <div key={f.field}>
                        <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                          style={{ color: 'var(--brown)' }}>{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder}
                          value={form[f.field as keyof typeof form]}
                          onChange={e => setForm({ ...form, [f.field]: e.target.value })}
                          className="w-full px-3 py-2 text-sm rounded"
                          style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }} />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                        style={{ color: 'var(--brown)' }}>Regional tradition</label>
                      <select value={form.tradition}
                        onChange={e => setForm({ ...form, tradition: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded"
                        style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }}>
                        <option value="">Select if applicable</option>
                        {traditions.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                        style={{ color: 'var(--brown)' }}>Language preference</label>
                      <select value={form.language}
                        onChange={e => setForm({ ...form, language: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded"
                        style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }}>
                        {languages.map(l => <option key={l}>{l}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                        style={{ color: 'var(--brown)' }}>Special notes</label>
                      <textarea rows={3} placeholder="Any special requirements, family members to be named, muhurat preferences..."
                        value={form.notes}
                        onChange={e => setForm({ ...form, notes: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded resize-none"
                        style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Payment */}
                  <div className="p-5 rounded bg-white" style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
                    <div className="text-xs font-medium tracking-widest uppercase mb-3"
                      style={{ color: 'var(--brown)' }}>Payment preference</div>
                    {approvalRequired && (
                      <div className="flex items-start gap-2 p-3 rounded mb-4 text-xs"
                        style={{ background: '#FFF8E1', border: '1px solid #FFD54F', color: '#7A5C00' }}>
                        ⚠️ Payment is only charged after Shastriji approves your booking.
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { type: 'online' as const, title: 'Pay online', desc: 'Card / Apple Pay after approval via Stripe.' },
                        { type: 'inperson' as const, title: 'Pay in person', desc: 'Cash or check on the day of ceremony.' },
                      ].map(opt => (
                        <div key={opt.type} onClick={() => setPaymentType(opt.type)}
                          className="p-3 rounded cursor-pointer"
                          style={{
                            border: `1px solid ${paymentType === opt.type ? 'var(--saffron)' : 'rgba(180,120,40,0.2)'}`,
                            background: paymentType === opt.type ? 'var(--saffron-light)' : 'var(--saffron-pale)'
                          }}>
                          <div className="text-xs font-medium mb-1" style={{ color: 'var(--brown)' }}>{opt.title}</div>
                          <div className="text-xs font-light" style={{ color: 'var(--muted)' }}>{opt.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order summary */}
                  <div className="p-5 rounded bg-white" style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
                    <div className="text-xs font-medium tracking-widest uppercase mb-3"
                      style={{ color: 'var(--brown)' }}>Order summary</div>
                    {[
                      { label: 'Ceremony', value: selectedCeremony },
                      { label: 'Date & time', value: `May ${selectedDay}, ${selectedSlot}` },
                      { label: 'Location', value: locationLabel(location) },
                      { label: 'Service fee', value: 'TBD by Shastriji' },
                      { label: 'Dakshina (suggested)', value: suggestedDakshina },
                    ].map((row, i, arr) => (
                      <div key={row.label} className="flex justify-between py-1.5 text-xs"
                        style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(180,120,40,0.1)' : 'none' }}>
                        <span style={{ color: 'var(--muted)' }}>{row.label}</span>
                        <span style={{ color: '#2C1A0A', fontWeight: i === arr.length - 1 ? '500' : '400' }}>{row.value}</span>
                      </div>
                    ))}
                    <div className="text-xs mt-3 font-light" style={{ color: 'var(--muted)' }}>
                      Final pricing confirmed by Shastriji upon approval.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button onClick={() => setStep(3)} className="text-xs px-6 py-3 uppercase tracking-wide"
                  style={{ background: 'white', color: 'var(--muted)', border: '1px solid rgba(180,120,40,0.2)' }}>
                  ← Back
                </button>
                <button onClick={() => setStep(5)}
                  className="text-xs px-8 py-3 uppercase tracking-wide font-medium"
                  style={{ background: 'var(--saffron)', color: 'white' }}>
                  Submit Booking Request →
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 5: Confirmation ── */}
          {step === 5 && (
            <div className="max-w-lg mx-auto text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: '#FFF3E0', border: '2px solid var(--saffron)' }}>
                <span style={{ fontSize: '28px' }}>🙏</span>
              </div>
              <h2 className="font-serif text-3xl mb-2" style={{ color: 'var(--maroon)' }}>
                Request Submitted!
              </h2>
              <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
                Your booking request has been sent to Shastriji. He will personally review and
                confirm within {approvalHours} hours. You'll receive a WhatsApp message and email once approved.
              </p>
              <div className="p-5 rounded text-left mb-5"
                style={{ background: 'var(--saffron-pale)', border: '1px solid rgba(180,120,40,0.2)' }}>
                {[
                  { label: 'Booking ref', value: `#${site.bookingRefPrefix}-2025-${Math.floor(1000 + Math.random() * 9000)}` },
                  { label: 'Ceremony', value: selectedCeremony },
                  { label: 'Date & time', value: `May ${selectedDay}, 2025 · ${selectedSlot}` },
                  { label: 'Location', value: locationLabel(location) },
                  { label: 'Payment', value: paymentType === 'online' ? 'Online (after approval)' : 'In person on the day' },
                  { label: 'Status', value: "⏳ Awaiting Shastriji's approval" },
                ].map(row => (
                  <div key={row.label} className="flex justify-between py-1.5 text-sm"
                    style={{ borderBottom: '1px solid rgba(180,120,40,0.1)' }}>
                    <span style={{ color: 'var(--muted)' }}>{row.label}</span>
                    <span style={{ color: '#2C1A0A', fontWeight: '500' }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs font-light mb-5" style={{ color: 'var(--muted)' }}>
                Confirmation sent to your email and WhatsApp. If you don't hear back within {approvalHours} hours,
                call <strong style={{ color: 'var(--brown)' }}>{contact.phone}</strong>.
              </p>
              <Link href="/"
                className="inline-block w-full py-3 text-xs uppercase tracking-wide font-medium text-center"
                style={{ background: 'var(--saffron)', color: 'white' }}>
                Back to Home
              </Link>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
