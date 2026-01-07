import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

type LogoProps = {
  variant?: "primary" | "secondary";
};

export default function Logo({ variant = "primary" }: LogoProps) {
  const { theme } = useContext(ThemeContext);
  const variantClasses: Record<string, string> = {
    primary: "text-4xl",
    secondary: "text-sm sm:text-2xl",
  };

  return (
    <div
      className={`flex justify-center font-poppins tracking-wide animate-bounce ${variantClasses[variant] || variantClasses.primary}`}
      style={{ color: theme.color }}
    >
      <span className="font-bold">FINE</span>
      bank
      <span className="font-bold">.IO</span>
    </div>
  );
}
