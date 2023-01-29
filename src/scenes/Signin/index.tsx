import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { SigninForm } from "./SigninForm";
import { SigninApi, SigninFormValues } from "@type/signin";

export default function Signin() {
  const signinFormRef = useRef<SigninApi>(null);
  const router = useRouter();

  const handleSubmit = async (data: SigninFormValues) => {
    const httpRespose = await fetch("/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const jsonRespose = await httpRespose.json();
    if (!jsonRespose.success) {
      signinFormRef.current?.setErrors(jsonRespose.errors);
      return;
    }
    router.replace("/");
    await new Promise((resolve) => setTimeout(resolve, 500));
  };

  return (
    <SigninForm
      ref={signinFormRef}
      onSubmitReady={handleSubmit}
      suffix={
        <Link href="/signup">
          <button>Sign Up</button>
        </Link>
      }
    />
  );
}
