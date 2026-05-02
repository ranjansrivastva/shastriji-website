'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [tab, setTab] = useState<'signin' | 'register'>('signin')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', password: '', phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen py-16 px-4"
      style={{ background: 'var(--saffron-pale)' }}>
      <div className="max-w-md mx-auto">

        <div className="text-center mb-8">
          <div className="text-4xl mb-2">ॐ</div>
          <h1 className="font-serif text-3xl mb-1" style={{ color: 'var(--maroon)' }}>
            {tab === 'signin' ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-sm font-light" style={{ color: 'var(--muted)' }}>
            {tab === 'signin'
              ? 'Sign in to manage your bookings and payments'
              : 'Register to book ceremonies and track your history'}
          </p>
        </div>

        <div className="bg-white rounded-lg p-8"
          style={{ border: '1px solid rgba(180,120,40,0.2)' }}>

          {/* Tabs */}
          <div className="flex rounded overflow-hidden mb-6"
            style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
            {(['signin', 'register'] as const).map(t => (
              <button key={t} onClick={() => { setTab(t); setSubmitted(false) }}
                className="flex-1 py-2.5 text-sm capitalize"
                style={{
                  background: tab === t ? 'var(--maroon)' : 'var(--saffron-pale)',
                  color: tab === t ? 'white' : 'var(--muted)'
                }}>
                {t === 'signin' ? 'Sign In' : 'Register'}
              </button>
            ))}
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-3">🙏</div>
              <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--maroon)' }}>
                {tab === 'signin' ? 'Signed in!' : 'Account created!'}
              </h3>
              <p className="text-sm font-light mb-4" style={{ color: 'var(--muted)' }}>
                {tab === 'signin'
                  ? 'Welcome back. Redirecting to your dashboard...'
                  : 'Your account is ready. You can now book ceremonies.'}
              </p>
              <Link href="/booking"
                className="inline-block text-xs px-6 py-2.5 uppercase tracking-wide font-medium"
                style={{ background: 'var(--saffron)', color: 'white' }}>
                Book a Pooja →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {tab === 'register' && (
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                    style={{ color: 'var(--brown)' }}>Full Name</label>
                  <input type="text" required placeholder="Your full name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded"
                    style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }} />
                </div>
              )}
              <div>
                <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                  style={{ color: 'var(--brown)' }}>Email</label>
                <input type="email" required placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm rounded"
                  style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }} />
              </div>
              {tab === 'register' && (
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                    style={{ color: 'var(--brown)' }}>Phone / WhatsApp</label>
                  <input type="tel" placeholder="(xxx) xxx-xxxx"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded"
                    style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }} />
                </div>
              )}
              <div>
                <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                  style={{ color: 'var(--brown)' }}>Password</label>
                <input type="password" required placeholder="••••••••"
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm rounded"
                  style={{ border: '1px solid rgba(180,120,40,0.3)', background: 'var(--saffron-pale)', outline: 'none' }} />
              </div>

              {tab === 'signin' && (
                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2 text-xs cursor-pointer"
                    style={{ color: 'var(--muted)' }}>
                    <input type="checkbox" /> Remember me
                  </label>
                  <span className="text-xs cursor-pointer" style={{ color: 'var(--saffron)' }}>
                    Forgot password?
                  </span>
                </div>
              )}

              <button type="submit"
                className="w-full py-3 text-xs uppercase tracking-wide font-medium mt-1"
                style={{ background: 'var(--saffron)', color: 'white' }}>
                {tab === 'signin' ? 'Sign In →' : 'Create Account →'}
              </button>

              <div className="text-center text-xs" style={{ color: 'var(--muted)' }}>— or continue with —</div>
              <div className="grid grid-cols-2 gap-3">
                {['Google', 'Facebook'].map(provider => (
                  <button key={provider} type="button"
                    className="py-2.5 text-xs rounded"
                    style={{ border: '1px solid rgba(180,120,40,0.2)', background: 'white', color: 'var(--muted)' }}>
                    {provider}
                  </button>
                ))}
              </div>
            </form>
          )}
        </div>

        <p className="text-center text-xs mt-4 font-light" style={{ color: 'var(--muted)' }}>
          {tab === 'signin' ? "Don't have an account? " : 'Already have an account? '}
          <button onClick={() => setTab(tab === 'signin' ? 'register' : 'signin')}
            className="font-medium" style={{ color: 'var(--saffron)' }}>
            {tab === 'signin' ? 'Register here' : 'Sign in'}
          </button>
        </p>
      </div>
    </main>
  )
}