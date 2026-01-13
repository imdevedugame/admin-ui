import type { PropsWithChildren } from 'react';


type ButtonProps = PropsWithChildren<{
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}>;

export default function Button({
  children,
  type = "submit",
  variant = "primary",
  className = "",
  style,
  disabled = false,
}: ButtonProps) {
  const baseClasses = "h-12 rounded-md text-sm w-full cursor-pointer hover:scale-105 transition-transform";
  const variantClasses: Record<string, string> = {
    primary: "bg-[#2abbaa] text-white",
    secondary: "bg-[#eef2f6] text-[#667085]",
  };
  const finalClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`.trim();

  return (
    <button className={finalClasses} type={type} style={style} disabled={disabled}>
      {children}
    </button>
  );
}
