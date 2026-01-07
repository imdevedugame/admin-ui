import { useContext } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";

export default function SignIn() {
  const { login } = useContext(AuthContext);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await loginService(email, password);
      console.log("Login berhasil, response:", response);
      login(response.refreshToken);
    } catch (error) {
      console.error("Login gagal:", error);
    }
  };

  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleLogin} />
    </AuthLayout>
  );
}
