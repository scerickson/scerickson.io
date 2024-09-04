import { FancyText } from './text'
import { AsuredLogo, BoosterLogo, CrowdsurfLogo, RallyLogo } from './logos'

export function Project({
  title,
  icon,
  children,
}: {
  children: React.ReactNode
  title: string
  icon: React.ReactNode
}) {
  return (
    <div>
      <div className="h-12 w-12 bg-blue/5 text-blue border-blue mb-5 items-center justify-center flex">
        {icon}
      </div>
      <h3 className="mb-2 font-medium flex items-center gap-2">
        <FancyText>{title}</FancyText>
      </h3>
      <p>{children}</p>
    </div>
  )
}

export function Projects() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
      <Project title="Crowdsurf" icon={<CrowdsurfLogo />}>
        Equity crowdfunding platform that enables anyone to invest in a content
        creator.
      </Project>
      <Project title="Booster" icon={<BoosterLogo />}>
        Elimates the gas station errand by delivering fuel directly to your car.
      </Project>
      <Project title="Asured" icon={<AsuredLogo />}>
        Deductible payment plans for policyholders - no financing, no interest,
        no credit checks.
      </Project>
      <Project title="Rally" icon={<RallyLogo />}>
        Stealth mode startup looking to simplify workflows for teams working
        physical jobs by leveraging AI.
      </Project>
    </div>
  )
}
