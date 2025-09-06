'use client'

import { useEffect, useRef, useState } from "react";
import Button from "../components/ui/button";
import { Card, CardBody, CardImg } from "../components/ui/card";
import { useRouter } from "next/navigation";
import { postTopic } from "../api/postTopic";
import axios from "axios";
import Header from "../components/ui/layout/header";

export default function SelectTopic() {
  const router = useRouter();
  const [selected, setSelected] = useState<number[]>([]);
  const once = useRef(false); // StrictMode에서 useEffect 두 번 실행 방지

  // ✅ 리다이렉트로 전달된 토큰 저장 + URL 정리
  useEffect(() => {
    if (once.current) return;
    once.current = true;

    const url = new URL(window.location.href);

    // 쿼리/해시 양쪽 모두에서 token|access_token 지원
    const fromQuery =
      url.searchParams.get('token') ||
      url.searchParams.get('access_token');

    const hashMatch =
      url.hash && /(?:^|[&#])(token|access_token)=([^&]+)/.exec(url.hash);
    const fromHash = hashMatch?.[2];

    let token = (fromQuery || fromHash || '').trim();
    if (token) {
      token = token.replace(/^Bearer\s+/i, ''); // "Bearer xxx" 대응
      localStorage.setItem('accessToken', token);
      console.log('[topics] saved accessToken:', token);

      // URL에서 토큰 흔적 제거 (보안/깔끔)
      url.searchParams.delete('token');
      url.searchParams.delete('access_token');
      let cleanedHash = url.hash.replace(/([&#]?)(token|access_token)=[^&]*/g, '');
      cleanedHash = cleanedHash.replace(/^#&/, '#').replace(/^#$/, '');
      window.history.replaceState(
        {},
        '',
        url.pathname +
          (url.search ? `?${url.searchParams.toString()}` : '') +
          (cleanedHash || '')
      );
    } else {
      console.log('[topics] no token in URL; localStorage =', localStorage.getItem('accessToken'));
    }
  }, []);

  const handleSendTopic = async () => {
    const token = localStorage.getItem('accessToken'); // 토큰 방식일 때만 확인
    const payload = { topicIds: [...new Set(selected)] };
  console.log("[SUBMIT] payload:", payload, "token?", !!token);
    if (!token) {
      alert('로그인이 필요합니다. (토큰 없음)');
      return;
    }
    try {
      const result = await postTopic(payload);
      console.log("[OK]", result);
      router.push("/home");
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        if (!err.response && err.code === "ERR_NETWORK") {
          alert("네트워크/CORS 문제로 요청이 차단되었습니다. (프리플라이트/리다이렉트 의심)");
        } else {
          alert(`요청 실패: ${err.response?.status ?? err.message}`);
        }
      } else {
        console.error("❌ handleSendTopic Unknown:", err);
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  function toggleSelect(index: number) {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      if (selected.length < 3) {
        setSelected([...selected, index]);
      }
    }
  }

  const cardList = [
    { src: "/politic.png",  alt: "politic",  name: "정치" },
    { src: "/economy.png",  alt: "economy",  name: "경제" },
    { src: "/society.png",  alt: "society",  name: "사회" },
    { src: "/world.png",    alt: "world",    name: "세계" },
    { src: "/life.png",     alt: "life",     name: "생활/문화" },
    { src: "/science.png",  alt: "science",  name: "IT/과학" },
  ];

  return (
    <div className="max-w-screen-sm min-h-screen mx-auto px-8 bg-[#f9fafb] flex flex-col items-center justify-center gap-6">
      <Header />
      <div className="h-10" />
      <div className="grid grid-cols-2 gap-4">
        {cardList.map((card, index) => {
          const active = selected.includes(index);
          return (
            <Card
              key={index}
              className={`flex flex-col items-center w-[clamp(110px,40vw,200px)] h-[clamp(130px,30vw,160px)] px-4 pt-4 pb-0 border-[2.5px] text-medium border-[#e5e7eb] rounded-[10px] gap-2 cursor-pointer hover:shadow-md ${active ? "border-deep-blue text-[#2353d9] bg-[#eff6ff]" : ""}`}
              onClick={() => toggleSelect(index)}
            >
              <CardImg src={card.src} alt={card.alt} className="w-[40px] h-auto" />
              <CardBody>
                <div className="flex flex-col items-center">
                  <p className="text-sm mb-2">{card.name}</p>
                  {active && (
                    <div className="flex justify-center items-center text-xs font-light w-[20px] h-[20px] text-white bg-deep-blue rounded-full">
                      ✔
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>

      <Button className="bg-deep-blue w-full text-white font-medium" onClick={() => router.push("/home")} type="button">
        토픽 설정 저장하기
      </Button>
    </div>
  );
}
