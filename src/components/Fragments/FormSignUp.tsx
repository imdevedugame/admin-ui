import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";

export default function FormSignUp() {
  return (
    <>
      <form action="">
        <LabeledInput id="name" label="Full Name" placeholder="Jane Doe" />
        <LabeledInput id="email" label="Email Address" type="email" placeholder="hello@example.com" />
        <LabeledInput id="password" label="Password" type="password" placeholder="********" />

        <Button>Sign Up</Button>
      </form>

      <div className="mt-8 flex justify-center">
        <a href="#" className="text-primary text-sm font-bold">
          Already have an account? Sign in
        </a>
      </div>
    </>
  );
}
