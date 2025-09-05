import React from "react";
import Link from "next/link";

const Navigation = () => (
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
      <Link href="/newspic" className="text-gray-700 flex flex-col items-center">
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
);

export default Navigation;