import { skillsByCategory } from '../data/cv'
import { useInView } from '../hooks/useInView'
import './Skills.css'

export function Skills() {
  const { ref, isInView } = useInView({ rootMargin: '0px 0px -80px 0px', threshold: 0.1 })

  return (
    <section
      className={`skills ${isInView ? 'skills--visible' : ''}`}
      id="skills"
      ref={ref}
      aria-labelledby="skills-title"
    >
      <h2 id="skills-title" className="section-title skills-title">
        Skills
      </h2>
      <div className="skills-grid">
        {Object.entries(skillsByCategory).map(([category, items], groupIndex) => (
          <div
            key={category}
            className="skills-group"
            style={{ '--group-delay': `${groupIndex * 100}ms` } as React.CSSProperties}
          >
            <h3 className="skills-category">{category}</h3>
            <ul className="skills-tags">
              {items.map((skill, tagIndex) => (
                <li
                  key={skill}
                  className="skills-tag-wrap"
                  style={{
                    '--tag-delay': `${groupIndex * 100 + 80 + tagIndex * 45}ms`,
                  } as React.CSSProperties}
                >
                  <span className="skills-tag">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
