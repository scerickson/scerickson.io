'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image, { type ImageProps } from 'next/image'
import { useRef, useState } from 'react'

const variants = {
  visible: {
    opacity: 1,
  },
  hidden: (delay: number[]) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.009 * delay[1] },
  }),
}

export function FancyImage({ alt, onLoad, className, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const shuffle = (a: number[]) => {
    var j, x, i
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      x = a[i]
      a[i] = a[j]
      a[j] = x
    }
    return a
  }

  const getBlocks = (
    indexOfColum: number,
    blockSize: number,
    nbOfRows: number
  ) => {
    const shuffledIndexes = shuffle([...Array(nbOfRows)].map((_, i) => i))
    return shuffledIndexes.map((randomIndex, index) => (
      <motion.div
        key={index}
        className="bg-white"
        style={{ width: blockSize, height: blockSize }}
        variants={variants}
        initial="visible"
        animate={loaded ? 'hidden' : 'visible'}
        custom={[
          indexOfColum + randomIndex,
          nbOfRows - indexOfColum + randomIndex,
        ]}
      />
    ))
  }

  return (
    <div className={cn({ relative: !props.fill })}>
      <div
        ref={containerRef}
        className="absolute -inset-0.5 z-[1] pointer-events-none flex flex-row-reverse flex-wrap"
      >
        {[...Array(30)].map((_, index) => {
          if (!containerRef.current) return null

          const { clientWidth, clientHeight } = containerRef.current
          const blockSize = clientWidth / 30
          const nbOfRows = Math.ceil(clientHeight / blockSize)

          return (
            <div key={index} className="flex flex-col">
              {getBlocks(index, blockSize, nbOfRows)}
            </div>
          )
        })}
      </div>
      <Image
        className={cn(
          { 'opacity-100': loaded, 'opacity-0': !loaded },
          className
        )}
        onLoad={(e) => {
          setLoaded(true)
          if (!!onLoad) onLoad(e)
        }}
        alt={alt}
        {...props}
      />
    </div>
  )
}
