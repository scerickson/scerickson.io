'use client'

import { cn } from '@/lib/utils'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTypewriter } from '@/app/_hooks/useTypewriter'

export function FancyText({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const text = useTypewriter({
    text: children,
    active: isInView,
  })

  return (
    <span
      ref={ref}
      className={cn({ 'opacity-0': !text, 'opacity-100': !!text }, className)}
    >
      {text ? text : children}
    </span>
  )
}
