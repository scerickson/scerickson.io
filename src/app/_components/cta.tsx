export function BigCta({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <div className="sm:grid sm:grid-cols-12 sm:bg-gray-200 sm:gap-[1px] [&>div]:pt-[100%] [&>div]:bg-white p-[1px]">
      {Array.from({ length: 26 }).map((_, i) => (
        <div key={i} className="hidden sm:block" />
      ))}
      <a
        className="bg-blue text-white sm:col-span-8 sm:row-span-2 py-6 w-full sm:py-0 text-center px-12 text-lg md:text-xl lg:text-3xl flex items-center gap-4 justify-center -m-[1px]"
        href={href}
        target="_blank"
      >
        {children}
      </a>
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="hidden sm:block" />
      ))}
    </div>
  )
}
