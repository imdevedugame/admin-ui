import { type PropsWithChildren, useContext, useState } from 'react';
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Backdrop, CircularProgress } from "@mui/material";
import { ThemeContext } from '../../context/themeContext';
import { AuthContext } from '../../context/authContext';
import { logoutService } from '../../services/authService';

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
  const { user, logout } = useContext(AuthContext);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logoutService();
      logout(); 
    } catch (err: any) {
      console.error(err);
      if (err.status === 401) {
        logout();
      }
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className={`min-h-screen flex bg-[#f5f7fa] font-sans ${theme.name}`}>
    
      <aside className="bg-[#191919] text-white w-20 sm:w-64 flex flex-col h-screen sticky top-0 py-6 px-4 shrink-0">
        <div className="px-2 mb-8">
          <Logo variant="secondary" />
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
          {menu.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-all ${
                  isActive ? "text-white font-bold" : "text-gray-400 hover:text-white"
                }`
              }
              style={({ isActive }) =>
                isActive ? { backgroundColor: theme.color } : {}
              }
            >
              <div className="text-xl shrink-0">{item.icon}</div>
              <span className="ms-3 hidden sm:block text-sm tracking-wide">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-4">
          <div className='mb-4 px-2'>
            <div className="text-[10px] text-gray-500 uppercase font-bold mb-2">Themes</div>
            <div className="flex flex-wrap gap-2">
              {themes.map((t) => (
                <div
                  key={t.name}
                  className={`${t.bgcolor} w-5 h-5 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 ${theme.name === t.name ? 'border-white' : 'border-transparent'}`}
                  onClick={() => setTheme({ name: t.name, color: t.color })}
                ></div>
              ))}
            </div>
          </div>
          
          <button onClick={handleLogout} className="w-full flex items-center text-gray-400 px-4 py-3 rounded-lg hover:bg-white/5 transition-all">
            <Icon.Logout />
            <span className="ms-3 hidden sm:block text-sm">Logout</span>
          </button>

          <div className="border-t border-white/10 my-4" />

          <div className="flex items-center gap-3 px-2 pb-2">
            <div className="h-10 w-10 rounded-full bg-gray-700 overflow-hidden shrink-0">
              <img src="https://i.pravatar.cc/150?u=user" alt="p" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate leading-tight">{user?.name || 'Username'}</p>
              <p className="text-[11px] text-gray-500 truncate">View Profile</p>
            </div>
            <button className="hidden sm:block text-gray-500 hover:text-white">⋮</button>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
     
        <header className="bg-white border-b border-gray-100 px-10 py-5 z-10 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-gray-900">{user?.name || 'Username'}</h2>
            
              <div className="mx-4 flex items-center text-gray-200">
                 <Icon.ChevronRight size={14} strokeWidth={4} />
                 <Icon.ChevronRight size={14} strokeWidth={4} className="-ml-2" />
              </div>
              <span className="text-sm text-gray-400 font-medium">May 19, 2023</span>
            </div>

            <div className="flex items-center gap-6">
              <button className="relative text-gray-400 hover:text-gray-600 transition-colors">
                <NotificationsIcon style={{ fontSize: 24 }} />
                <span className="absolute top-0.5 right-0.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="w-64">
                <Input id="search" placeholder="Search" backgroundColor="bg-gray-50" border="border-none" />
              </div>
            </div>
          </div>
        </header>

       
       <main className="flex-1 overflow-y-auto px-16 py-10 bg-[#f8f9fb]">
  
  <div className="">
    {children}
  </div>
</main>
      </div>

      
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoggingOut}
      >
        <div className="flex flex-col items-center gap-4">
          <CircularProgress color="inherit" size={60} />
          <div className="text-lg font-medium">Logging Out...</div>
        </div>
      </Backdrop>
    </div>
  );
}