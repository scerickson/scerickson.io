import { FancyText } from './text'

export function TimelineSection({
  startYear,
  endYear,
  company,
  title,
  children,
  active,
}: {
  startYear: number
  endYear: number
  title: string
  company: string
  children?: React.ReactNode
  active?: boolean
}) {
  return (
    <div className="flex gap-6 sm:gap-10 lg:gap-12 max-w-3xl group">
      <div className="text-gray-500 text-nowrap w-[90px] hidden lg:block">
        {startYear}—{endYear}
      </div>
      <div className="flex flex-col items-center w-4">
        <div className="h-4 w-4 my-1 border border-black rounded-full flex items-center justify-center">
          {active && <div className="h-2 w-2 bg-blue rounded-full" />}
        </div>
        <div className="w-[1px] flex-1 bg-black block group-last:hidden" />
      </div>
      <div className="pb-12 flex-1">
        <h3 className="mb-2 font-medium hidden sm:block">
          <FancyText>{`${company} — ${title}`}</FancyText>
        </h3>
        <h3 className="mb-3 font-medium block sm:hidden">
          <FancyText className="block">{company}</FancyText>
          <FancyText className="block font-normal">{title}</FancyText>
        </h3>
        {children && <p>{children}</p>}
      </div>
    </div>
  )
}

export function Timeline() {
  return (
    <div>
      <TimelineSection
        active
        startYear={2022}
        endYear={2024}
        company="Crowdsurf"
        title="Product & Engineering Lead"
      >
        Led the design and development of securities trading platform, achieving
        a funding portal license and enabling investments in content creators.
      </TimelineSection>
      <TimelineSection
        startYear={2019}
        endYear={2022}
        company="IBM Dialexa"
        title="Principle Software Engineer"
      >
        Led interdisciplinary teams in the design and development of enterprise
        applications and systems for Fortune 500/100 clients.
      </TimelineSection>
      <TimelineSection
        startYear={2017}
        endYear={2019}
        company="IBM Dialexa"
        title="Senior Software Engineer"
      >
        Developed web and mobile applications for clients, focusing on enhancing
        user experiences and developing scalable solutions.
      </TimelineSection>
      <TimelineSection
        startYear={2015}
        endYear={2017}
        company="Booster"
        title="Software Engineer, Design Lead"
      >
        Led the design and UI development across all applications from seed
        stage to a $20M Series B.
      </TimelineSection>
      <TimelineSection
        startYear={2014}
        endYear={2015}
        company="Sq1 (Aquired by Ansira)"
        title="Software Engineer"
      />
      <TimelineSection
        startYear={2013}
        endYear={2014}
        company="Aria (Aquired by Atkins Group)"
        title="Software Engineer"
      />
    </div>
  )
}
