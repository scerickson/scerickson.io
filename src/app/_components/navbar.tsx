'use client'

import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href) return
    if (pathname === '/') {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`/${href}`)
    }
  }

  return (
    <nav className="inset-0 top-0 lg:sticky lg:bg-white z-50 lg:mb-6">
      <div className="flex items-center justify-between h-20 max-w-screen-2xl mx-auto px-7 md:px-8">
        <a href="/" className="relative flex items-center gap-0.5 z-10">
          <span className="font-mono font-bold tracking-tight">
            scerickson.io
          </span>
          <div className="h-5 w-1 bg-blue animate-blink" />
        </a>
        <div className="absolute hidden left-0 right-0 lg:flex justify-center items-center gap-10">
          <a href="#projects" onClick={handleLinkClick} className="text-[15px]">
            Projects
          </a>
          <a href="#resume" onClick={handleLinkClick} className="text-[15px]">
            Resume
          </a>
          <a href="#writings" onClick={handleLinkClick} className="text-[15px]">
            Writings
          </a>
        </div>
        <div className="relative inline-flex items-center gap-8 z-10">
          <a
            href="https://www.linkedin.com/in/scerickson/"
            className="text-md text-black hover:text-blue"
            target="_blank"
          >
            <LinkedinIcon size={19} strokeWidth={1.3} />
          </a>
          <a
            href="https://github.com/scerickson"
            className="text-md text-black hover:text-blue"
            target="_blank"
          >
            <GithubIcon size={19} strokeWidth={1.3} />
          </a>
        </div>
      </div>
    </nav>
  )
}
