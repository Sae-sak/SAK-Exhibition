import Alert from "@components/Base/Alert";
import AuthLayout from "@components/Layouts/AuthLayout";
import SignupPage from "@components/Pages/SignupPage";
import {alertActions} from "@features/alert/alertSlice";
import {useAppDispatch, useAppSelector} from "@toolkit/hook";

export default function Signup() {
  const dispatch = useAppDispatch();

  return (
    <AuthLayout>
      <SignupPage />
    </AuthLayout>
  );
}
