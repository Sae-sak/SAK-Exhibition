/**
 * The component system  intro, copy pastable before the form is created
 */
import {useForm} from "react-hook-form";
import {forwardRef, useImperativeHandle, useRef} from "react";

import {TextField} from "@components/Base/TextField";

import {
  SignUpApi,
  SignUpFormProps,
  SignupFormValues,
  SignupSchema,
} from "@constants/types/signup";
import {zodResolver} from "@hookform/resolvers/zod";

export const SignUpForm = forwardRef<SignUpApi, SignUpFormProps>(
  (props, ref) => {
    const {
      register,
      handleSubmit,
      setError,
      formState: {errors, isSubmitting},
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
                key as "email" | "password" | "confirmPassword",
                {message: value}
              );
            });
          },
        };
      },
      []
    );

    return (
      <form
        style={{
          display: "flex",
          flexFlow: "column",
          gap: 15,
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
        onSubmit={handleSubmit(props.onSubmitReady)}
      >
        <h2>Sign Up</h2>
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

        <button disabled={isSubmitting} color="primary">
          {isSubmitting ? "Sending..." : "Register"}
        </button>

        {props.suffix}
      </form>
    );
  }
);

SignUpForm.displayName = "ForwardRefedSignUpForm";
