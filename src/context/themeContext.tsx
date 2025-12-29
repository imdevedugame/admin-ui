import { createContext, useState, } from "react";

type Theme = {
    name: string;
    color: string;
};

type ThemeContextType = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: { name: "theme-green", color: "#299D91" },
    setTheme: () => {},
});

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>({ name: "theme-green", color: "#299D91" });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
