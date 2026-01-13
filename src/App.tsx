import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Balance from "./pages/Balance";
import Expense from "./pages/Expense";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useContext } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./context/authContext";

// Component untuk melindungi route yang memerlukan autentikasi
function RequireAuth({ children }: { children: ReactNode }) {
  const { user } = useContext(AuthContext);
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
}

// Component untuk route yang tidak memerlukan autentikasi
function NotRequireAuth({ children }: { children: ReactNode }) {
  const { user } = useContext(AuthContext);
  
  if (user) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } 
        />
        <Route 
          path="/balance" 
          element={
            <RequireAuth>
              <Balance />
            </RequireAuth>
          } 
        />
        <Route 
          path="/expense" 
          element={
            <RequireAuth>
              <Expense />
            </RequireAuth>
          } 
        />
        <Route 
          path="/login" 
          element={
            <NotRequireAuth>
              <SignIn />
            </NotRequireAuth>
          } 
        />
        <Route 
          path="/register" 
          element={
            <NotRequireAuth>
              <SignUp />
            </NotRequireAuth>
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}