import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Gopal Chandra Shastri Jee — Vedic Pandit & Katha Vachak',
  description: 'Authentic pan-Indian Vedic ceremonies, Katha Vachan, and spiritual education serving Dallas–Fort Worth and Houston.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}