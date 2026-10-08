import { otherProjects } from '../data/site'
import ExternalLink from '../components/ExternalLink'
import Reveal from '../components/Reveal'

export default function OtherProjects() {
  return (
    <section className="section section--tight" aria-labelledby="other-title">
      <div className="wrap">
        <p className="kicker">05 — Other work</p>
        <h2 id="other-title" className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Adjacent builds
        </h2>
        <p className="lede">
          Smaller visual weight on purpose. One is a mobile product; the other is team
          coursework and is labelled as such.
        </p>
        <div className="project-list">
          {otherProjects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.06}>
              <article className="project-card">
                <p className="project-card__type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="chips">
                  {project.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-card__links">
                  <ExternalLink href={project.links.github}>GitHub</ExternalLink>
                  {project.links.live !== null ? (
                    <ExternalLink href={project.links.live}>Live demo</ExternalLink>
                  ) : (
                    <span className="is-placeholder">
                      Live demo<span className="placeholder-note"> · n/a</span>
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
