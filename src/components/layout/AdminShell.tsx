'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { priestConfig } from '@/config/priest.config'

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: '◈' },
  { href: '/admin/bookings', label: 'Bookings', icon: '📅' },
  { href: '/admin/pricing', label: 'Pricing', icon: '₹' },
  { href: '/admin/gallery', label: 'Gallery', icon: '🖼' },
  { href: '/admin/testimonials', label: 'Testimonials', icon: '★' },
  { href: '/admin/config', label: 'Configuration', icon: '⚙' },
]

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('vedicweb_admin') !== '1') {
      router.replace('/admin/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('vedicweb_admin')
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen flex" style={{ background: '#F5F0EB' }}>

      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 flex flex-col"
        style={{ background: 'var(--maroon)', minHeight: '100vh' }}>
        <div className="px-5 py-5 border-b" style={{ borderColor: 'rgba(255,240,200,0.1)' }}>
          <div className="font-serif text-sm mb-0.5" style={{ color: 'var(--gold-light)' }}>
            {priestConfig.navSymbol} VedicWeb Admin
          </div>
          <div className="text-xs font-light" style={{ color: 'rgba(255,240,200,0.45)' }}>
            {priestConfig.name}
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          {navItems.map(item => {
            const active = pathname === item.href
            return (
              <Link key={item.href} href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded text-sm"
                style={{
                  background: active ? 'rgba(212,96,10,0.25)' : 'transparent',
                  color: active ? 'var(--gold-light)' : 'rgba(255,240,200,0.65)',
                  borderLeft: active ? '2px solid var(--saffron)' : '2px solid transparent',
                }}>
                <span style={{ fontSize: '13px' }}>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="px-3 py-4 border-t" style={{ borderColor: 'rgba(255,240,200,0.1)' }}>
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded text-xs mb-1"
            style={{ color: 'rgba(255,240,200,0.5)' }}>
            ← Public Site
          </Link>
          <button onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded text-xs text-left"
            style={{ color: 'rgba(255,240,200,0.5)' }}>
            ↩ Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
