import React from "react";

const Header = () => (
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
    </header>
  </div>
);

export default Header;