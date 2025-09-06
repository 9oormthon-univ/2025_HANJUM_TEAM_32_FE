"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Icon, { Scrap } from "../../components/icones/icon";
import Button from "../../components/ui/button";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
} from "../../components/ui/card";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useEffect } from "react";
import { getNews } from "../../api/getNews";
import { PostNews } from "../../api/postNews";

function SwipePopup({ type }: { type: "like" | "next" }) {
  const isLike = type === "like";
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-4 text-center">
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white shadow-2xl ring-8 ring-white/20 flex items-center justify-center">
          {isLike ? (
            <ThumbsUp className="w-16 h-16 text-[#4262FF]" strokeWidth={2.5} />
          ) : (
            <ThumbsDown
              className="w-16 h-16 text-[#8397c4]"
              strokeWidth={2.5}
            />
          )}
        </div>
        <div className="text-white drop-shadow">
          <div className="text-lg font-extrabold">
            {isLike ? "좋아요!" : "패스!"}
          </div>
          <div className="text-sm font-semibold opacity-95">
            {isLike
              ? "관심 있는 뉴스로 선택해주셨어요!"
              : "다른 뉴스로 넘어가 볼까요?"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function News() {
  type ArticleItem = {
    id: number;
    title: string;
    description: string;
    articleUrl: string;
    pubDate: number;
    topic: string;
    category: string;
    imageUrl: string;
  };
  const router = useRouter();
  const [articleList, setArticleList] = React.useState<ArticleItem[]>([]);
  const [active, setActive] = React.useState(false);
  const NewsList = [
    {
      src: "/both.png",
      alt: "news1",
      title: "제목1",
      content: "내용1",
      href: "#",
    },
    {
      src: "/logo.png",
      alt: "news2",
      title: "제목2",
      content: "내용2",
      href: "#",
    },
    {
      src: "/world.png",
      alt: "news3",
      title: "제목3",
      content: "내용3",
      href: "#",
    },
    {
      src: "/life.png",
      alt: "news4",
      title: "제목4",
      content: "내용4",
      href: "#",
    },
    {
      src: "/society.png",
      alt: "news5",
      title: "제목5",
      content: "내용5",
      href: "#",
    },
  ];

  // --- carousel & swipe state ---
  const [current, setCurrent] = React.useState(0);
  const [popup, setPopup] = React.useState<null | "like" | "next">(null);
  const touchStart = React.useRef<{ x: number; y: number } | null>(null);
  const SWIPE_THRESHOLD = 50;

  const prev = () =>
    setCurrent(
      (i) => (i - 1 + (articleList.length || 1)) % (articleList.length || 1)
    ); // ★ 변경
  const next = () => setCurrent((i) => (i + 1) % (articleList.length || 1));

  // 스와이프 전용 팝업 로직
  const like = () => {
    setPopup("like");
    setTimeout(() => setPopup(null), 900);
  };
  const nextWithPopup = () => {
    setPopup("next");
    next(); // 팝업과 함께 즉시 다음 이동
    setTimeout(() => setPopup(null), 900);
  };

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;

    // 수평 스와이프만 인식 (스와이프일 때만 팝업)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx > 0) {
        // 오른쪽
        nextWithPopup(); // 패스 + 다음 카드로
      } else {
        // 왼쪽
        like(); // 좋아요 팝업만
      }
    }
    touchStart.current = null;
  };
  const handleScrap = () => {
    try {
      setActive((prev) => !prev);
      //await PostNews({ articleId: articleList[current]?.id });
    } catch (err) {
      console.error("Error posting scrap:", err);
    }
  };
  useEffect(() => {
    async function fetchNews() {
      try {
        setArticleList(await getNews());
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    }
    fetchNews();
  }, []);

  return (
    <div className="bg-[#f9fbff] min-h-screen max-w-screen-sm mx-auto px-8 flex flex-col gap-6 py-8">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-[30px]" onClick={() => router.push("/newspic")} />
          <div className="font-semibold">8월 30일 한줌</div>
        </div>
        <Button onClick={handleScrap} className="w-[50px]">
          <Scrap
            className={`w-[30px] h-auto ${active ? "text-deep-blue" : ""} `} // ★ 변경
          />
        </Button>
      </div>

      {/* AI 해설 보기 버튼 - 캐러셀 위 */}
      <div className="w-full flex justify-end items-center mb-2">
        <button
          onClick={() => {
            const id = articleList[current]?.id;
            if (id != null) router.push(`/newspic/news/${id}`); // ← ) 제거 + 현재 카드 id 사용
          }}
          className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#DBE4FE] text-xs font-semibold shadow hover:bg-[#dbe4fe] transition-all"
          disabled={articleList.length === 0}
        >
          💡AI 해설 보기
        </button>
      </div>

      {/* 캐러셀 영역 (단일 카드 + 스와이프 인식) */}
      <div
        className="relative w-full rounded-2xl flex overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {articleList.length === 0 ? (
          // 빈 상태(로딩) UI (원한다면 스켈레톤으로 대체)
          <Card className="w-full h-[350px] bg-white rounded-[10px] shadow-2xl" />
        ) : (
          articleList.map((article, idx) => (
            <Card
              key={article.id}
              className={`w-full h-[350px] bg-white rounded-[10px] shadow-2xl transition-opacity duration-300
          ${
            idx === current
              ? "opacity-100 relative"
              : "opacity-0 pointer-events-none absolute inset-0"
          }`} // ★ 변경
            >
              <div className="overflow-hidden rounded-t-[10px]">
                <CardImg
                  src={article.imageUrl}
                  alt={"article image"}
                  className="w-full"
                />
              </div>
              <CardHeader className="flex justify-between items-start">
                {article.title}
              </CardHeader>
              <CardBody>{article.description}</CardBody>
              <CardFooter className="text-center text-sm underline-offset-1">
                <a href={article.articleUrl}>원문보기</a>
              </CardFooter>
            </Card>
          ))
        )}

        {popup && <SwipePopup type={popup} />}
      </div>

      {/* 인디케이터 (선택 사항) */}
      <div className="flex justify-center gap-1">
        {articleList.map(
          (
            _,
            i // ★ 변경
          ) => (
            <span
              key={i}
              className={`h-1.5 w-4 rounded-full ${
                i === current ? "bg-[#8397c4]" : "bg-[#dbe4fe]"
              }`}
            />
          )
        )}
      </div>

      {/* 버튼: 팝업 없이 이동만! */}
      <div className="flex justify-center items-center gap-4">
        <Button
          onClick={prev}
          className="w-[50px] h-[50px] rounded-full bg-light-blue flex justify-center items-center"
        >
          <Icon stroke="light-blue" fill="#8397c4" />
        </Button>
        <Button
          onClick={next}
          className="w-[50px] h-[50px] rounded-full bg-deep-blue flex justify-center items-center"
        >
          <Icon stroke="deep-blue" className="rotate-180" fill="white" />
        </Button>
      </div>
    </div>
  );
}
