import { journey } from '../data/site'
import Reveal from '../components/Reveal'

export default function Journey() {
  return (
    <section className="section" id="journey" aria-labelledby="journey-title">
      <div className="wrap">
        <p className="kicker">06 — Learning</p>
        <h2 id="journey-title" className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          How the work has been accumulating
        </h2>
        <p className="lede">
          Not a highlight reel. A short map of what I have actually spent time on.
        </p>
        <div className="journey">
          {journey.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.05}>
              <article>
                <time>{item.year}</time>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
