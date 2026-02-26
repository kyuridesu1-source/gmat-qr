import { notFound } from 'next/navigation';
import { getTopicBySlug, ALL_TOPICS } from '@/data/topics';
import { TopicPageContent } from '@/components/TopicPageContent';

export function generateStaticParams() {
  return ALL_TOPICS.filter((t) => t.ready).map((t) => ({ slug: t.slug }));
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic || !topic.ready) {
    notFound();
  }

  return <TopicPageContent slug={slug} />;
}
