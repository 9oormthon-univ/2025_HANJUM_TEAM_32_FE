interface Props{
  order: number;
  topic: string;
  description?: string;
  className?: string;
  rank?: number;
}

export default function PopularTopic({order, topic=" ", description=" ", rank, className}: Props) {
  const base= "flex items-center gap-4 p-2 border-[#e5e7eb]"
  return (
    <div className={ `${base} ${order===5? "border-0":"border-b"} ${className}`}>
      <div className="bg-[#8397c4] text-white flex justify-center items-center rounded-full w-[30px] h-[30px]">{rank}</div>
      <div>
        <div className="text-lg">{topic}</div>
        <div className="text-[#aab2b8] text-sm">{description}</div>
      </div>
    </div>
  )
}