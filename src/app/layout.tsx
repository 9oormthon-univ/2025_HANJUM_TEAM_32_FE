import type { Metadata } from "next";
import Link from "next/link";
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

        {/* 상단 헤더 */}
        <div className="w-full flex justify-center fixed top-0 left-0 z-10 bg-gray-50">
          <header className="h-16 flex items-center justify-between pl-4 pr-6 bg-white max-w-[350px] w-full">
            <div className="flex items-center gap-1 justify-start w-full">
              <img src="/logo.png" alt="로고" className="h-10 w-10" />
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontStyle: 'Medium',
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#222',
                }}
              >
                뉴스한줌
              </span>
            </div>
            { }
          </header>
        </div>


        {/* 본문 영역 */}
        <main className="pt-20 pb-20 min-h-screen flex flex-col items-center max-w-[350px] mx-auto px-4" style={{ backgroundColor: '#F9FBFF' }}>
          {children}
        </main>


        {/* 하단 네비게이션 바 */}
        <div className="w-full flex justify-center fixed bottom-0 left-0 z-10 bg-gray-50">
          <nav className="h-16 flex items-center justify-around bg-white shadow-inner max-w-[350px] w-full">
            <Link href="/home" className="text-gray-700 flex flex-col items-center">
              <img src="/home.png" alt="홈" className="h-6 w-6 mb-1" />
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                }}
              >홈</span>
            </Link>
            <Link href="/newspick" className="text-gray-700 flex flex-col items-center">
              <img src="/document.png" alt="뉴스픽" className="h-6 w-6 mb-1" />
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                }}
              >뉴스픽</span>
            </Link>
            <Link href="/scrap" className="text-gray-700 flex flex-col items-center">
              <img src="/tag.png" alt="스크랩" className="h-6 w-6 mb-1" />
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                }}
              >스크랩</span>
            </Link>
          </nav>
        </div>
      </body>
    </html>
  );
}
