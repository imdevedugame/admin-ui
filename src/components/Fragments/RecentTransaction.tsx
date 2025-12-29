import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import Card from "../Elements/Card";


type Transaction = {
  id: number;
  transactionName: string;
  shopName: string;
  date: string;
  amount: number;
  type: "Revenue" | "Expense";
  icon: React.ReactNode;
};

type Props = {
  data: Transaction[];
};

const tabs = ["All", "Revenue", "Expense"];

export default function CardRecentTransaction({ data }: Props) {
  const [active, setActive] = useState("All");
  const { theme } = useContext(ThemeContext);

  const filteredData =
    active === "All" ? data : data.filter((item) => item.type === active);

  return (
    <Card title="Recent Transaction">
      <div className="flex gap-6 mb-4 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={
              active === tab
                ? "px-4 font-bold border-b-4"
                : "px-4 font-bold text-gray-400"
            }
            style={
              active === tab
                ? { color: theme.color, borderBottomColor: theme.color }
                : undefined
            }
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
        <span className="ml-auto text-xs text-gray-400 cursor-pointer">View All</span>
      </div>
      <div>
        {filteredData.map((item) => (
          <div key={item.id} className="flex justify-between my-6">
            <div className="flex">
              <div className="bg-gray-100 text-gray-500 px-3 rounded-lg flex flex-col justify-center items-center">
                {item.icon}
              </div>
              <div className="ms-4">
                <span className="text-xl font-bold">{item.transactionName}</span>
                <br />
                <span className="text-gray-400">{item.shopName}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-gray-700">${item.amount}</span>
              <br />
              <span className="text-gray-400">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
