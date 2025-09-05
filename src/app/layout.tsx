import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/header";
import Navigation from "./components/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { Viewport } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "News HanJum",
  description: "news feed app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>

        {/* 상단 헤더 컴포넌트 */}
        <Header />


        {/* 본문 영역 */}
        <main className="pt-20 pb-20 min-h-screen flex flex-col items-center max-w-[350px] mx-auto px-4" style={{ backgroundColor: '#F9FBFF' }}>
          {children}
        </main>


        {/* 하단 네비게이션 바 */}
        {/* 하단 네비게이션 컴포넌트 */}
        <Navigation />
      </body>
    </html>
  );
}
