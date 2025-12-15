import Logo from "../Elements/Logo";
import { PropsWithChildren } from "react";

type AuthLayoutProps = PropsWithChildren<{}>;

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-[#f9fafb] flex justify-center items-center">
      <div className="w-full max-w-sm px-6">
        <Logo />
        <div className="mt-14">{children}</div>
      </div>
    </main>
  );
}
