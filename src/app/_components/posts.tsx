import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { FancyText } from './text'

export function PostLink({
  href,
  title,
  date,
}: {
  href: string
  title: string
  date: string
}) {
  return (
    <Link
      href={href}
      className="relative flex items-center justify-between py-6 border-b group/post hover:text-blue"
    >
      <span className="flex flex-1 items-center gap-2">
        <span className="relative">
          <FancyText className="font-medium border-b border-b-black group-hover/post:border-b-transparent">
            {title}
          </FancyText>
        </span>
        <ArrowRightIcon
          size={22}
          strokeWidth={1.25}
          className="hidden md:block opacity-0 group-hover/post:opacity-100 transition-all -translate-x-1 group-hover/post:translate-x-0 duration-100"
        />
      </span>
      <span className="pl-4 font-normal text-gray-500 group-hover/post:text-blue/60">
        {date}
      </span>
    </Link>
  )
}
