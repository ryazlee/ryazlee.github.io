import type { AnchorHTMLAttributes } from 'react'
import { Link as RouterLink } from 'react-router-dom'

const LINK_CLASSES = [
  'relative inline overflow-hidden font-medium text-primary no-underline',
  "after:content-[''] after:absolute after:z-[-1] after:left-0 after:right-auto after:w-0 after:bottom-[-2px]",
  'after:bg-primary after:h-px after:transition-[width] after:duration-300 after:ease-out',
  'hover:no-underline hover:text-primary hover:after:w-full',
  'focus:no-underline focus:text-primary focus:after:w-full',
  'active:no-underline active:text-primary active:after:w-full',
].join(' ')

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: string
}

export function Link({ className, to, children, ...props }: LinkProps) {
  const classes = `${LINK_CLASSES}${className ? ` ${className}` : ''}`

  if (to) {
    return (
      <RouterLink to={to} className={classes}>
        {children}
      </RouterLink>
    )
  }

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}
