import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'

import './globals.css'
import { Navbar } from './_components/navbar'

const grotesk = Space_Grotesk({ subsets: ['latin'] })
const _ = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stefan Erickson',
  description:
    'I am a software engineer and designer. I previously led product and engineering at Crowdsurf, was a principal engineer at IBM Dialexa, and was an early hire at Booster.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(grotesk.className, 'antialiased')}>
        <Navbar />
        <div className="max-w-6xl mx-auto px-2 sm:px-6 md:px-8">
          <main className="border">{children}</main>
          <footer className="pt-10 pb-20">
            <p className="text-center text-sm text-gray-500">
              Stefan Erickson © {new Date().getFullYear()}
            </p>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
