'use client';

import { useRouter } from "next/navigation";
import Button from "../components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  return (
  <div className="max-w-screen-sm min-h-screen mx-auto px-8 flex flex-col items-center justify-center ">
    <div>
    <div className="aspect-[2/3] relative w-full overflow-hidden ">
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
      <img src="/logo.png" alt="logo" className="w-[160px] h-auto" />
      <img src="/title.png" alt="title" className="w-[220px] h-auto" />
    </div>  
    </div>
    <Button className={`bg-[#fee500] w-[220px] flex items-center gap-4 -translate-y-3 text- font-medium`} type="submit" iconPosition="left" onClick={() => router.push("http://localhost:8080/oauth2/authorization/kakao")} icons= {<img src="/kakaotalk.png" alt="kakaotalk logo" className="w-[40px] h-auto" />}>카카오 로그인</Button>
    </div>
  </div>
  )
}