import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../Elements/Card";
import DotsMobileStepper from "../Elements/DotsMobileStepper";
import Icon from "../Elements/Icon";
import { ThemeContext } from "../../context/themeContext";

type Balance = {
  id: number;
  bankName: string;
  accountType: string;
  accountNumber: string;
  balance: number;
  logo: React.ReactNode;
};

type Props = {
  data: Balance[];
};

function CardBalance({ data }: Props) {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("CardBalance must be used within a ThemeProvider");
  }
  const { theme } = context;

  return (
    <Card title="Total Balance">
      <DotsMobileStepper
        data={data.map((item) => (
          <div key={item.id} className="p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-3xl font-bold">${item.balance.toLocaleString()}</div>
              <Link to="/balance" className="font-medium text-gray-500">All Accounts</Link>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
           <div 
             className="rounded-xl p-4 sm:p-6 flex flex-col justify-between text-white min-h-[100px] sm:min-h-[120px] relative overflow-hidden w-full"
             style={{ backgroundColor: theme.color, borderRadius: 24, minHeight: 100, padding: 16 }}
           >
            {/* Baris Atas: Account Type & Logo */}
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[13px] opacity-90 mb-0.5">Account Type</div>
                <div className="text-2xl font-bold tracking-tight">{item.accountType}</div>
              </div>
              {/* Logo Mastercard di sini */}
              <div className="pt-1">
                {item.logo}
              </div>
            </div>

            {/* Baris Bawah: Nomor Kartu & Saldo */}
            <div className="flex justify-between items-end mt-8">
              <div className="text-xl font-medium tracking-[0.2em] opacity-80 font-mono">
                **** **** **** {item.accountNumber.slice(-4)}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">${item.balance.toLocaleString()}</span>
                <div className="bg-white/20 backdrop-blur-sm text-white rounded-full p-1.5 border border-white/30">
                  <Icon.ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </div>
          </div>
        ))}
      />
    </Card>
  );
}

export default CardBalance;
