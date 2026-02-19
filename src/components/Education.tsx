import { education } from '../data/cv'
import { useInView } from '../hooks/useInView'
import './Education.css'

export function Education() {
  const { ref, isInView } = useInView({ rootMargin: '0px 0px -80px 0px', threshold: 0.1 })

  return (
    <section className={`education ${isInView ? 'education--visible' : ''}`} id="education" ref={ref} aria-labelledby="education-title">
      <h2 id="education-title" className="section-title education-title">
        Education
      </h2>
      <div className="education-card">
        <h3 className="education-degree">{education.degree}</h3>
        <p className="education-school">{education.school}</p>
        <p className="education-dates">{education.dates}</p>
        <p className="education-tech">{education.technologies}</p>
      </div>
    </section>
  )
}
