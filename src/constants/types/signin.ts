import * as z from "zod";

export const SigninSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(6).max(24),
});

export type SigninFormValues = z.infer<typeof SigninSchema>;

export interface SigninFormProps {
  onSubmitReady: (data: SigninFormValues) => Promise<void>;
  suffix: React.ReactElement;
}

export interface SigninApi {
  setErrors: (errors: Record<string, string>) => void;
}
