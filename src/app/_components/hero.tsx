import { FancyImage } from './image'
import { StyledLink } from './link'
import { SectionHeader } from './section'
import { FancyText } from './text'

export function HeroContent() {
  return (
    <div className="flex flex-col lg:flex-row items-end">
      <div className="flex-1 z-10">
        <SectionHeader className="mb-4">hello</SectionHeader>
        <h1 className="text-4xl md:text-[44px] leading-none font-medium">
          <FancyText>I&apos;m Stefan</FancyText>
        </h1>
        <div className="w-full lg:w-[150%] bg-white pr-0 lg:pr-10 py-10 mb-0 lg:mb-20">
          <p className="text-md md:text-lg">
            I am a software engineer and designer. I previously led product and
            engineering at{' '}
            <StyledLink href="https://crowdsurf.xyz/" target="_blank">
              Crowdsurf
            </StyledLink>
            , was a principal engineer at{' '}
            <StyledLink
              href="https://newsroom.ibm.com/2022-09-22-IBM-Acquires-Dialexa-to-Speed-Digital-Innovation"
              target="_blank"
            >
              IBM Dialexa
            </StyledLink>
            , and was an early hire at{' '}
            <StyledLink
              href="https://www.prnewswire.com/news-releases/booster-raises-125m-in-funding-to-expand-mobile-fuel-delivery-accelerating-decarbonization-of-the-mobility-and-transportation-sector-301554540.html"
              target="_blank"
            >
              Booster
            </StyledLink>
            .
          </p>
        </div>
      </div>
      <div className="relative w-full pb-[100%] lg:w-[65%] lg:pb-[65%]">
        <FancyImage src="/hero.webp" alt="Stefan Erickson" fill />
      </div>
    </div>
  )
}
