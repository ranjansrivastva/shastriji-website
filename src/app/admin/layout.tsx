import type { Metadata } from 'next'
import { priestConfig } from '@/config/priest.config'

export const metadata: Metadata = {
  title: `Admin — ${priestConfig.name}`,
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
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
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {children}
    </>
  )
}
