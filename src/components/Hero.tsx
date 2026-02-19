import { useEffect, useState } from 'react'
import { contact } from '../data/cv'
import './Hero.css'

export function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <section className={`hero ${mounted ? 'hero--mounted' : ''}`} id="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero-title">
        {contact.name}
      </h1>
      <p className="hero-subtitle">{contact.title}</p>
      <p className="hero-location">{contact.location}</p>
      <div className="hero-cta">
        <a href="#experience" className="hero-btn">
          View experience
        </a>
        <a href="#contact" className="hero-btn hero-btn-secondary">
          Contact
        </a>
      </div>
    </section>
  )
}
