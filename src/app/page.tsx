import { DownloadIcon } from 'lucide-react'
import { getAllPosts } from '@/lib/api'
import { Section, SectionHeader } from '@/app/_components/section'
import { Projects } from './_components/projects'
import { Timeline } from './_components/timeline'
import { PostLink } from './_components/posts'
import { BigCta } from './_components/cta'
import { HeroContent } from './_components/hero'

export default function Home() {
  const posts = getAllPosts()

  return (
    <>
      <Section>
        <HeroContent />
      </Section>
      <Section id="projects">
        <SectionHeader className="mb-12">projects</SectionHeader>
        <Projects />
      </Section>
      <Section id="resume">
        <SectionHeader className="mb-12">resume</SectionHeader>
        <Timeline />
        <BigCta href="https://www.dropbox.com/scl/fi/c369lc8j5pa6xdjjqqqyj/Resume.pdf?rlkey=oqejr5oh6dhdij0v2v2kdbzx6&st=hdc6vk71&dl=0">
          Full Resume
          <DownloadIcon className="h-6 w-6 lg:h-9 lg:w-9" strokeWidth={1.75} />
        </BigCta>
      </Section>
      <Section id="writings">
        <SectionHeader className="mb-12">writings</SectionHeader>
        <div>
          {posts.map((post) => (
            <PostLink
              key={post.slug}
              href={`/blog/${post.slug}`}
              title={post.title}
              date={post.date}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
