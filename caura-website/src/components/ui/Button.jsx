import { Link } from 'react-router-dom'

/**
 * Reusable Button component.
 * variant: 'primary' | 'secondary' | 'white' | 'outline-white'
 * as: 'button' | 'link' | 'a'
 */
export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  to,
  href,
  className = '',
  ...props
}) {
  const base = `btn-${variant} ${className}`

  if (as === 'link' && to) {
    return (
      <Link to={to} className={base} {...props}>
        {children}
      </Link>
    )
  }

  if (as === 'a' && href) {
    return (
      <a href={href} className={base} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  )
}
