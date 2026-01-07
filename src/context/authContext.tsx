import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { jwtDecode } from "jwt-decode";

interface User {
  userId: string;
  name: string;
  email: string;
  iat: number;
  exp: number;
}

interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        return jwtDecode<User>(token);
      } catch (err) {
        console.error("Invalid token", err);
        localStorage.removeItem("token");
        return null;
      }
    }

    return null;
  });

  const login = (token: string) => {
    try {
      const decoded = jwtDecode<User>(token);

      setUser(decoded);
      localStorage.setItem("token", token);
    } catch (err) {
      console.error("Invalid token");
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
