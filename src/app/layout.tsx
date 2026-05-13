import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { priestConfig } from '@/config/priest.config'

export const metadata: Metadata = {
  title: priestConfig.site.title,
  description: priestConfig.site.description,
}

// Inject all color CSS variables from config so the entire site is themed.
// This runs server-side — no JavaScript required in the browser.
function ThemeVars() {
  const c = priestConfig.colors
  const css = `
    :root {
      --saffron: ${c.primary};
      --saffron-light: ${c.primaryLight};
      --saffron-pale: ${c.primaryPale};
      --gold: ${c.accent};
      --gold-light: ${c.accentLight};
      --maroon: ${c.secondary};
      --cream: ${c.cream};
      --brown: ${c.brown};
      --text: ${c.text};
      --muted: ${c.muted};
    }
  `
  return <style dangerouslySetInnerHTML={{ __html: css }} />
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ThemeVars />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
