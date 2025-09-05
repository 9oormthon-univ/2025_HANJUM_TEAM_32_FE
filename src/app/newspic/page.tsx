'use client'

import { useRouter } from "next/navigation";
import Icon from "../components/icones/icon";
import Button from "../components/ui/button";

export default function NewsPic() {
  const router = useRouter();
  return (
    <div className="bg-[#f9fbff] min-h-screen max-w-screen-sm mx-auto px-8 flex flex-col gap-6 py-8">
      <Icon onClick={() => router.push('/home')} />
      <div className="flex flex-col items-center text-center gap-4" >
        <div className="text-2xl font-semibold text-deep-blue">뉴스 한줌!</div>
        <div className="">매일 5개의 뉴스로 <br />
정보 과부화 없이 간편하게 만나봐요</div>
        <img src="/logo.png" alt="logo" className="w-[200px] h-auto" />
        <div className="text-sm">기사를 왼쪽으로 넘기면 좋아요, 오른쪽으로 넘기면 패스!
관심 있는 뉴스만 골라보세요.</div>
      </div>
      <Button onClick={() => router.push("/newspic/news")} className="bg-deep-blue text-white font-semibold">바로 시작하기</Button>
    </div>

      )}