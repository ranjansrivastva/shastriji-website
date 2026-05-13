'use client'
import Link from 'next/link'
import { useState } from 'react'
import { priestConfig } from '@/config/priest.config'

const { navLinks, name, navSymbol, admin } = priestConfig

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{ background: 'var(--maroon)' }} className="sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 h-14">
        <Link href="/" className="font-serif text-lg" style={{ color: 'var(--gold-light)' }}>
          {navSymbol} {name}
        </Link>

        <div className="hidden md:flex gap-5">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase transition-colors"
              style={{ color: 'rgba(255,240,200,0.8)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden md:block text-xs px-4 py-2 rounded-sm uppercase tracking-wide font-medium"
            style={{ background: 'var(--saffron)', color: 'white' }}
          >
            Login
          </Link>
          {admin.enabled && (
            <Link
              href="/admin/dashboard"
              className="hidden md:block text-xs px-4 py-2 rounded-sm uppercase tracking-wide"
              style={{ color: 'rgba(255,240,200,0.6)', border: '1px solid rgba(255,240,200,0.2)' }}
            >
              Admin
            </Link>
          )}
          <button
            className="md:hidden"
            style={{ color: 'rgba(255,240,200,0.8)' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              {menuOpen
                ? <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                : <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              }
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ background: 'var(--maroon)' }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm py-1"
              style={{ color: 'rgba(255,240,200,0.8)' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-sm py-1"
            style={{ color: 'rgba(255,240,200,0.8)' }}
            onClick={() => setMenuOpen(false)}
          >
            Login / Register
          </Link>
          {admin.enabled && (
            <Link
              href="/admin/dashboard"
              className="text-sm py-1"
              style={{ color: 'rgba(255,240,200,0.5)' }}
              onClick={() => setMenuOpen(false)}
            >
              Admin Portal
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
