import { Link, useLocation } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

const navItems = [
  { label: 'Hem', path: '/' },
  {
    label: 'Förberedelser',
    children: [
      { label: '🌱 Innan graviditeten', path: '/innan-graviditet' },
      { label: '🤰 Graviditet vecka för vecka', path: '/graviditet' },
      { label: '🏥 Inför förlossning', path: '/infor-forlossning' },
    ]
  },
  {
    label: 'Barnets utveckling',
    children: [
      { label: '👶 0–3 månader', path: '/utveckling/0-3' },
      { label: '🧸 3–6 månader', path: '/utveckling/3-6' },
      { label: '🌟 6–12 månader', path: '/utveckling/6-12' },
      { label: '🚶 1–2 år', path: '/utveckling/1-2' },
      { label: '🎨 2–3 år', path: '/utveckling/2-3' },
    ]
  },
  {
    label: 'Forskning',
    children: [
      { label: '🧠 Hjärna & lärande', path: '/forskning/hjarna' },
      { label: '😴 Sömn & anknytning', path: '/forskning/somn' },
      { label: '🥕 Kost & hälsa', path: '/forskning/kost' },
      { label: '📱 Skärmtid & stimulans', path: '/forskning/skarmtid' },
    ]
  },
  { label: 'Barnrummet', path: '/barnrummet' },
  { label: 'Inspiration', path: '/inspiration' },
  { label: 'Tips & Tricks', path: '/tips' },
  { label: 'Boktips', path: '/boktips' },
]

function DropdownMenu({ label, children, onClose }: {
  label: string
  children: { label: string; path: string }[]
  onClose: () => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <li className="nav-item" ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#3D2B1F', fontWeight: 500, fontSize: '0.9rem',
          padding: '8px 12px', borderRadius: 8,
          display: 'flex', alignItems: 'center', gap: 4,
        }}
        className="nav-link-custom"
      >
        {label}
        <span style={{ fontSize: '0.7rem', transition: 'transform 0.2s', display: 'inline-block', transform: open ? 'rotate(180deg)' : 'none' }}>▼</span>
      </button>
      {open && (
        <ul style={{
          position: 'absolute', top: '100%', left: 0, zIndex: 1000,
          background: 'white', border: '1px solid #E8C4B8',
          borderRadius: 12, boxShadow: '0 8px 24px rgba(61,43,31,0.12)',
          listStyle: 'none', padding: '8px 0', margin: 0,
          minWidth: 220,
        }}>
          {children.map(child => (
            <li key={child.path}>
              <Link
                to={child.path}
                onClick={() => { setOpen(false); onClose() }}
                style={{
                  display: 'block', padding: '10px 20px',
                  color: '#3D2B1F', fontSize: '0.9rem',
                  textDecoration: 'none', transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#FAF6F0')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => { setMobileOpen(false) }, [location])

  return (
    <nav style={{
      background: 'white', borderBottom: '1px solid #E8C4B8',
      boxShadow: '0 2px 12px rgba(61,43,31,0.06)',
      position: 'sticky', top: 0, zIndex: 999,
    }}>
      <div className="container-lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', height: 64 }}>
        <Link to="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#B5624A', fontWeight: 600, textDecoration: 'none' }}>
          🌸 BebisGuiden
        </Link>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: 4, alignItems: 'center' }}
          className="d-none d-lg-flex">
          {navItems.map(item =>
            item.children ? (
              <DropdownMenu key={item.label} label={item.label} children={item.children} onClose={() => setMobileOpen(false)} />
            ) : (
              <li key={item.path}>
                <Link
                  to={item.path!}
                  className="nav-link-custom"
                  style={location.pathname === item.path ? { color: '#B5624A', background: '#F5E8E2', borderRadius: 8, padding: '8px 12px', display: 'block', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' } : { display: 'block' }}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile burger */}
        <button
          className="d-lg-none"
          onClick={() => setMobileOpen(o => !o)}
          style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#B5624A' }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: 'white', borderTop: '1px solid #E8C4B8', padding: '16px' }} className="d-lg-none">
          {navItems.map(item =>
            item.children ? (
              <div key={item.label} style={{ marginBottom: 8 }}>
                <div style={{ fontWeight: 700, color: '#B5624A', padding: '6px 0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 1 }}>
                  {item.label}
                </div>
                {item.children.map(child => (
                  <Link key={child.path} to={child.path} onClick={() => setMobileOpen(false)}
                    style={{ display: 'block', padding: '8px 12px', color: '#3D2B1F', fontSize: '0.9rem', textDecoration: 'none' }}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.path} to={item.path!} onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '10px 0', color: '#3D2B1F', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid #F5E8E2' }}>
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  )
}
