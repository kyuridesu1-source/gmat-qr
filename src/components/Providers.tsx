'use client';

import { SessionProvider } from 'next-auth/react';
import { AuthModalProvider } from '@/components/LoginModal';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthModalProvider>{children}</AuthModalProvider>
    </SessionProvider>
  );
}
