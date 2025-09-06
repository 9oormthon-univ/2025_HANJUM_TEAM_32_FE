"use client";

import { useEffect, useState } from "react";
import { GalaBell, GgTrending } from "../components/icones/icon";
import Button from "../components/ui/button";
import { CardHeader, Card, CardBody } from "../components/ui/card";
import PopularTopic from "../components/ui/popularTopic";
import { getPopularTopic, getWeeklyTopic } from "../api/getTopic";
import { GetAnalysis } from "../api/getAnalysis";
import Header from "../components/ui/layout/header";
import Navigation from "../components/ui/layout/navigation";

export default function Home() {
  type PopularItem = { name: string; topicId: number; rank: number };
  type AnalysisItem = {
    mostViewedCategory: string;
    percentage: number;
    averageReadTime: string;
    weeklyScrapCount: number;
    recommendationMessage: string;
  };
  const [PopularTopics, setPopularTopics] = useState<PopularItem[]>([]);
  const [Analysis, setAnalysis] = useState<AnalysisItem>();
  const topicList = [
    {
      topic: "코로나19",
      description: "코로나19 관련 최신 뉴스와 정보",
    },
    {
      topic: "기후 변화",
      description: "기후 변화와 환경 보호에 관한 뉴스",
    },
    {
      topic: "경제 회복",
      description: "경제 회복과 관련된 주요 이슈",
    },
    {
      topic: "정치 동향",
      description: "국내외 정치 동향과 분석",
    },
    {
      topic: "기술 혁신",
      description: "최신 기술 혁신과 트렌드",
    },
  ];
  useEffect(() => {
    async function fetchTopic() {
      try {
        const weeklyTopic = await getWeeklyTopic();
        setAnalysis(await GetAnalysis());
        setPopularTopics(await getPopularTopic());
      } catch (err) {
        console.error("Error fetching weekly topics:", err);
      }
    }

    fetchTopic();
  }, []);
  return (
    <div className="bg-[#f9fbff] min-h-screen max-w-screen-sm mx-auto px-8 flex flex-col gap-6 py-8">
      <Header />
      <div className="h-8" />
      <div className="flex items-center gap-4 py-4">
        <div className="bg-[#f1e8fd] rounded-full w-max h-full p-4">
          <GgTrending
            stroke="#883ae1"
            fill="#883ae1"
            className="w-[20px] h-auto bg-transient"
          />
        </div>
        <div>
          <div className="text-lg font-semibold">뉴스 트렌드</div>
          <div className="text-sm text-[#545d6a]">실시간 동향 분석</div>
        </div>
      </div>
      <div>
        <Button className="border-[#edeef1] border-[2px] bg-white rounded-[15px] w-[80px] h-auto">
          이번 주
        </Button>
      </div>
      <Card className="bg-white w-full rounded-[10px] h-max ">
        <CardHeader className="font-semibold">이번 주 토픽 트렌드</CardHeader>
        <img src="/pic.png" className="w- auto h-[300px]" />
      </Card>
      <Card className="bg-white w-full h-max rounded-[10px] ">
        <CardHeader className="font-semibold">인기 토픽 TOP 5</CardHeader>
        <CardBody>
          {PopularTopics.map((topic, index) => {
            return (
              <PopularTopic
                key={index}
                rank={topic.rank}
                className={`${index === 4 ? "border-0" : ""}`}
                topic={topic.name}
              />
            );
          })}
        </CardBody>
      </Card>
      <Card className="bg-white w-full h-max rounded-[10px] mb-16 p-3">
        <CardHeader className="font-semibold">나의 관심사 분석</CardHeader>
        <CardBody>
          <div>
            <div className="flex justify-between mb-4">
              <div className="text-[#667481]">가장 많이 본 카테고리</div>
              <div className="text-deep-blue font-semibold ">
                
                AI
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="text-[#667481]">평균 읽기 시간</div>
              <div className="text-[#9333e9] font-semibold ">
                4분 20초
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="text-[#667481] ">이번주 스크랩</div>
              <div className="text-[#25a854] font-semibold">
                3회
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-bl from-[#F0F5FE] to-[#F9F5FE] rounded-[10px] p-4">
            <div className="flex gap-2 mb-2 items-center">
              <GalaBell stroke="#3557ff" />
              <div className="text-[#3557ff] font-medium">추천</div>
            </div>

            <div className="text-[#4262FF] text-sm">
              {Analysis?.recommendationMessage}
            </div>
          </div>
        </CardBody>
      </Card>
      
      <Navigation />
    </div>
  );
}
