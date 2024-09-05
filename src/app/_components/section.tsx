'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { FancyText } from './text'

export function SectionHeader({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      ref={ref}
      className={cn('flex items-center text-blue gap-2 font-mono', className)}
    >
      <span className="block w-[54px] h-[1px]">
        <span
          className={cn(
            'block w-full h-full bg-blue origin-left transition-all duration-500',
            {
              'scale-x-0': !isInView,
              'scale-x-100': isInView,
            }
          )}
        />
      </span>
      <FancyText>{children}</FancyText>
    </div>
  )
}

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative border-b last:border-none px-5 sm:px-12 md:px-20 py-12 sm:py-20 group/section',
        className
      )}
    >
      <div className="absolute group-odd/section:-left-[9px] group-even/section:-right-[9px] -top-[9px] h-[17px] w-[17px]">
        <div className="h-[1px] w-[11px] md:w-[17px] bg-gray-500 absolute inset-0 m-auto" />
        <div className="w-[1px] h-[11px] md:h-[17px] bg-gray-500 absolute inset-0 m-auto" />
      </div>
      {children}
    </section>
  )
}
