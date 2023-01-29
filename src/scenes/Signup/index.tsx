import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { SignUpForm } from "./SignupForm";
import { SignUpApi, SignupFormValues } from "@type/signup";

export default function Signup() {
  const signupFormRef = useRef<SignUpApi>(null);
  const router = useRouter();

  const handleSubmit = async (data: SignupFormValues) => {
    const httpRespose = await fetch("/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        password: data.password,
      }),
    });
    const jsonRespose = await httpRespose.json();
    if (!jsonRespose.success) {
      signupFormRef.current?.setErrors(jsonRespose.errors);
      return;
    }
    router.replace("/signin");
    await new Promise((resolve) => setTimeout(resolve, 500));
  };

  return (
    <SignUpForm
      ref={signupFormRef}
      onSubmitReady={handleSubmit}
      suffix={
        <Link href="/signin">
          <button>Sign In</button>
        </Link>
      }
    />
  );
}
