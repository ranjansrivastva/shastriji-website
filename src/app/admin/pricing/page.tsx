'use client'
import { useState } from 'react'
import AdminShell from '@/components/layout/AdminShell'
import { priestConfig } from '@/config/priest.config'

type PricingItem = { name: string; price: string; note: string }
type PricingCategory = { category: string; items: PricingItem[] }

const defaultPricing: PricingCategory[] = priestConfig.services.map(cat => ({
  category: cat.title,
  items: cat.items.map(item => ({
    name: item.name,
    price: '',
    note: item.desc,
  })),
}))

export default function AdminPricingPage() {
  const [pricing, setPricing] = useState<PricingCategory[]>(defaultPricing)
  const [saved, setSaved] = useState(false)

  const updatePrice = (catIdx: number, itemIdx: number, value: string) => {
    const next = pricing.map((cat, ci) =>
      ci !== catIdx ? cat : {
        ...cat,
        items: cat.items.map((item, ii) =>
          ii !== itemIdx ? item : { ...item, price: value }
        ),
      }
    )
    setPricing(next)
    setSaved(false)
  }

  const handleSave = () => setSaved(true)

  return (
    <AdminShell>
      <div className="px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-serif text-3xl mb-1" style={{ color: 'var(--maroon)' }}>Pricing</h1>
            <p className="text-sm font-light" style={{ color: 'var(--muted)' }}>
              Set prices for each service. Leave blank to show "Contact for pricing".
            </p>
          </div>
          <button onClick={handleSave}
            className="text-xs px-6 py-2.5 uppercase tracking-wide font-medium"
            style={{ background: saved ? '#2E7D32' : 'var(--saffron)', color: 'white' }}>
            {saved ? '✓ Saved' : 'Save Pricing'}
          </button>
        </div>

        <div className="space-y-6">
          {pricing.map((cat, ci) => (
            <div key={cat.category} className="bg-white rounded-lg overflow-hidden"
              style={{ border: '1px solid rgba(180,120,40,0.15)' }}>
              <div className="px-5 py-3 border-b"
                style={{ background: 'var(--saffron-pale)', borderColor: 'rgba(180,120,40,0.15)' }}>
                <div className="font-serif text-lg" style={{ color: 'var(--maroon)' }}>{cat.category}</div>
              </div>
              <div className="divide-y" style={{ borderColor: 'rgba(180,120,40,0.08)' }}>
                {cat.items.map((item, ii) => (
                  <div key={item.name} className="px-5 py-3 flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>{item.name}</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>{item.note}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm" style={{ color: 'var(--muted)' }}>$</span>
                      <input
                        type="number"
                        placeholder="—"
                        value={item.price}
                        onChange={e => updatePrice(ci, ii, e.target.value)}
                        className="w-24 px-3 py-1.5 text-sm rounded text-right"
                        style={{
                          border: '1px solid rgba(180,120,40,0.3)',
                          background: 'var(--saffron-pale)',
                          outline: 'none',
                          color: 'var(--text)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded text-sm font-light"
          style={{ background: '#FFF8E1', border: '1px solid #FFD54F', color: '#7A5C00' }}>
          ⚠️ Prices shown here are for admin reference. The public booking page shows "TBD by Shastriji" — update the booking page to display pricing once you're ready to publish rates.
        </div>
      </div>
    </AdminShell>
  )
}
