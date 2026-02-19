import { about, languages, interests } from '../data/cv'
import { useInView } from '../hooks/useInView'
import './About.css'

export function About() {
  const { ref, isInView } = useInView({ rootMargin: '0px 0px -80px 0px', threshold: 0.1 })

  return (
    <section className={`about ${isInView ? 'about--visible' : ''}`} id="about" ref={ref} aria-labelledby="about-title">
      <h2 id="about-title" className="section-title about-title">
        About
      </h2>
      <p className="about-text">{about}</p>
      <div className="about-meta">
        <p>
          <strong>Languages:</strong> {languages.join(', ')}
        </p>
        <p>
          <strong>Interests:</strong> {interests.join(', ')}
        </p>
      </div>
    </section>
  )
}
