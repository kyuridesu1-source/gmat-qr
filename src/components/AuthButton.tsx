'use client';

import { useSession, signOut } from 'next-auth/react';
import { useAuthModal } from '@/components/LoginModal';
import { Button } from '@/components/ui/button';
import { LogIn, LogOut } from 'lucide-react';

export function AuthButton() {
  const { data: session, status } = useSession();
  const { openLoginModal } = useAuthModal();

  if (status === 'loading') {
    return (
      <div className="px-3 py-2">
        <div className="h-8 w-full rounded-md bg-muted animate-pulse" />
      </div>
    );
  }

  if (session?.user) {
    return (
      <div className="px-3 py-2 space-y-2">
        <div className="flex items-center gap-2">
          {session.user.image && (
            <img
              src={session.user.image}
              alt=""
              className="w-6 h-6 rounded-full"
            />
          )}
          <span className="text-sm truncate">{session.user.name}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => signOut()}
          className="w-full justify-start gap-2 text-muted-foreground"
        >
          <LogOut className="w-4 h-4" />
          로그아웃
        </Button>
      </div>
    );
  }

  return (
    <div className="px-3 py-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => openLoginModal()}
        className="w-full justify-start gap-2"
      >
        <LogIn className="w-4 h-4" />
        로그인
      </Button>
    </div>
  );
}
