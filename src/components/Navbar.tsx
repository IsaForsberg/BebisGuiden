import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { label: 'Hem', path: '/' },
  {
    label: 'Förberedelser',
    children: [
      { label: 'Innan graviditeten', path: '/innan-graviditet' },
      { label: 'Graviditet vecka för vecka', path: '/graviditet' },
      { label: 'Inför förlossning', path: '/infor-forlossning' },
    ]
  },
  {
    label: 'Barnets utveckling',
    children: [
      { label: '0–3 månader', path: '/utveckling/0-3' },
      { label: '3–6 månader', path: '/utveckling/3-6' },
      { label: '6–12 månader', path: '/utveckling/6-12' },
      { label: '1–2 år', path: '/utveckling/1-2' },
      { label: '2–3 år', path: '/utveckling/2-3' },
    ]
  },
  {
    label: 'Forskning',
    children: [
      { label: 'Hjärna & lärande', path: '/forskning/hjarna' },
      { label: 'Sömn & anknytning', path: '/forskning/somn' },
      { label: 'Kost & hälsa', path: '/forskning/kost' },
      { label: 'Skärmtid & stimulans', path: '/forskning/skarmtid' },
    ]
  },
  { label: 'Barnrummet', path: '/barnrummet' },
  { label: 'Inspiration', path: '/inspiration' },
  { label: 'Tips & Tricks', path: '/tips' },
  { label: 'Boktips', path: '/boktips' },
]

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ background: 'white', borderBottom: '1px solid #E8C4B8', boxShadow: '0 2px 12px rgba(61,43,31,0.06)' }}>
      <div className="container-lg">
        <Link className="navbar-brand navbar-brand-custom" to="/">
          🌸 BebisGuiden
        </Link>
        <button className="navbar-toggler" onClick={() => setOpen(!open)} style={{ border: 'none' }}>
          <span style={{ fontSize: '1.5rem' }}>☰</span>
        </button>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <li className="nav-item dropdown" key={item.label}>
                  <a
                    className="nav-link nav-link-custom dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    {item.label}
                  </a>
                  <ul className="dropdown-menu" style={{ border: '1px solid #E8C4B8', borderRadius: '12px', boxShadow: '0 8px 24px rgba(61,43,31,0.1)' }}>
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          className="dropdown-item"
                          to={child.path}
                          style={{ color: '#3D2B1F', fontSize: '0.9rem', padding: '8px 20px' }}
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={item.path}>
                  <Link
                    className="nav-link nav-link-custom"
                    to={item.path!}
                    style={location.pathname === item.path ? { color: '#B5624A', background: '#F5E8E2' } : {}}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
