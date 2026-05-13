'use client'
import { useState } from 'react'
import AdminShell from '@/components/layout/AdminShell'

const allBookings = [
  { ref: '#GCS-2025-4821', ceremony: 'Griha Pravesh', name: 'Arun Sharma', phone: '214-555-0101', date: 'May 15, 2025', time: '9:00 AM', location: 'Home', payment: 'Online', status: 'pending' },
  { ref: '#GCS-2025-4819', ceremony: 'Satyanarayan Katha', name: 'Priya Mehta', phone: '972-555-0202', date: 'May 12, 2025', time: '7:30 AM', location: 'Home', payment: 'In Person', status: 'confirmed' },
  { ref: '#GCS-2025-4817', ceremony: 'Annaprashan', name: 'Vikram Patel', phone: '469-555-0303', date: 'May 10, 2025', time: '11:00 AM', location: 'Temple', payment: 'Online', status: 'confirmed' },
  { ref: '#GCS-2025-4815', ceremony: 'Vivah / Wedding', name: 'Deepa Rao', phone: '817-555-0404', date: 'May 8, 2025', time: '9:00 AM', location: 'Home', payment: 'Online', status: 'completed' },
  { ref: '#GCS-2025-4812', ceremony: 'Navagraha Homa', name: 'Suresh Kumar', phone: '713-555-0505', date: 'May 5, 2025', time: '6:00 AM', location: 'Home', payment: 'In Person', status: 'completed' },
  { ref: '#GCS-2025-4810', ceremony: 'Namakaran', name: 'Kavitha Reddy', phone: '214-555-0606', date: 'May 3, 2025', time: '11:00 AM', location: 'Temple', payment: 'Online', status: 'completed' },
]

const statusStyle: Record<string, { bg: string; color: string }> = {
  pending:   { bg: '#FFF8E1', color: '#7A5C00' },
  confirmed: { bg: '#E8F5E9', color: '#2E7D32' },
  completed: { bg: '#F3E5F5', color: '#6A1B9A' },
}

export default function AdminBookingsPage() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? allBookings : allBookings.filter(b => b.status === filter)

  return (
    <AdminShell>
      <div className="px-8 py-8">
        <div className="mb-6">
          <h1 className="font-serif text-3xl mb-1" style={{ color: 'var(--maroon)' }}>Bookings</h1>
          <p className="text-sm font-light" style={{ color: 'var(--muted)' }}>
            Review, approve, and manage all ceremony bookings.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6">
          {['all', 'pending', 'confirmed', 'completed'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className="px-4 py-1.5 text-xs rounded-full capitalize"
              style={{
                background: filter === f ? 'var(--maroon)' : 'white',
                color: filter === f ? 'white' : 'var(--muted)',
                border: `1px solid ${filter === f ? 'var(--maroon)' : 'rgba(180,120,40,0.2)'}`
              }}>
              {f}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg overflow-hidden" style={{ border: '1px solid rgba(180,120,40,0.15)' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: 'var(--saffron-pale)', borderBottom: '1px solid rgba(180,120,40,0.15)' }}>
                  {['Ref', 'Ceremony', 'Name & Phone', 'Date & Time', 'Location', 'Payment', 'Status', 'Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-medium tracking-widest uppercase"
                      style={{ color: 'var(--brown)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((b, i) => (
                  <tr key={b.ref}
                    style={{ borderBottom: i < filtered.length - 1 ? '1px solid rgba(180,120,40,0.08)' : 'none' }}>
                    <td className="px-4 py-3 text-xs font-medium" style={{ color: 'var(--brown)' }}>{b.ref}</td>
                    <td className="px-4 py-3 text-sm" style={{ color: 'var(--text)' }}>{b.ceremony}</td>
                    <td className="px-4 py-3">
                      <div className="text-sm" style={{ color: 'var(--text)' }}>{b.name}</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>{b.phone}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm" style={{ color: 'var(--text)' }}>{b.date}</div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>{b.time}</div>
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: 'var(--muted)' }}>{b.location}</td>
                    <td className="px-4 py-3 text-xs" style={{ color: 'var(--muted)' }}>{b.payment}</td>
                    <td className="px-4 py-3">
                      <span className="text-xs px-2.5 py-1 rounded-full capitalize"
                        style={statusStyle[b.status]}>
                        {b.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 flex gap-1.5 flex-wrap">
                      {b.status === 'pending' && (
                        <button className="text-xs px-2.5 py-1 rounded"
                          style={{ background: '#E8F5E9', color: '#2E7D32' }}>
                          Approve
                        </button>
                      )}
                      {b.status === 'pending' && (
                        <button className="text-xs px-2.5 py-1 rounded"
                          style={{ background: '#FFEBEE', color: '#C62828' }}>
                          Decline
                        </button>
                      )}
                      <button className="text-xs px-2.5 py-1 rounded"
                        style={{ background: 'var(--saffron-pale)', color: 'var(--brown)' }}>
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="px-6 py-12 text-center text-sm font-light" style={{ color: 'var(--muted)' }}>
                No {filter} bookings found.
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminShell>
  )
}
