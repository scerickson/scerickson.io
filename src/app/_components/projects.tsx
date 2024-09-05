import { FancyText } from './text'
import { AsuredLogo, BoosterLogo, CrowdsurfLogo, RallyLogo } from './logos'
import { cn } from '@/lib/utils'

function ProjectLink({
  href,
  children,
  disabled,
}: {
  href?: string
  children: React.ReactNode
  disabled?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={cn('font-mono', {
        'pointer-events-none text-gray-500': disabled,
        'text-black border-b border-b-black hover:border-b-transparent hover:text-blue':
          !disabled,
      })}
    >
      {children}
    </a>
  )
}

export function Project({
  title,
  icon,
  children,
  links,
}: {
  children: React.ReactNode
  title: string
  icon: React.ReactNode
  links?: { href?: string; text: string; disabled?: boolean }[]
}) {
  return (
    <div>
      <div className="h-12 w-12 bg-blue/5 text-blue border-blue mb-5 items-center justify-center flex">
        {icon}
      </div>
      <h3 className="mb-2 font-medium flex items-center gap-2">
        <FancyText>{title}</FancyText>
      </h3>
      <p className="mb-2">{children}</p>
      {links && links.length > 0 && (
        <div className="flex gap-4">
          {links.map((link, i) => (
            <ProjectLink
              key={`${title}-link-${i}`}
              href={link.href}
              disabled={link.disabled}
            >
              {link.text}
            </ProjectLink>
          ))}
        </div>
      )}
    </div>
  )
}

export function Projects() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
      <Project
        title="Crowdsurf"
        icon={<CrowdsurfLogo />}
        links={[
          {
            href: 'https://crowdsurf.xyz/',
            text: 'Web',
          },
          {
            text: 'iOS',
            disabled: true,
          },
        ]}
      >
        Equity crowdfunding platform that enables anyone to invest in a content
        creator.
      </Project>
      <Project
        title="Booster"
        icon={<BoosterLogo />}
        links={[
          {
            href: 'https://boosterusa.com/',
            text: 'Web',
          },
          {
            href: 'https://web.archive.org/web/20220222201644/https://apps.apple.com/us/app/booster-on-demand-fuel/id1018909771',
            text: 'iOS',
          },
          {
            href: 'https://web.archive.org/web/20170718044953/https://play.google.com/store/apps/details?id=com.boosterfuels.boosterfuels&hl=en',
            text: 'Android',
          },
        ]}
      >
        Elimates the gas station errand by delivering fuel directly to your car.
      </Project>
      <Project
        title="Asured"
        icon={<AsuredLogo />}
        links={[
          {
            href: 'https://asured.co/',
            text: 'Web',
          },
        ]}
      >
        Deductible payment plans for policyholders - no financing, no interest,
        no credit checks.
      </Project>
      <Project
        title="Rally"
        icon={<RallyLogo />}
        links={[
          {
            text: 'Web',
            disabled: true,
          },
          {
            text: 'iOS',
            disabled: true,
          },
          {
            text: 'Android',
            disabled: true,
          },
        ]}
      >
        Stealth mode project looking to simplify workflows for teams working
        physical jobs by leveraging AI.
      </Project>
    </div>
  )
}
