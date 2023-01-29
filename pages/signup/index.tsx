import Alert from "@components/Base/Alert";
import AuthLayout from "@components/Layouts/AuthLayout";
import { alertActions } from "@features/alert/alertSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";

export default function SignupPage() {
  const dispatch = useAppDispatch();

  return (
    <AuthLayout>
      <Signup />
    </AuthLayout>
  );
}
