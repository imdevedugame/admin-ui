type CardProps = {
  title: string;
  desc: string;
  link?: string | boolean;
};

export default function Card({ title, desc, link = false }: CardProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center text-[#667085] mb-2">
        <div className="text-2xl">{title}</div>
        {link ? <div className="text-xs">View All</div> : null}
      </div>
      <div className="bg-white rounded-lg px-6 py-5 shadow-xl flex-1">
        {desc}
      </div>
    </div>
  );
}
