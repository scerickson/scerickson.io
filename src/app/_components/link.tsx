import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'

export function StyledLink({
  className,
  children,
  ...props
}: LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string
    children: React.ReactNode
  }) {
  return (
    <Link
      className={cn(
        'text-blue border-b border-b-blue hover:border-b-transparent',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
