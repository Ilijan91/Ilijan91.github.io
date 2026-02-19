import { contact } from '../data/cv'
import './Nav.css'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const

export function Nav() {
  return (
    <header className="nav" role="banner">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          {contact.name}
        </a>
        <nav className="nav-links" aria-label="Main">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
