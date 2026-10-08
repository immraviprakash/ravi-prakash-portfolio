import { isPlaceholder } from '../data/site'

export default function ExternalLink({ href, children, className = '' }) {
  if (isPlaceholder(href) || href == null) {
    return (
      <span className={`${className} is-placeholder`.trim()} title="Add this URL in src/data/site.js">
        {children}
        <span className="placeholder-note"> · add link</span>
      </span>
    )
  }

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
