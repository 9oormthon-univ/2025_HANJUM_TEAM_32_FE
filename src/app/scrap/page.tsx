"use client";
import { useState } from "react";
import { Card, CardImg, CardHeader, CardBody, CardFooter } from "../components/ui/card";
import { FaRegBookmark } from "react-icons/fa";

const categories = ["전체", "AI", "비즈니스", "기술"];
const cards = [
  {
    img: "/document.png",
    title: "AI 뉴스 카드",
    date: "2025-09-05",
    bookmarked: true,
    category: "AI",
  },
  {
    img: "/document.png",
    title: "비즈니스 뉴스 카드",
    date: "2025-09-05",
    bookmarked: false,
    category: "비즈니스",
  },
  {
    img: "/document.png",
    title: "기술 뉴스 카드",
    date: "2025-09-05",
    bookmarked: false,
    category: "기술",
  },
  {
    img: "/document.png",
    title: "전체 뉴스 카드",
    date: "2025-09-05",
    bookmarked: true,
    category: "전체",
  },
];

export default function ScrapPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const filteredCards = selectedCategory === "전체"
    ? cards
    : cards.filter(card => card.category === selectedCategory);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 px-4 pb-8">
      {/* 상단 정보 */}
      <div className="w-full max-w-[350px] pt-0 pb-2 flex items-center gap-3">
        <FaRegBookmark className="text-2xl text-blue-700" />
        <div>
          <div className="font-bold text-base">나의 스크랩북</div>
          <div className="text-xs text-gray-500">저장한 뉴스 {filteredCards.length}개</div>
        </div>
      </div>


      {/* 카테고리 필터 */}
      <div className="w-full max-w-[350px] flex gap-2 pt-2 pb-2 mb-4 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1 rounded-full text-sm font-medium border transition ${selectedCategory === cat ? "bg-blue-700 text-white border-blue-700" : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-blue-100"}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>


      {/* 카드 리스트 */}
      <div className="w-full max-w-[350px] flex flex-col gap-6">
        {filteredCards.map((card, idx) => (
          <Card key={idx} className="bg-white rounded-[10px] shadow-md">
            <div className="relative">
              <CardImg src={card.img} alt="스크랩 이미지" className="w-full h-24 object-cover" />

              {/* 북마크 아이콘 우측 하단 */}
              <FaRegBookmark className={`absolute bottom-2 right-3 text-xl ${card.bookmarked ? "text-blue-700" : "text-gray-300"}`} />
            </div>
            <CardHeader className="font-semibold text-base">{card.title}</CardHeader>
            <CardFooter>
              <span className="text-xs text-gray-400">{card.date}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}