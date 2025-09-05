import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Viewport } from "next";
import "./globals.css";
import Header from "./components/ui/layout/header";
import Navigation from "./components/ui/layout/navigation";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
