import { forwardRef, useImperativeHandle, useRef } from "react";
import { useForm } from "react-hook-form";

import { TextField } from "@components/TextField";

import {
  SignUpApi,
  SignUpFormProps,
  SignupFormValues,
  SignupSchema,
} from "@type/signup";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignUpForm = forwardRef<SignUpApi, SignUpFormProps>(
  (props, ref) => {
    const {
      register,
      handleSubmit,
      setError,
      formState: { errors, isSubmitting },
    } = useForm<SignupFormValues>({
      resolver: zodResolver(SignupSchema),
    });

    const setErrorRef = useRef(setError);
    setErrorRef.current = setError;

    useImperativeHandle(
      ref,
      () => {
        return {
          setErrors: (errors: Record<string, string>) => {
            Object.entries(errors).forEach(([key, value]) => {
              setErrorRef.current(
                key as
                  | "name"
                  | "phone"
                  | "email"
                  | "password"
                  | "confirmPassword",
                { message: value }
              );
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
        <h2>Sign Up</h2>

        <TextField
          id="name"
          label="name"
          inputProps={register("name")}
          error={errors.name?.message as string}
        />

        <TextField
          id="phone"
          label="phone"
          type="phone-number"
          inputProps={register("phone")}
          error={errors.phone?.message as string}
        />

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

        <TextField
          id="confirm-password"
          label="confirm-password"
          type="password"
          inputProps={register("confirmPassword")}
          error={errors.confirmPassword?.message as string}
        />
        <div className="flex items-center justify-between w-full">
          <button disabled={isSubmitting} color="primary">
            {isSubmitting ? "Sending..." : "Register"}
          </button>
          {props.suffix}
        </div>
      </form>
    );
  }
);

SignUpForm.displayName = "ForwardRefedSignUpForm";
