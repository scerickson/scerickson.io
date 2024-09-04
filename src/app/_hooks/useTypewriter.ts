import { useEffect, useState } from 'react'

export function useTypewriter({
  text,
  duration = 500,
  active = true,
}: {
  text: string
  duration?: number
  active?: boolean
}) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    if (active) {
      const totalCharacters = text.length
      const interval = duration / totalCharacters

      let i = 0
      const typingInterval = setInterval(() => {
        if (i < totalCharacters) {
          setDisplayText(text.substring(0, i + 1))
          i++
        } else {
          clearInterval(typingInterval)
        }
      }, interval)

      return () => {
        clearInterval(typingInterval)
      }
    }
  }, [text, duration, active])

  return displayText
}
