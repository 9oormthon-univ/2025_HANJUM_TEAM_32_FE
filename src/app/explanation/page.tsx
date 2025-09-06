'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-[#f8f9fb] min-h-screen max-w-screen-sm mx-auto px-8 flex flex-col py-8 font-sans">

      {/* 헤더 */}
      <header className="flex items-center gap-2 py-2 px-4 bg-[#f8f9fb] text-[#222] font-semibold text-[16px]">
        <Link href="/newspic/news">
          <span className="text-[20px] mr-2 cursor-pointer">←</span>
        </Link>
        <span className="text-[15px] font-medium">8월 30일 한줌</span>
      </header>

      <main className="flex flex-col items-center pt-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[15px] font-medium text-[#222]">&quot;이 뉴스, 왜 나왔을까요?&quot;</span>
          <Image src="/mascot.svg" alt="마스코트" width={48} height={48} />
        </div>
        <div className="relative flex justify-end w-full max-w-[300px]">
          {/* speechBubble.svg 배경에 답변 영역 */}
          <Image src="/speechBubble.svg" alt="말풍선" width={300} height={400} className="absolute top-0 left-0 z-0" />
          <div className="absolute top-0 left-0 w-full h-full flex items-start p-8 z-10 text-[#222] text-[15px]">
            {/* 답변 내용이 들어갈 영역 */}
          </div>
        </div>
      </main>
    </div>
  );
}
