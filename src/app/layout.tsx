import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GMAT QR 이론 정리 | 한국 MBA 지원자를 위한 수학 개념 복습",
  description:
    "GMAT Quantitative Reasoning 핵심 이론을 빠르게 복습하세요. 산술, 대수, 문장제, 기하, 자료 해석 — 한국어로 쉽게 정리된 개념과 연습 문제.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
