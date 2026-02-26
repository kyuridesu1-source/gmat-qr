'use client';

import Link from 'next/link';
import { ALL_TOPICS } from '@/data/topics';
import { CATEGORIES, getCategoryInfo } from '@/data/types';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { DesktopSidebar, MobileNav } from '@/components/Sidebar';
import { useEffect, useState } from 'react';
import { getAllProgress, type TopicProgress } from '@/lib/progress';
import { isFreeTopic } from '@/lib/auth-config';
import { useSession } from 'next-auth/react';
import { useAuthModal } from '@/components/LoginModal';
import { cn } from '@/lib/utils';
import { Lock } from 'lucide-react';

export default function HomePage() {
  const [progress, setProgress] = useState<Record<string, TopicProgress>>({});
  const { data: session } = useSession();
  const { openLoginModal } = useAuthModal();

  useEffect(() => {
    setProgress(getAllProgress());
  }, []);

  const readyTopics = ALL_TOPICS.filter((t) => t.ready);
  const totalProblems = readyTopics.reduce((sum, t) => sum + t.problems.length, 0);
  const totalAnswered = Object.values(progress).reduce((sum, p) => sum + p.totalAttempted, 0);
  const totalCorrect = Object.values(progress).reduce((sum, p) => sum + p.correctCount, 0);

  return (
    <div className="flex min-h-screen">
      <DesktopSidebar />
      <div className="flex-1">
        <MobileNav />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Hero */}
          <section className="mb-12">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-xs">
                GMAT Quantitative Reasoning
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                GMAT 수학, 빠르게 정리하세요
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                한국 MBA 지원자를 위한 GMAT QR 핵심 이론 정리.
                학원처럼 느리게 배우지 말고, <strong>개념 → 공식 → 문제풀이</strong>로 빠르게 복습하세요.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/topics">
                  <button className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                    학습 시작하기 →
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* Overall progress */}
          {totalAnswered > 0 && (
            <section className="mb-10 p-5 rounded-xl border bg-card">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold">나의 학습 현황</h2>
                <span className="text-sm text-muted-foreground">
                  {totalCorrect}/{totalAnswered} 정답 ({totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0}%)
                </span>
              </div>
              <Progress value={(totalAnswered / totalProblems) * 100} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                전체 {totalProblems}문제 중 {totalAnswered}문제 풀이 완료
              </p>
            </section>
          )}

          {/* Category grid */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6">카테고리별 토픽</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {CATEGORIES.map((cat) => {
                const topics = ALL_TOPICS.filter((t) => t.category === cat.id);
                const readyCount = topics.filter((t) => t.ready).length;
                const totalMins = topics.reduce((sum, t) => sum + t.estimatedMinutes, 0);
                const catProblems = topics.reduce((sum, t) => sum + t.problems.length, 0);
                const catAnswered = topics.reduce((sum, t) => {
                  const p = progress[t.slug];
                  return sum + (p?.totalAttempted ?? 0);
                }, 0);

                return (
                  <div
                    key={cat.id}
                    className={cn(
                      'rounded-xl border p-5 transition-colors',
                      cat.bgColor,
                      cat.borderColor
                    )}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className={cn('font-semibold', cat.textColor)}>
                          {cat.nameKR}
                        </h3>
                        <p className="text-xs text-muted-foreground">{cat.nameEN}</p>
                      </div>
                      <span className="text-2xl">{cat.icon}</span>
                    </div>
                    <div className="space-y-1.5 mb-3">
                      {topics.map((topic) => {
                        const isPremium = !isFreeTopic(topic.slug);
                        const isLocked = isPremium && !session;

                        return (
                          <Link
                            key={topic.slug}
                            href={topic.ready && !isLocked ? `/topics/${topic.slug}` : '#'}
                            onClick={(e) => {
                              if (!topic.ready) { e.preventDefault(); return; }
                              if (isLocked) { e.preventDefault(); openLoginModal(topic.slug); return; }
                            }}
                            className={cn(
                              'flex items-center gap-2 text-sm py-0.5',
                              topic.ready
                                ? 'hover:underline'
                                : 'text-muted-foreground/50 cursor-not-allowed'
                            )}
                          >
                            <span className={cn(
                              'w-1.5 h-1.5 rounded-full shrink-0',
                              topic.ready ? cat.color : 'bg-muted-foreground/30'
                            )} />
                            <span className="truncate">{topic.titleKR}</span>
                            {!topic.ready && (
                              <span className="text-[10px] ml-auto shrink-0 text-muted-foreground/40">준비중</span>
                            )}
                            {isLocked && topic.ready && (
                              <Lock className="w-3 h-3 ml-auto shrink-0 text-muted-foreground/60" />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border/50">
                      <span>{readyCount}/{topics.length} 토픽</span>
                      <span>~{totalMins}분</span>
                      {catAnswered > 0 && (
                        <span>{catAnswered}/{catProblems} 풀이</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Time estimate section */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-2">얼마나 걸려요?</h2>
            <p className="text-sm text-muted-foreground mb-6">
              각 토픽은 15~30분 내에 빠르게 학습할 수 있도록 설계되었습니다.
            </p>
            <div className="grid gap-2">
              {readyTopics.map((topic) => {
                const cat = getCategoryInfo(topic.category);
                const tp = progress[topic.slug];
                const isPremium = !isFreeTopic(topic.slug);
                const isLocked = isPremium && !session;

                return (
                  <Link
                    key={topic.slug}
                    href={isLocked ? '#' : `/topics/${topic.slug}`}
                    onClick={isLocked ? (e) => { e.preventDefault(); openLoginModal(topic.slug); } : undefined}
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors"
                  >
                    <span className={cn('w-2 h-2 rounded-full shrink-0', cat.color)} />
                    <span className="flex-1 text-sm font-medium">{topic.titleKR}</span>
                    <span className="text-xs text-muted-foreground hidden sm:inline">{topic.titleEN}</span>
                    <span className="text-xs text-muted-foreground shrink-0">~{topic.estimatedMinutes}분</span>
                    <span className="text-xs text-muted-foreground shrink-0">{topic.problems.length}문제</span>
                    {isLocked && (
                      <Lock className="w-3.5 h-3.5 text-muted-foreground/60 shrink-0" />
                    )}
                    {!isLocked && tp && (
                      <Badge variant="secondary" className="text-[10px]">
                        {tp.correctCount}/{tp.totalAttempted}
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-xs text-muted-foreground pt-8 border-t">
            <p>GMAT QR 이론 정리 — 한국 MBA 지원자를 위한 빠른 수학 복습</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
