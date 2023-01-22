import * as z from "zod";

export interface ISignUpForm {
  email: string;
  name: string;
  phone: string;
  password: string;
  passwordCheck: string;
  extraError?: string;
}

export const SignupSchema = z
  .object({
    email: z.string().min(1).email(),
    password: z.string().min(6).max(24),
    confirmPassword: z.string().min(6).max(24),
  })
  .refine(
    (form) => {
      return form.confirmPassword === form.password;
    },
    {
      message: "Passwords must match",
      path: ["confirmPassword"],
    }
  );

export type SignupFormValues = z.infer<typeof SignupSchema>;

export interface SignUpFormProps {
  onSubmitReady: (data: SignupFormValues) => Promise<void>;
  suffix: React.ReactElement;
}

export interface SignUpApi {
  setErrors: (errors: Record<string, string>) => void;
}
