import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";

import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormSignUpProps {
  onSubmit: (name: string, email: string, password: string) => void;
  isLoading: boolean;
}

export default function FormSignUp({ onSubmit, isLoading }: FormSignUpProps) {
  const { theme } = useContext(ThemeContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      onSubmit(values.name, values.email, values.password);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <LabeledInput
          id="name"
          label="Full Name"
          placeholder="Jane Doe"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-xs -mt-4 mb-4">{formik.errors.name}</div>
        ) : null}

        <LabeledInput
          id="email"
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-xs -mt-4 mb-4">{formik.errors.email}</div>
        ) : null}

        <LabeledInput
          id="password"
          label="Password"
          type="password"
          placeholder="********"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-xs -mt-4 mb-4">{formik.errors.password}</div>
        ) : null}

        <Button 
          style={{ backgroundColor: theme.color }} 
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Sign Up"}
        </Button>
      </form>

      <div className="mt-8 flex justify-center">
        <a href="/login" className="text-sm font-bold" style={{ color: theme.color }}>
          Already have an account? Sign in
        </a>
      </div>
    </>
  );
}
