'use client'

import { useState } from "react";
import Button from "../components/ui/button";
import { Card, CardBody, CardImg } from "../components/ui/card";
import { useRouter } from "next/navigation";


export default function selectTopic() {
  const router = useRouter();
  const [selected, setSelected] = useState<Number[]>([]);
  const cardList = [
    {
      src: "/politic.png",
      alt: "politic",
      name: "정치",
    },
    {
      src: "/economy.png",
      alt: "economy",
      name: "경제",
    },
    {
      src: "/society.png",
      alt: "society",
      name: "사회",
    },
    {
      src: "/world.png",
      alt: "world",
      name: "세계",
    },
    {
      src: "/life.png",
      alt: "life",
      name: "생활/문화",
    },
    {
      src: "/science.png",
      alt: "science",
      name: "IT/과학",
    },
  ];
  function toggleSelect(index: Number) {
    if(selected.includes(index)){
      setSelected(selected.filter((i) => i !== index));
    }
    else{
      if(selected.length < 3){
        setSelected([...selected, index]);
      }
    }
  }
  return (
    <div className="max-w-screen-sm min-h-screen mx-auto px-8 bg-[#f9fafb] flex flex-col items-center justify-center gap-6">
      {/* Header */}
      <div className="grid grid-cols-2 gap-4">
        {cardList.map((card, index) => {
          const active = selected.includes(index);
          return (
            <Card key={index} className={`flex flex-col items-center w-[clamp(110px,40vw,200px)] h-[clamp(130px,30vw,160px)] px-4 pt-4 pb-0 border-[2.5px] text-medium border-[#e5e7eb] rounded-[10px] gap-2 cursor-pointer hover:shadow-md ${active? "border-deep-blue text-[#2353d9] bg-[#eff6ff]":""} `} onClick={() => toggleSelect(index)}>
              <CardImg
                src={card.src}
                alt={card.src}
                className={`w-[40px] h-auto`}
              />
              <CardBody>
                <div className="flex flex-col items-center">
                  <p className="text-sm mb-2">{card.name}</p>
                  {active && <div className="flex justify-center items-center text-xs font-light  w-[20px] h-[20px] text-white bg-deep-blue rounded-full">✔</div>}
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
      <Button className="bg-deep-blue w-full text-white font-medium" onClick={() => router.push("/home")} type="submit">토픽 설정 저장하기</Button>
    </div>
  );
}
