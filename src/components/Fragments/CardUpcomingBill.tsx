import React from "react";
import Card from "../Elements/Card";

type BillItem = {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  month: string;
  lastCharge: string;
  amount: number;
};

type CardUpcomingBillProps = {
  data: BillItem[];
};

function CardUpcomingBill(props: CardUpcomingBillProps) {
  const { data } = props;

  return (
    <Card
      title="Upcoming Bill"
      link="/bill"
      desc={
        <div className="flex flex-col gap-5 mt-2">
          {data.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                {/* Kotak Tanggal */}
                <div className="flex flex-col items-center justify-center bg-[#F4F5F7] rounded-xl w-[65px] h-[75px] shrink-0">
                  <span className="text-[13px] text-gray-400 font-medium uppercase">{item.month}</span>
                  <span className="text-2xl font-extrabold text-[#111827] leading-none mt-1">{item.date}</span>
                </div>

                {/* Konten Tengah */}
                <div className="flex flex-col justify-center">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
      {/* Jika item.icon adalah SVG, pastikan dia memiliki class w-full h-full */}
      <div className="scale-[2]"> {/* Cara cepat memperbesar tanpa merusak layout */}
        {item.icon}
      </div>
    </div>
                  <div className="flex items-center gap-3 mb-1">
                   
                    {/* Ukuran Nama diperbesar ke text-xl dan font-bold */}
                    <h2 className="text-xl font-bold text-[#111827] tracking-tight">
                      {item.name}
                    </h2>
                  </div>
                  
                  <p className="text-[13px] text-gray-400 font-medium">
                    Last Charge - {item.lastCharge}
                  </p>
                </div>
              </div>

              {/* Badge Harga */}
              <div className="border border-gray-100 rounded-xl px-6 py-3 shadow-sm min-w-[90px] text-center bg-white">
                <span className="text-xl font-bold text-[#111827]">
                  ${item.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}

export default CardUpcomingBill;