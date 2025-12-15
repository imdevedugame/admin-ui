type LogoProps = {
  variant?: "primary" | "secondary";
};

export default function Logo({ variant = "primary" }: LogoProps) {
  const variantClasses: Record<string, string> = {
    primary: "text-[#2abbaa] text-4xl",
    secondary: "text-white text-sm sm:text-2xl",
  };

  return (
    <div className={`flex justify-center font-poppins tracking-wide ${variantClasses[variant] || variantClasses.primary}`}>
      <span className="font-bold">FINE</span>
      bank
      <span className="font-bold">.IO</span>
    </div>
  );
}
