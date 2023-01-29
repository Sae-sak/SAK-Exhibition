import { forwardRef, useImperativeHandle, useRef } from "react";
import { useForm } from "react-hook-form";

import { TextField } from "@components/TextField";

import {
  SigninApi,
  SigninFormProps,
  SigninFormValues,
  SigninSchema,
} from "@type/signin";
import { zodResolver } from "@hookform/resolvers/zod";

export const SigninForm = forwardRef<SigninApi, SigninFormProps>(
  (props, ref) => {
    const {
      register,
      handleSubmit,
      setError,
      formState: { errors, isSubmitting },
    } = useForm<SigninFormValues>({
      resolver: zodResolver(SigninSchema),
    });

    const setErrorRef = useRef(setError);
    setErrorRef.current = setError;

    useImperativeHandle(
      ref,
      () => {
        return {
          setErrors: (errors: Record<string, string>) => {
            Object.entries(errors).forEach(([key, value]) => {
              setErrorRef.current(key as "email" | "password", {
                message: value,
              });
            });
          },
        };
      },
      []
    );

    return (
      <form
        className="gap-3 p-8 border rounded-lg col-center"
        onSubmit={handleSubmit(props.onSubmitReady)}
      >
        <h2>Sign In</h2>

        <TextField
          id="email"
          label="email"
          inputProps={register("email")}
          error={errors.email?.message as string}
        />

        <TextField
          id="password"
          label="password"
          type="password"
          inputProps={register("password")}
          error={errors.password?.message as string}
        />
        <div className="flex items-center justify-between w-full">
          <button disabled={isSubmitting} color="primary">
            {isSubmitting ? "Sending..." : "Sign In"}
          </button>
          {props.suffix}
        </div>
      </form>
    );
  }
);

SigninForm.displayName = "ForwardRefedSigninForm";
