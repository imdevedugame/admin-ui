import { type PropsWithChildren, useContext } from 'react';
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ThemeContext } from '../../context/themeContext';

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

  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  const { theme, setTheme } = context;

  return (
    <>
      <div className={`min-h-screen flex bg-[#f5f7fa] font-sans ${theme.name}`}>
        {/* SIDEBAR: h-screen sticky agar tidak ikut ter-scroll */}
        <aside className="bg-[#191919] text-white w-20 sm:w-64 flex flex-col h-screen sticky top-0 py-6 px-4">
          {/* Logo Section */}
          <div className="px-2 mb-8">
            <Logo variant="secondary" />
          </div>

          {/* Navigation Menu: flex-1 untuk mendorong bagian bawah ke ujung */}
          <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
            {menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) => {
                  // Use theme color for active and hover
                  if (isActive) {
                    return `flex items-center px-4 py-3 rounded-lg transition-all font-bold`;
                  }
                  return `flex items-center px-4 py-3 rounded-lg transition-all text-gray-400 hover:font-bold`;
                }}
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: theme.color, color: '#fff' }
                    : {
                        transition: 'background 0.2s, color 0.2s',
                      }
                }
                onMouseEnter={e => {
                  if (!e.currentTarget.classList.contains('font-bold')) {
                    e.currentTarget.style.backgroundColor = theme.color;
                    e.currentTarget.style.color = '#fff';
                  }
                }}
                onMouseLeave={e => {
                  if (!e.currentTarget.classList.contains('font-bold')) {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.color = '';
                  }
                }}
              >
                <div className="text-xl shrink-0">{item.icon}</div>
                <span className="ms-3 hidden sm:block text-sm tracking-wide">{item.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Bottom Section: Logout & Profile dibuat lebih rapat */}
          <div className="mt-auto pt-4">
            <div className='mb-4'>
              <div className="text-sm text-gray-400 mb-2">Themes</div>
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                {themes.map((t) => (
                  <div
                    key={t.name}
                    className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer mb-2`}
                    onClick={() => setTheme({ name: t.name, color: t.color })}
                  ></div>
                ))}
              </div>
            </div>
            <NavLink to="/signin" className="w-full flex items-center text-gray-400 px-4 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-all group">
              <div className="text-primary">
                <Icon.Logout />
              </div>
              <span className="ms-3 hidden sm:block text-sm">Logout</span>
            </NavLink>

            {/* Divider tipis */}
            <div className="border-t border-white/10 my-4" />

            {/* User Profile Info */}
            <div className="flex items-center gap-3 px-2 pb-2">
              <div className="h-10 w-10 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                <img 
                  src="https://i.pravatar.cc/150?u=user" 
                  alt="profile" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="hidden sm:block flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate leading-tight">Username</p>
                <p className="text-[11px] text-gray-500 truncate">View Profile</p>
              </div>
              <button className="hidden sm:block text-gray-500 hover:text-white">⋮</button>
            </div>
          </div>
        </aside>

        {/* RIGHT SIDE: Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* HEADER */}
          <header className="bg-white border-b border-gray-100 px-8 py-4 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h2 className="text-lg font-bold text-gray-900">Username</h2>
                {/* Double Chevron >> gaya desain asli */}
                <div className="mx-3 flex items-center text-gray-200">
                   <Icon.ChevronRight size={14} strokeWidth={3} />
                   <Icon.ChevronRight size={14} strokeWidth={3} className="-ml-2" />
                </div>
                <span className="text-sm text-gray-400 font-medium">May 19, 2023</span>
              </div>

              <div className="flex items-center gap-6">
                <button className="relative text-primary hover:text-gray-600 transition-colors">
                  <NotificationsIcon style={{ fontSize: 22 }} />
                  <span className="absolute top-0.5 right-0.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="w-64">
                  <Input 
                    id="search" 
                    placeholder="Search" 
                    backgroundColor="bg-gray-50" 
                    border="border-none" 
                  />
                </div>
              </div>
            </div>
          </header>

          {/* MAIN CONTENT: Ditambahkan max-width dan padding yang lebih lega */}
          <main className="flex-1 overflow-y-auto p-5  bg-[#f5f7fa]">
            <div className=" ">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}