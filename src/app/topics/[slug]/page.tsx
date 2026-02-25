'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTopicBySlug, ALL_TOPICS } from '@/data/topics';
import { getCategoryInfo } from '@/data/types';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { DesktopSidebar, MobileNav } from '@/components/Sidebar';
import { PracticeProblems } from '@/components/PracticeProblems';
import { cn } from '@/lib/utils';

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

export default function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const topic = getTopicBySlug(slug);

  if (!topic || !topic.ready) {
    notFound();
  }

  const cat = getCategoryInfo(topic.category);

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
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">
              {topic.titleKR}
            </h1>
            <p className="text-lg text-muted-foreground">{topic.titleEN}</p>
          </div>

          {/* 1. Theory Content — 개념 요약 */}
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

          {/* 2. Intuition — 직관적 이해 */}
          {topic.intuition && (
            <>
              <section className="mb-10">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className={cn('w-1 h-5 rounded-full', cat.color)} />
                  직관적 이해
                </h2>
                <div className="space-y-4">
                  {/* Analogy callout */}
                  <div className={cn('rounded-xl border p-5', cat.bgColor, cat.borderColor)}>
                    <div className="flex items-start gap-3">
                      <span className="text-xl shrink-0 mt-0.5">💡</span>
                      <div>
                        <p className={cn('text-sm font-semibold mb-1.5', cat.textColor)}>
                          실생활 비유
                        </p>
                        <p className="text-sm leading-relaxed">{topic.intuition.analogy}</p>
                      </div>
                    </div>
                  </div>

                  {/* Pattern callout */}
                  {topic.intuition.pattern && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                      <div className="flex items-start gap-3">
                        <span className="text-xl shrink-0 mt-0.5">🔍</span>
                        <div>
                          <p className="text-sm font-semibold mb-1.5 text-amber-700">
                            패턴으로 이해하기
                          </p>
                          <p className="text-sm leading-relaxed">{topic.intuition.pattern}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Why it matters callout */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-start gap-3">
                      <span className="text-xl shrink-0 mt-0.5">🎯</span>
                      <div>
                        <p className="text-sm font-semibold mb-1.5 text-slate-700">
                          왜 GMAT에서 중요한가?
                        </p>
                        <p className="text-sm leading-relaxed">{topic.intuition.whyItMatters}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="my-8" />
            </>
          )}

          {/* 3. Key Formulas — 핵심 공식 */}
          {topic.formulas.length > 0 && (
            <>
              <section className="mb-10">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className={cn('w-1 h-5 rounded-full', cat.color)} />
                  핵심 공식
                </h2>
                <div className="grid gap-2">
                  {topic.formulas.map((formula, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        'px-4 py-3 rounded-lg border font-mono text-sm',
                        cat.bgColor,
                        cat.borderColor
                      )}
                    >
                      {formula}
                    </div>
                  ))}
                </div>
              </section>

              <Separator className="my-8" />
            </>
          )}

          {/* 4. Glossary — 용어 정리 */}
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
                          <td className="px-4 py-2.5 text-muted-foreground hidden sm:table-cell">
                            {entry.definition}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <Separator className="my-8" />
            </>
          )}

          {/* 5. Common Mistakes — 자주 하는 실수 */}
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

          {/* 6. Practice Problems — 예시 문제 */}
          {topic.problems.length > 0 && (
            <section className="mb-10">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className={cn('w-1 h-5 rounded-full', cat.color)} />
                예시 문제 ({topic.problems.length}문제)
              </h2>
              <PracticeProblems
                problems={topic.problems}
                topicSlug={topic.slug}
              />
            </section>
          )}

          <Separator className="my-8" />

          {/* Prev/Next navigation */}
          <div className="flex items-center justify-between">
            {prevTopic ? (
              <Link
                href={`/topics/${prevTopic.slug}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← {prevTopic.titleKR}
              </Link>
            ) : (
              <div />
            )}
            {nextTopic ? (
              <Link
                href={`/topics/${nextTopic.slug}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {nextTopic.titleKR} →
              </Link>
            ) : (
              <div />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
