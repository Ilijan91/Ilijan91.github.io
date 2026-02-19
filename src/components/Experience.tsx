import { experience } from '../data/cv'
import { useInView } from '../hooks/useInView'
import './Experience.css'

const timelineOrder = [...experience].reverse()

export function Experience() {
  const { ref, isInView } = useInView({ rootMargin: '0px 0px -80px 0px', threshold: 0.05 })

  return (
    <section
      className={`experience ${isInView ? 'experience--visible' : ''}`}
      id="experience"
      ref={ref}
      aria-labelledby="experience-title"
    >
      <h2 id="experience-title" className="section-title experience-title">
        Experience
      </h2>
      <div className="experience-timeline">
        <div className="experience-road" aria-hidden="true">
          <div className="experience-road-line" />
        </div>
        <ol className="experience-steps">
          {timelineOrder.map((job, index) => (
            <li
              key={index}
              className={`experience-step experience-step--${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ '--step-delay': `${index * 120}ms` } as React.CSSProperties}
            >
              <div className="experience-card-wrapper experience-card-wrapper--left">
                {index % 2 === 0 && (
                  <div className="experience-card">
                    <div className="experience-card-inner">
                      <span className="experience-dates">{job.dates}</span>
                      <h3 className="experience-role">{job.role}</h3>
                      <p className="experience-company">{job.company}</p>
                      <span className="experience-location">{job.location}</span>
                      <ul className="experience-bullets">
                        {job.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="experience-node" aria-hidden="true" />
              <div className="experience-card-wrapper experience-card-wrapper--right">
                {index % 2 === 1 && (
                  <div className="experience-card">
                    <div className="experience-card-inner">
                      <span className="experience-dates">{job.dates}</span>
                      <h3 className="experience-role">{job.role}</h3>
                      <p className="experience-company">{job.company}</p>
                      <span className="experience-location">{job.location}</span>
                      <ul className="experience-bullets">
                        {job.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
