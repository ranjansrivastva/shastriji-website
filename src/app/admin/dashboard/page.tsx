'use client'
import AdminShell from '@/components/layout/AdminShell'
import { priestConfig } from '@/config/priest.config'

const mockBookings = [
  { ref: '#GCS-2025-4821', ceremony: 'Griha Pravesh', name: 'Arun Sharma', date: 'May 15, 2025', status: 'pending' },
  { ref: '#GCS-2025-4819', ceremony: 'Satyanarayan Katha', name: 'Priya Mehta', date: 'May 12, 2025', status: 'confirmed' },
  { ref: '#GCS-2025-4817', ceremony: 'Annaprashan', name: 'Vikram Patel', date: 'May 10, 2025', status: 'confirmed' },
  { ref: '#GCS-2025-4815', ceremony: 'Vivah / Wedding', name: 'Deepa Rao', date: 'May 8, 2025', status: 'completed' },
]

const statusStyle: Record<string, { bg: string; color: string }> = {
  pending:   { bg: '#FFF8E1', color: '#7A5C00' },
  confirmed: { bg: '#E8F5E9', color: '#2E7D32' },
  completed: { bg: '#F3E5F5', color: '#6A1B9A' },
}

export default function AdminDashboard() {
  const stats = [
    { label: 'Pending Bookings', value: '3', icon: '📅', color: '#FFF8E1', textColor: '#7A5C00' },
    { label: 'This Month', value: '12', icon: '✅', color: '#E8F5E9', textColor: '#2E7D32' },
    { label: 'Total Families', value: priestConfig.stats.find(s => s.label === 'Families served')?.num ?? '500+', icon: '👨‍👩‍👧', color: 'var(--saffron-pale)', textColor: 'var(--maroon)' },
    { label: 'Testimonials', value: String(priestConfig.testimonials.length), icon: '★', color: 'var(--saffron-light)', textColor: 'var(--brown)' },
  ]

  return (
    <AdminShell>
      <div className="px-8 py-8">
        <div className="mb-8">
          <h1 className="font-serif text-3xl mb-1" style={{ color: 'var(--maroon)' }}>Dashboard</h1>
          <p className="text-sm font-light" style={{ color: 'var(--muted)' }}>
            Welcome back. Here's what's happening with {priestConfig.name}.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map(s => (
            <div key={s.label} className="rounded-lg p-5"
              style={{ background: 'white', border: '1px solid rgba(180,120,40,0.15)' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl">{s.icon}</span>
                <span className="font-serif text-2xl" style={{ color: 'var(--saffron)' }}>{s.value}</span>
              </div>
              <div className="text-xs font-light" style={{ color: 'var(--muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Recent bookings */}
        <div className="bg-white rounded-lg" style={{ border: '1px solid rgba(180,120,40,0.15)' }}>
          <div className="px-6 py-4 border-b flex items-center justify-between"
            style={{ borderColor: 'rgba(180,120,40,0.15)' }}>
            <div className="font-serif text-lg" style={{ color: 'var(--maroon)' }}>Recent Bookings</div>
            <a href="/admin/bookings" className="text-xs uppercase tracking-wide"
              style={{ color: 'var(--saffron)' }}>View all →</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(180,120,40,0.1)' }}>
                  {['Ref', 'Ceremony', 'Name', 'Date', 'Status', 'Actions'].map(h => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-medium tracking-widest uppercase"
                      style={{ color: 'var(--muted)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mockBookings.map((b, i) => (
                  <tr key={b.ref}
                    style={{ borderBottom: i < mockBookings.length - 1 ? '1px solid rgba(180,120,40,0.08)' : 'none' }}>
                    <td className="px-5 py-3 text-xs font-medium" style={{ color: 'var(--brown)' }}>{b.ref}</td>
                    <td className="px-5 py-3 text-sm" style={{ color: 'var(--text)' }}>{b.ceremony}</td>
                    <td className="px-5 py-3 text-sm" style={{ color: 'var(--text)' }}>{b.name}</td>
                    <td className="px-5 py-3 text-xs" style={{ color: 'var(--muted)' }}>{b.date}</td>
                    <td className="px-5 py-3">
                      <span className="text-xs px-2.5 py-1 rounded-full capitalize"
                        style={statusStyle[b.status]}>
                        {b.status}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      {b.status === 'pending' && (
                        <button className="text-xs px-3 py-1 rounded mr-1"
                          style={{ background: '#E8F5E9', color: '#2E7D32' }}>
                          Approve
                        </button>
                      )}
                      <button className="text-xs px-3 py-1 rounded"
                        style={{ background: 'var(--saffron-pale)', color: 'var(--brown)' }}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminShell>
  )
}
