import { useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";
import { registerService } from "../services/authService";
import AppSnackbar from "../components/Elements/AppSnackbar";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error" | "warning" | "info",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRegister = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await registerService(name, email, password);
      console.log("Register berhasil:", response);
      setSnackbar({ 
        open: true, 
        message: response.msg || "Register berhasil!", 
        severity: "success" 
      });
    } catch (err: any) {
      console.error("Register gagal:", err);
      setSnackbar({ 
        open: true, 
        message: err.msg || "Register gagal", 
        severity: "error" 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <FormSignUp onSubmit={handleRegister} isLoading={isLoading} />
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}
