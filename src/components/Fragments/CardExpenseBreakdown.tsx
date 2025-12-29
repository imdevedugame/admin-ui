import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";

type ExpenseBreakdownItem = {
  id: number;
  category: string;
  amount: number;
  percentage: number;
  icon: React.ReactNode;
  arrow: React.ReactNode;
};

type CardExpenseBreakdownProps = {
  data: ExpenseBreakdownItem[];
};

function CardExpenseBreakdown(props: CardExpenseBreakdownProps) {
  const { data } = props;

  // 1. Warna kotak ikon utama berdasarkan kategori
  const getCategoryStyle = (category: string) => {
    switch (category.toLowerCase()) {
      case "housing": return "text-orange-500 bg-orange-50";
      case "food": return "text-blue-500 bg-blue-50";
      case "transportation": return "text-purple-500 bg-purple-50";
      case "entertainment": return "text-pink-500 bg-pink-50";
      case "shopping": return "text-green-500 bg-green-50";
      default: return "text-gray-500 bg-gray-50";
    }
  };

  return (
    <Card title="Expenses Breakdown">
      <div className="relative">
        <div className="absolute -top-10 right-0 text-[13px] text-gray-400 font-medium">
          *Compare to last month
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-100 rounded-xl overflow-hidden mt-4">
          {data.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center p-6 bg-white border-r border-b border-gray-100 group hover:bg-gray-50 transition-all"
            >
              {/* Box Ikon Utama */}
              <div className={`rounded-xl w-14 h-14 flex items-center justify-center shrink-0 mr-4 ${getCategoryStyle(item.category)}`}>
                <div className="scale-125">
                  {item.icon}
                </div>
              </div>

              <div className="flex-1">
                <span className="text-[13px] text-gray-400 block mb-0.5 font-medium">{item.category}</span>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-xl text-[#111827]">
                      ${item.amount.toLocaleString()}.00
                    </div>
                    
                    {/* Persentase dan Ikon Panah (Warna Merah/Hijau) */}
                    <div className="flex items-center gap-1 text-[13px] mt-1 font-medium">
                      <span className="text-gray-400">{item.percentage}%*</span>
                      <span className={`scale-110 ${item.percentage > 15 ? 'text-red-500' : 'text-green-500'}`}>
                        {item.arrow}
                      </span>
                    </div>
                  </div>

                  {/* Ikon Panah ke Samping (Ganti dari Chevron ke ArrowRight) */}
                  <div className="text-gray-300 group-hover:text-gray-400 transition-colors ml-2">
                     <Icon.ArrowRight size={32} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default CardExpenseBreakdown;