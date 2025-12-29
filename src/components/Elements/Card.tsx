import React from "react";
import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  children?: React.ReactNode;
  desc?: React.ReactNode;
  link?: string;
};

export default function Card({ title, children, desc, link }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-0 flex flex-col h-full">
      <div className="px-6 pt-5 pb-2 flex items-center justify-between text-[#667085]">
        <div className="text-base font-semibold">{title}</div>
        {link && (
            <Link to={link} className="text-xs cursor-pointer">View All &gt;</Link>
        )}
      </div>
      <div className="px-6 pb-5 pt-1 flex-1">{children || desc}</div>
    </div>
  );
}
