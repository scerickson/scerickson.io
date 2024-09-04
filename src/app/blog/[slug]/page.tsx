import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import renderMarkdown from '@/lib/markdown'
import { PostBody } from './_components/post-body'
import { Section, SectionHeader } from '@/app/_components/section'

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const content = await renderMarkdown(post.content || '')

  return (
    <>
      <Section>
        <SectionHeader className="mb-6">{post.date}</SectionHeader>
        <h1 className="text-4xl sm:text-5xl font-medium">{post.title}</h1>
      </Section>
      <Section>
        <PostBody content={content} />
      </Section>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const title = `Stefan Erickson | ${post.title}`

  return {
    title,
    openGraph: {
      title,
      //   images: [post.ogImage.url],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
