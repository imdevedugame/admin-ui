import Logo from "../Elements/Logo";
import type { PropsWithChildren } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

type AuthLayoutProps = PropsWithChildren<{}>;

export default function AuthLayout({ children }: AuthLayoutProps) {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("AuthLayout must be used within a ThemeProvider");
  }
  const { theme } = context;

  return (
    <main className={`min-h-screen bg-[#f9fafb] flex justify-center items-center ${theme.name}`}>
      <div className="w-full max-w-sm px-6">
        <Logo />
        <div className="mt-14">{children}</div>
      </div>
    </main>
  );
}
