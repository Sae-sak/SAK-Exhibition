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
    <div className="flex flex-col justify-between p-4 border rounded-md h-72 bg-light_bg_1 dark:bg-night_bg_1 font-body">
      <header className="flex items-end justify-between w-72">
        <h1 className="text-xl font-bold">SAK-Exhibition Chat</h1>
        {user && <SignOut />}
      </header>

      <section className="row-center">
        {user ? <ChatRoom /> : <SignIn />}
      </section>
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
    <button className="" onClick={() => signInWithGoogle()}>
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
