'use client';

import Link from 'next/link';
import { getTopicBySlug, ALL_TOPICS } from '@/data/topics';
import { getCategoryInfo } from '@/data/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DesktopSidebar, MobileNav } from '@/components/Sidebar';
import { PracticeProblems } from '@/components/PracticeProblems';
import { cn } from '@/lib/utils';
import { isFreeTopic } from '@/lib/auth-config';
import { useSession } from 'next-auth/react';
import { useAuthModal } from '@/components/LoginModal';
import { Lock } from 'lucide-react';

function renderTheoryContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    key++;
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key} className="text-lg font-semibold mt-6 mb-2">
          {renderInline(line.slice(4))}
        </h3>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key} className="text-xl font-bold mt-8 mb-3">
          {renderInline(line.slice(3))}
        </h2>
      );
    } else if (line.startsWith('# ')) {
      elements.push(
        <h1 key={key} className="text-2xl font-bold mt-8 mb-3">
          {renderInline(line.slice(2))}
        </h1>
      );
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={key} className="ml-4 text-sm leading-relaxed list-disc">
          {renderInline(line.slice(2))}
        </li>
      );
    } else if (line.trim() === '') {
      elements.push(<div key={key} className="h-2" />);
    } else {
      elements.push(
        <p key={key} className="text-sm leading-relaxed">
          {renderInline(line)}
        </p>
      );
    }
  }

  return elements;
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function TopicPageContent({ slug }: { slug: string }) {
  const { data: session, status } = useSession();
  const { openLoginModal } = useAuthModal();
  const topic = getTopicBySlug(slug);

  if (!topic || !topic.ready) {
    return null;
  }

  const cat = getCategoryInfo(topic.category);
  const isPremium = !isFreeTopic(slug);
  const isLocked = isPremium && !session && status !== 'loading';

  const readyTopics = ALL_TOPICS.filter((t) => t.ready);
  const currentIdx = readyTopics.findIndex((t) => t.slug === topic.slug);
  const prevTopic = currentIdx > 0 ? readyTopics[currentIdx - 1] : null;
  const nextTopic = currentIdx < readyTopics.length - 1 ? readyTopics[currentIdx + 1] : null;

  return (
    <div className="flex min-h-screen">
      <DesktopSidebar />
      <div className="flex-1">
        <MobileNav />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">홈</Link>
            <span>/</span>
            <Link href="/topics" className="hover:text-foreground transition-colors">토픽</Link>
            <span>/</span>
            <span className={cat.textColor}>{cat.nameKR}</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className={cn('text-xs', cat.textColor, cat.borderColor)}>
                {cat.nameKR} {cat.nameEN}
              </Badge>
              <span className="text-xs text-muted-foreground">~{topic.estimatedMinutes}분</span>
              {isPremium && (
                <Badge variant="secondary" className="text-[10px] gap-1">
                  <Lock className="w-3 h-3" />
                  프리미엄
                </Badge>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">
              {topic.titleKR}
            </h1>
            <p className="text-lg text-muted-foreground">{topic.titleEN}</p>
          </div>

          {/* Loading state */}
          {isPremium && status === 'loading' && (
            <div className="flex items-center justify-center py-20">
              <div className="h-8 w-8 border-4 border-muted border-t-primary rounded-full animate-spin" />
            </div>
          )}

          {/* Locked view */}
          {isLocked && (
            <div className="relative">
              <div className="max-h-64 overflow-hidden relative">
                <div className="blur-sm pointer-events-none select-none">
                  <section className="mb-10">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className={cn('w-1 h-5 rounded-full', cat.color)} />
                      개념 요약
                    </h2>
                    <div className="prose-sm">
                      {renderTheoryContent(topic.theoryContent.slice(0, 300) + '...')}
                    </div>
                  </section>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
              </div>

              <div className="text-center py-12 space-y-4 border rounded-xl bg-card mt-4">
                <Lock className="w-12 h-12 mx-auto text-muted-foreground" />
                <h3 className="text-xl font-semibold">로그인이 필요한 토픽입니다</h3>
                <p className="text-muted-foreground max-w-sm mx-auto text-sm">
                  이 토픽의 이론, 공식, 연습문제를 보려면
                  <br />
                  Google 계정으로 로그인하세요.
                </p>
                <Button
                  onClick={() => openLoginModal(slug)}
                  size="lg"
                  className="gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google로 로그인하고 학습하기
                </Button>
                <p className="text-xs text-muted-foreground">
                  무료 토픽 10개는 로그인 없이 이용할 수 있습니다
                </p>
              </div>
            </div>
          )}

          {/* Unlocked view */}
          {!isLocked && !(isPremium && status === 'loading') && (
            <>
              {/* 1. Theory Content */}
              <section className="mb-10">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className={cn('w-1 h-5 rounded-full', cat.color)} />
                  개념 요약
                </h2>
                <div className="prose-sm">
                  {renderTheoryContent(topic.theoryContent)}
                </div>
              </section>

              <Separator className="my-8" />

              {/* 2. Intuition */}
              {topic.intuition && (
                <>
                  <section className="mb-10">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className={cn('w-1 h-5 rounded-full', cat.color)} />
                      직관적 이해
                    </h2>
                    <div className="space-y-4">
                      <div className={cn('rounded-xl border p-5', cat.bgColor, cat.borderColor)}>
                        <div className="flex items-start gap-3">
                          <span className="text-xl shrink-0 mt-0.5">💡</span>
                          <div>
                            <p className={cn('text-sm font-semibold mb-1.5', cat.textColor)}>실생활 비유</p>
                            <p className="text-sm leading-relaxed">{topic.intuition.analogy}</p>
                          </div>
                        </div>
                      </div>
                      {topic.intuition.pattern && (
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                          <div className="flex items-start gap-3">
                            <span className="text-xl shrink-0 mt-0.5">🔍</span>
                            <div>
                              <p className="text-sm font-semibold mb-1.5 text-amber-700">패턴으로 이해하기</p>
                              <p className="text-sm leading-relaxed">{topic.intuition.pattern}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                        <div className="flex items-start gap-3">
                          <span className="text-xl shrink-0 mt-0.5">🎯</span>
                          <div>
                            <p className="text-sm font-semibold mb-1.5 text-slate-700">왜 GMAT에서 중요한가?</p>
                            <p className="text-sm leading-relaxed">{topic.intuition.whyItMatters}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <Separator className="my-8" />
                </>
              )}

              {/* 3. Key Formulas */}
              {topic.formulas.length > 0 && (
                <>
                  <section className="mb-10">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className={cn('w-1 h-5 rounded-full', cat.color)} />
                      핵심 공식
                    </h2>
                    <div className="grid gap-2">
                      {topic.formulas.map((formula, idx) => (
                        <div key={idx} className={cn('px-4 py-3 rounded-lg border font-mono text-sm', cat.bgColor, cat.borderColor)}>
                          {formula}
                        </div>
                      ))}
                    </div>
                  </section>
                  <Separator className="my-8" />
                </>
              )}

              {/* 4. Glossary */}
              {topic.glossary.length > 0 && (
                <>
                  <section className="mb-10">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className={cn('w-1 h-5 rounded-full', cat.color)} />
                      용어 정리
                    </h2>
                    <div className="border rounded-xl overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="text-left px-4 py-2.5 font-medium">English</th>
                            <th className="text-left px-4 py-2.5 font-medium">한국어</th>
                            <th className="text-left px-4 py-2.5 font-medium hidden sm:table-cell">설명</th>
                          </tr>
                        </thead>
                        <tbody>
                          {topic.glossary.map((entry, idx) => (
                            <tr key={idx} className="border-t">
                              <td className="px-4 py-2.5 font-medium">{entry.en}</td>
                              <td className="px-4 py-2.5">{entry.kr}</td>
                              <td className="px-4 py-2.5 text-muted-foreground hidden sm:table-cell">{entry.definition}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                  <Separator className="my-8" />
                </>
              )}

              {/* 5. Common Mistakes */}
              {topic.commonMistakes && topic.commonMistakes.length > 0 && (
                <>
                  <section className="mb-10">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className={cn('w-1 h-5 rounded-full', cat.color)} />
                      자주 하는 실수
                    </h2>
                    <div className="space-y-4">
                      {topic.commonMistakes.map((mistake, idx) => (
                        <div key={idx} className="rounded-xl border bg-card overflow-hidden">
                          <div className="bg-red-50 border-b border-red-100 px-5 py-3">
                            <p className="text-sm">
                              <span className="font-semibold text-red-600 mr-2">❌ 틀린 생각:</span>
                              <span className="text-red-800">&ldquo;{mistake.wrong}&rdquo;</span>
                            </p>
                          </div>
                          <div className="bg-green-50 border-b border-green-100 px-5 py-3">
                            <p className="text-sm">
                              <span className="font-semibold text-green-600 mr-2">✅ 올바른 이해:</span>
                              <span className="text-green-800">{mistake.correct}</span>
                            </p>
                          </div>
                          <div className="bg-blue-50 px-5 py-3">
                            <p className="text-sm">
                              <span className="font-semibold text-blue-600 mr-2">💡 GMAT 출제 포인트:</span>
                              <span className="text-blue-800">{mistake.examTip}</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  <Separator className="my-8" />
                </>
              )}

              {/* 6. Practice Problems */}
              {topic.problems.length > 0 && (
                <section className="mb-10">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className={cn('w-1 h-5 rounded-full', cat.color)} />
                    예시 문제 ({topic.problems.length}문제)
                  </h2>
                  <PracticeProblems problems={topic.problems} topicSlug={topic.slug} />
                </section>
              )}

              <Separator className="my-8" />

              {/* Prev/Next */}
              <div className="flex items-center justify-between">
                {prevTopic ? (
                  <Link href={`/topics/${prevTopic.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    ← {prevTopic.titleKR}
                  </Link>
                ) : <div />}
                {nextTopic ? (
                  <Link href={`/topics/${nextTopic.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {nextTopic.titleKR} →
                  </Link>
                ) : <div />}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
