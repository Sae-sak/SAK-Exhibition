import ReactDOM from "react-dom";
import {
  useAuthState,
  useSignInWithGoogle,
  useSignOut,
} from "react-firebase-hooks/auth";
import { auth } from "./config/firebaseApp";

import ChatRoom from "./ChatRoom";
import LoadingIcon from "./LoadingIcon";

function Chat() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <LoadingIcon />;
  }

  if (error) {
    console.log(error);
    return <p>error occur</p>;
  }

  return (
    <div>
      <header>
        <h1>무엇이든 물어보세요!</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <LoadingIcon />;
  }

  return (
    <button className="sign-in" onClick={() => signInWithGoogle()}>
      Sign in with Google
    </button>
  );
}

const SignOut = () => {
  const [signOut, loading, error] = useSignOut(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <LoadingIcon />;
  }

  return (
    <div className="App">
      <button onClick={async () => await signOut()}>Sign out</button>
    </div>
  );
};

// HOC
const Portal = (Component: React.FunctionComponent<any>) => (props: any) => {
  return ReactDOM.createPortal(
    <Component {...props} />,
    document.getElementById("chat") as HTMLElement
  );
};

// HOC 적용
export default Portal(Chat);
