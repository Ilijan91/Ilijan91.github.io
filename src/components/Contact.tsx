import { contact } from '../data/cv'
import { useInView } from '../hooks/useInView'
import './Contact.css'

export function Contact() {
  const { ref, isInView } = useInView({ rootMargin: '0px 0px -80px 0px', threshold: 0.1 })

  return (
    <section className={`contact ${isInView ? 'contact--visible' : ''}`} id="contact" ref={ref} aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title contact-title">
        Contact
      </h2>
      <div className="contact-links">
        <a href={`mailto:${contact.email}`} className="contact-link">
          {contact.email}
        </a>
        <a href={`tel:${contact.phone.replace(/\s*\/\s*/g, '')}`} className="contact-link">
          {contact.phone}
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
          GitHub
        </a>
        <span className="contact-location">{contact.location}</span>
      </div>
      <a href={`${import.meta.env.BASE_URL}Ilijan_Militar_CV.pdf`} download="Ilijan_Militar_CV.pdf" type="application/pdf" className="contact-cv-btn">
        Download CV (PDF)
      </a>
    </section>
  )
}
