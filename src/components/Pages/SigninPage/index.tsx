import {useState} from "react";

import SigninForm from "./SigninForm";

export default function SigninPage() {
  const [isAuth, setIsAuth] = useState(false);

  return isAuth ? (
    <div>
      <div>
        <div>you are already logged in!</div>
        <button onClick={() => {}}>Go Home</button>
      </div>
    </div>
  ) : (
    <div className="w-screen h-screen col-center">
      {/* 이메일 비밀번호 로그인 */}
      <SigninForm />
    </div>
  );
}
