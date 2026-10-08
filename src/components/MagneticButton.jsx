
export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  ...props
}) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`inline-flex items-center justify-center transition-all select-none ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

