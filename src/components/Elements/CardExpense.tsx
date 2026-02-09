import Icon from "./Icon";

interface CardExpenseProps {
  category: string;
  amount: number;
  percentage: string;
  trend: "up" | "down";
  items: Array<{
    item: string;
    amount: number;
    date: string;
  }>;
}

export default function CardExpense({ category, amount, percentage, trend, items }: CardExpenseProps) {

  const getIconComponent = (category: string) => {
    const iconMap: { [key: string]: any } = {
      housing: Icon.House,
      food: Icon.Food,
      transportation: Icon.Transport,
      entertainment: Icon.Movie,
      shopping: Icon.Shopping,
      others: Icon.Other,
    };
    return iconMap[category.toLowerCase()] || Icon.Other;
  };

  const IconComponent = getIconComponent(category);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between bg-gray-50 p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-gray-200">
            <IconComponent size={32} className="text-gray-700" />
          </div>
          <div>
            <div className="text-gray-500 text-base font-medium">{category.charAt(0).toUpperCase() + category.slice(1)}</div>
            <div className="text-3xl font-bold text-gray-900">${amount}</div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className={`flex items-center gap-1 text-base font-semibold ${trend === "up" ? "text-red-500" : "text-green-500"}`}>
            {percentage}% {trend === "up" ? <Icon.ArrowUp size={20} /> : <Icon.ArrowDown size={20} />}
          </div>
          <div className="text-xs text-gray-400 mt-1">Compare to the last month</div>
        </div>
      </div>

      <div className="px-6">
        <div className="flex flex-col divide-y divide-gray-200 pb-2">
          {items.map((detail, index) => (
            <div key={index} className="flex justify-between py-4 items-center">
              <div className="text-gray-600 text-base font-medium">{detail.item}</div>
              <div className="text-right">
                <div className="font-semibold text-gray-900 text-lg">${detail.amount}</div>
                <div className="text-sm text-gray-400">{detail.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
