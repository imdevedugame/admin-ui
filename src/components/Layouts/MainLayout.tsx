import type { PropsWithChildren } from 'react';
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";

type MainLayoutProps = PropsWithChildren<{}>;

export default function MainLayout({ children }: MainLayoutProps) {
  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];
  return (
    <div className="min-h-screen flex bg-[#f5f7fa]">
      {/* Sidebar */}
      <aside className="bg-[#0f172a] text-white w-28 sm:w-64 flex flex-col justify-between py-6 px-4 sm:px-6">
        {/* Top: Logo + Nav */}
        <div>
          <div className="mb-8">
            <Logo variant="secondary" />
          </div>

          <nav className="space-y-2">
            {menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-md hover:text-white hover:font-bold hover:scale-105 ${
                    isActive ? "bg-[#2abbaa] text-white font-bold" : "hover:bg-[#1e293b]"
                  }`
                }
              >
                <div className="mx-auto sm:mx-0">{item.icon}</div>
                <div className="ms-3 hidden sm:block">{item.name}</div>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom: Logout + User Info */}
        <div>
          <div className="border-b border-white/10 my-10" />
          {/* Logout */}
          <div className="flex items-center bg-[#2abbaa] text-white px-4 py-3 rounded-md">
            <div className="mx-auto sm:mx-0"><Icon.Logout color="currentColor" /></div>
            <div className="ms-3 hidden sm:block">Logout</div>
          </div>

          {/* User Info */}
          <div className="mt-6 flex justify-between items-center">
            <div className="h-8 w-8 rounded-full bg-white/20 grid place-content-center">A</div>
            <div className="hidden sm:block text-white/90 text-sm">
              Username
              <br />
              <span className="text-white/60">View Profile</span>
            </div>
            <div className="hidden sm:block">⋮</div>
          </div>
        </div>
      </aside>

      {/* Right side */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#f9fafb] border-b border-[#eef2f6] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-700">
              <div className="font-semibold mr-4">Username</div>
              <div className="text-sm text-gray-500">May 19, 2023</div>
            </div>
            <div className="flex items-center gap-3 w-56 sm:w-72">
              <NotificationsIcon style={{ color: "#667085", fontSize: 24 }} />
              <div className="flex-1">
                <Input id="search" placeholder="Search" backgroundColor="bg-white" border="border-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 px-6 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
