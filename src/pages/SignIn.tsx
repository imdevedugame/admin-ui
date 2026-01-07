import { useContext, useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

export default function SignIn() {
  const { login } = useContext(AuthContext);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error" | "warning" | "info",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await loginService(email, password);
      console.log("Login berhasil, response:", response);
      login(response.refreshToken);
    } catch (err: any) {
      console.error("Login gagal:", err);
      setSnackbar({ open: true, message: err.msg || "Login gagal", severity: "error" });
    }
  };

  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleLogin} />
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}
