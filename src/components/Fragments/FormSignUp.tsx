import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";

import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function FormSignUp() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <form action="">
        <LabeledInput id="name" label="Full Name" placeholder="Jane Doe" />
        <LabeledInput id="email" label="Email Address" type="email" placeholder="hello@example.com" />
        <LabeledInput id="password" label="Password" type="password" placeholder="********" />

        <Button style={{ backgroundColor: theme.color }}>Sign Up</Button>
      </form>

      <div className="mt-8 flex justify-center">
        <a href="#" className="text-sm font-bold" style={{ color: theme.color }}>
          Already have an account? Sign in
        </a>
      </div>
    </>
  );
}
