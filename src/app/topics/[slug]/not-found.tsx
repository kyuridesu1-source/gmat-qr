import Link from 'next/link';

export default function TopicNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-muted-foreground">토픽을 찾을 수 없습니다.</p>
        <Link
          href="/topics"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          전체 토픽 보기
        </Link>
      </div>
    </div>
  );
}
