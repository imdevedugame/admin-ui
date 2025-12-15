import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
}>;

export default function Button({
  children,
  type = "submit",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses = "h-12 rounded-md text-sm w-full";
  const variantClasses: Record<string, string> = {
    primary: "bg-[#2abbaa] text-white",
    secondary: "bg-[#eef2f6] text-[#667085]",
  };
  const finalClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`.trim();

  return (
    <button className={finalClasses} type={type}>
      {children}
    </button>
  );
}
