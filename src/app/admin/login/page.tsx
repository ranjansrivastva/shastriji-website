'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { priestConfig } from '@/config/priest.config'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === priestConfig.admin.password) {
      localStorage.setItem('vedicweb_admin', '1')
      router.push('/admin/dashboard')
    } else {
      setError('Incorrect password.')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'var(--saffron-pale)' }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-4xl mb-3" style={{ color: 'var(--saffron)' }}>⚙</div>
          <h1 className="font-serif text-3xl mb-1" style={{ color: 'var(--maroon)' }}>Admin Portal</h1>
          <p className="text-sm font-light" style={{ color: 'var(--muted)' }}>
            {priestConfig.name}
          </p>
        </div>

        <div className="bg-white rounded-lg p-8" style={{ border: '1px solid rgba(180,120,40,0.2)' }}>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-medium tracking-widest uppercase mb-1.5"
                style={{ color: 'var(--brown)' }}>Admin Password</label>
              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={e => { setPassword(e.target.value); setError('') }}
                className="w-full px-3 py-2.5 text-sm rounded"
                style={{ border: `1px solid ${error ? '#dc2626' : 'rgba(180,120,40,0.3)'}`, background: 'var(--saffron-pale)', outline: 'none' }}
                autoFocus
              />
              {error && <p className="text-xs mt-1" style={{ color: '#dc2626' }}>{error}</p>}
            </div>
            <button type="submit"
              className="w-full py-3 text-xs uppercase tracking-wide font-medium"
              style={{ background: 'var(--maroon)', color: 'white' }}>
              Sign In →
            </button>
          </form>
        </div>

        <p className="text-center text-xs mt-4" style={{ color: 'var(--muted)' }}>
          <a href="/" style={{ color: 'var(--saffron)' }}>← Back to website</a>
        </p>
      </div>
    </main>
  )
}
