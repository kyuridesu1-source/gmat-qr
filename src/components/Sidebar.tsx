'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ALL_TOPICS } from '@/data/topics';
import { CATEGORIES, type Category } from '@/data/types';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { getAllProgress, type TopicProgress } from '@/lib/progress';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [progress, setProgress] = useState<Record<string, TopicProgress>>({});

  useEffect(() => {
    setProgress(getAllProgress());
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <Link href="/" onClick={onNavigate} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">QR</span>
          </div>
          <div>
            <p className="font-semibold text-sm leading-tight">GMAT QR</p>
            <p className="text-[10px] text-muted-foreground">이론 정리</p>
          </div>
        </Link>
      </div>

      <ScrollArea className="flex-1">
        <nav className="p-3 space-y-4">
          <Link
            href="/"
            onClick={onNavigate}
            className={cn(
              'flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors',
              pathname === '/'
                ? 'bg-accent font-medium'
                : 'hover:bg-accent/50 text-muted-foreground'
            )}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path d="M2 6L8 1.5L14 6V13.5C14 14.0523 13.5523 14.5 13 14.5H3C2.44772 14.5 2 14.0523 2 13.5V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            홈
          </Link>

          <Link
            href="/topics"
            onClick={onNavigate}
            className={cn(
              'flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors',
              pathname === '/topics'
                ? 'bg-accent font-medium'
                : 'hover:bg-accent/50 text-muted-foreground'
            )}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path d="M2 4H14M2 8H14M2 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            전체 토픽
          </Link>

          <div className="h-px bg-border" />

          {CATEGORIES.map((cat) => {
            const topics = ALL_TOPICS.filter((t) => t.category === cat.id);
            return (
              <div key={cat.id}>
                <p className={cn('px-3 py-1 text-xs font-semibold uppercase tracking-wider', cat.textColor)}>
                  {cat.nameKR} {cat.nameEN}
                </p>
                <div className="mt-1 space-y-0.5">
                  {topics.map((topic) => {
                    const isActive = pathname === `/topics/${topic.slug}`;
                    const tp = progress[topic.slug];
                    const done = tp ? tp.totalAttempted >= topic.problems.length && topic.problems.length > 0 : false;
                    return (
                      <Link
                        key={topic.slug}
                        href={topic.ready ? `/topics/${topic.slug}` : '#'}
                        onClick={topic.ready ? onNavigate : (e) => e.preventDefault()}
                        className={cn(
                          'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors',
                          isActive
                            ? 'bg-accent font-medium'
                            : topic.ready
                            ? 'hover:bg-accent/50 text-muted-foreground'
                            : 'text-muted-foreground/40 cursor-not-allowed'
                        )}
                      >
                        <span className="truncate flex-1">{topic.titleKR}</span>
                        {!topic.ready && (
                          <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded shrink-0">
                            준비중
                          </span>
                        )}
                        {done && (
                          <span className="text-green-500 shrink-0">✓</span>
                        )}
                        {tp && !done && topic.ready && (
                          <span className="text-[10px] text-muted-foreground shrink-0">
                            {tp.totalAttempted}/{topic.problems.length}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
}

export function DesktopSidebar() {
  return (
    <aside className="hidden lg:flex w-64 border-r bg-card h-screen sticky top-0 flex-col">
      <SidebarContent />
    </aside>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b">
      <div className="flex items-center justify-between px-4 h-14">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">QR</span>
          </div>
          <span className="font-semibold text-sm">GMAT QR 이론 정리</span>
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <SheetTitle className="sr-only">내비게이션 메뉴</SheetTitle>
            <SidebarContent onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
