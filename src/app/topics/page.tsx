'use client';

import Link from 'next/link';
import { ALL_TOPICS } from '@/data/topics';
import { CATEGORIES, type Category, getCategoryInfo } from '@/data/types';
import { Badge } from '@/components/ui/badge';
import { DesktopSidebar, MobileNav } from '@/components/Sidebar';
import { useEffect, useState } from 'react';
import { getAllProgress, type TopicProgress } from '@/lib/progress';
import { cn } from '@/lib/utils';

export default function TopicsPage() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [progress, setProgress] = useState<Record<string, TopicProgress>>({});

  useEffect(() => {
    setProgress(getAllProgress());
  }, []);

  const filteredTopics =
    activeCategory === 'all'
      ? ALL_TOPICS
      : ALL_TOPICS.filter((t) => t.category === activeCategory);

  return (
    <div className="flex min-h-screen">
      <DesktopSidebar />
      <div className="flex-1">
        <MobileNav />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">전체 토픽</h1>
            <p className="text-muted-foreground">
              GMAT QR에서 다루는 모든 수학 개념을 카테고리별로 확인하세요.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                'px-3 py-1.5 rounded-full text-sm font-medium transition-colors border',
                activeCategory === 'all'
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'hover:bg-accent border-border text-muted-foreground'
              )}
            >
              전체 ({ALL_TOPICS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = ALL_TOPICS.filter((t) => t.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-sm font-medium transition-colors border',
                    activeCategory === cat.id
                      ? cn(cat.color, 'text-white', cat.borderColor)
                      : cn('hover:bg-accent border-border text-muted-foreground')
                  )}
                >
                  {cat.nameKR} ({count})
                </button>
              );
            })}
          </div>

          {/* Topic cards */}
          <div className="grid gap-3">
            {filteredTopics.map((topic) => {
              const cat = getCategoryInfo(topic.category);
              const tp = progress[topic.slug];
              const problemCount = topic.problems.length;
              const answered = tp?.totalAttempted ?? 0;
              const correct = tp?.correctCount ?? 0;
              const progressPercent = problemCount > 0 ? (answered / problemCount) * 100 : 0;

              return (
                <Link
                  key={topic.slug}
                  href={topic.ready ? `/topics/${topic.slug}` : '#'}
                  onClick={!topic.ready ? (e) => e.preventDefault() : undefined}
                  className={cn(
                    'group flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl border transition-all',
                    topic.ready
                      ? 'hover:shadow-sm hover:border-foreground/20'
                      : 'opacity-50 cursor-not-allowed'
                  )}
                >
                  {/* Category dot + title */}
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <span className={cn('w-3 h-3 rounded-full shrink-0 mt-1', cat.color)} />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-medium">{topic.titleKR}</h3>
                        {!topic.ready && (
                          <Badge variant="secondary" className="text-[10px]">
                            Coming Soon
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{topic.titleEN}</p>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0 pl-6 sm:pl-0">
                    <Badge variant="outline" className={cn('text-[10px]', cat.textColor, cat.borderColor)}>
                      {cat.nameKR}
                    </Badge>
                    <span>~{topic.estimatedMinutes}분</span>
                    {problemCount > 0 && <span>{problemCount}문제</span>}
                    {tp && (
                      <span className="font-medium text-foreground">
                        {correct}/{answered}
                      </span>
                    )}
                  </div>

                  {/* Mini progress */}
                  {tp && problemCount > 0 && (
                    <div className="w-16 shrink-0 hidden sm:block">
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className={cn('h-full rounded-full', cat.color)}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
