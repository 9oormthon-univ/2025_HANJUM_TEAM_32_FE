"use client";

import Image from "next/image";
import Icon from "../../../components/icones/icon";
import { useRouter } from "next/navigation";

type Params = { id: string };
type AiComment = {
  id: number;
  title: string;
  content: string;
  summary: string;
  aiCommentary: string;
};

export default function Page({ params }: { params: Params }) {
  const { id } = params;
  const router = useRouter();
  const nid = Number(id);

  // 더미 데이터
  const aiComments: AiComment[] = [
    {
      id: 20,
      title: "한미일 경제안보회의, '글로벌 공급망' 공동 대응 강화",
      content:
        "최근 서울에서 열린 한미일 경제안보 회의에서 3국 대표는 반도체, 배터리 등 주요 산업의 글로벌 공급망을 안정시키고, 인공지능(AI)과 같은 첨단 기술이 특정 국가로 유출되는 것을 막기 위한 공동 대응 방안을 논의했다. 또한, 인도태평양 지역의 경제 질서를 유지하기 위한 협력 강화 방안도 포함되었다.",
      summary:
        "한미일 3국이 서울에서 만나 핵심 광물과 첨단 기술 공급망 안정화를 위해 공동 협력하기로 합의했다.",
      aiCommentary:
        "이번 회의는 단순한 경제 협력을 넘어, 기술 패권을 둘러싼 국제정세 속에서 3국의 전략적 연대를 공고히 하는 중요한 계기가 될 것입니다. 중국을 겨냥한 움직임으로 해석될 수 있어 향후 외교적 파장도 예상됩니다.",
    },
    {
      id: 21,
      title: "미국 연준, 금리 인하 신중론…’고용 호조’가 발목",
      content:
        "미국 노동부 발표에 따르면, 8월 비농업 부문 고용이 20만 건 이상 증가하며 시장의 예상치를 크게 웃돌았다. 이는 고용 시장의 견조함을 보여주는 지표로, 연준이 금리를 서둘러 인하할 필요가 없다는 근거로 작용하고 있다.",
      summary:
        "미국 연준의 조기 금리 인하 기대감이 고용 시장의 강한 지표로 인해 후퇴하고 있다.",
      aiCommentary:
        "고용 시장의 긍정적 신호는 경제의 펀더멘털이 튼튼하다는 의미이지만, 물가 상승 압력을 키울 수 있어 연준의 고민은 깊어질 것입니다. 이는 한국 증시에도 영향을 미칠 수 있으니 투자 시 참고해야 합니다.",
    },
    {
      id: 22,
      title: "AI 기반 의료 서비스, 개인 맞춤형 치료 시대 열어",
      content:
        "최근 개발된 AI 기반 진단 시스템은 환자의 유전 정보, 생활 습관, 질병 이력 등을 종합적으로 분석하여 최적의 치료법을 제안한다. 이는 오진율을 낮추고, 만성질환 관리 효율을 높여 의료 서비스의 질을 한 단계 끌어올릴 것으로 기대된다.",
      summary:
        "AI가 환자의 데이터를 분석하여 개인별로 최적화된 치료법을 제공하는 AI 의료 서비스가 상용화되고 있다.",
      aiCommentary:
        "AI 의료 서비스는 의료 접근성을 높이고 치료 정확도를 개선하는 긍정적인 효과가 있습니다. 다만, 민감한 개인 의료 정보의 보안 문제와 AI가 내린 진단에 대한 법적 책임 소재를 명확히 하는 것이 중요한 과제입니다.",
    },
    {
      id: 23,
      title: "‘이집트 유물전’, 100만 관객 돌파…역대급 흥행",
      content:
        "이번 전시는 이집트 고왕국 시대부터 로마 시대까지의 유물을 총망라하며, 특히 '황금 마스크' 등 희귀 유물이 포함되어 높은 관심을 받았다. 사전 예약 시스템이 마비될 정도로 관람객이 몰리며, 박물관 측은 연장 전시를 검토 중이다.",
      summary:
        "국립중앙박물관의 '이집트 유물전'이 개막 두 달 만에 누적 관람객 100만 명을 돌파하며 역대급 흥행을 기록 중이다.",
      aiCommentary:
        "코로나19 이후 문화생활에 대한 갈증이 커지면서 대형 전시회에 대한 대중의 관심이 폭발적으로 늘어났습니다. 이번 전시는 역사적 가치와 함께 대규모 마케팅이 성공적으로 결합된 사례로 분석됩니다.",
    },
    {
      id: 24,
      title: "애플, 'A18 바이오닉' 칩 공개…온디바이스 AI 성능 혁신",
      content:
        "새로운 A18 바이오닉 칩은 전작 대비 AI 연산 성능을 30% 이상 끌어올린 신경망 엔진(Neural Engine)을 탑재했다. 이는 클라우드 연결 없이도 실시간 번역, 이미지 생성, 음성 인식 등 고성능 AI 기능을 사용할 수 있게 한다.",
      summary:
        "애플이 온디바이스 AI 연산 성능을 30% 향상시킨 차세대 모바일 칩 'A18 바이오닉'을 공개했다.",
      aiCommentary:
        "온디바이스 AI는 개인정보 보호와 속도 측면에서 큰 장점을 가집니다. 애플은 이 기술을 통해 경쟁사와 차별점을 두려 할 것이며, 앞으로 스마트폰 시장에서 온디바이스 AI가 중요한 경쟁 요소가 될 것입니다.",
    },
  ];

  const item = aiComments.find((c) => c.id === nid);

  if (!item) {
    return (
      <div className="bg-[#f8f9fb] min-h-screen max-w-screen-sm mx-auto px-8 py-8">
        <div className="flex items-center gap-2 mb-4">
          <Icon className="w-[30px]" onClick={() => router.push("/newspic/news")} />
          <div className="font-semibold">AI 해설</div>
        </div>
        <p>해당 아이디의 해설을 찾을 수 없어요. (id: {id})</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fb] min-h-screen max-w-screen-sm mx-auto px-8 flex flex-col py-8 font-sans">
      {/* 헤더 */}
      <div className="flex items-center gap-2">
        <Icon className="w-[30px]" onClick={() => router.push("/newspic/news")} />
        <div className="font-semibold">8월 30일 한줌</div>
      </div>

      <main className="flex flex-col items-center pt-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[15px] font-medium text-[#222]">
            &quot;이 뉴스, 왜 나왔을까요?&quot;
          </span>
          <Image src="/mascot.svg" alt="마스코트" width={48} height={48} />
        </div>

        <div className="relative w-full max-w-[300px]">
          {/* 말풍선 배경 */}
          <Image
            src="/speechBubble.svg"
            alt="말풍선"
            width={300}
            height={400}
            className="absolute top-0 left-0 z-0"
          />
          {/* 내용 */}
          <div className="absolute inset-0 z-10 p-8 text-[#222] text-[15px] overflow-auto">
            <div className="flex flex-col gap-2">
              <div className="font-semibold">{item.title}</div>
              <div className="whitespace-pre-wrap">{item.aiCommentary}</div>
              <div className="text-sm text-gray-700 whitespace-pre-wrap">{item.content}</div>
              <div className="text-sm font-medium text-[#4262FF] whitespace-pre-wrap">
                요약: {item.summary}
              </div>
            </div>
          </div>
          {/* 이미지가 레이아웃을 차지하도록 더미 박스(고정 높이) */}
          <div className="invisible">
            <Image src="/speechBubble.svg" alt="" width={300} height={400} />
          </div>
        </div>
      </main>
    </div>
  );
}
