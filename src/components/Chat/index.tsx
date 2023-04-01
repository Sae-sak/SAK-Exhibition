import ReactDOM from "react-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebaseApp";

import ChatInput from "./ChatInput";
import LoadingIcon from "./LoadingIcon";
import SignIn from "./Signin";
import SignOut from "./Signout";
import ChatMessages from "./ChatMessages";

function Chat() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <LoadingIcon />;
  if (error) return <p>error occur</p>;

  return (
    <div className="flex flex-col justify-between h-full p-4 border rounded-md bg-light_bg_1 dark:bg-night_bg_1 font-body">
      <header className="flex items-end justify-between pb-4 w-72">
        <h1 className="text-xl font-bold">SAK-Exhibition Chat</h1>
        {user && <SignOut />}
      </header>

      <section className="w-full col-center">
        {user ? (
          <div className="w-full h-full">
            <ChatMessages />
            <ChatInput />
          </div>
        ) : (
          <SignIn />
        )}
      </section>
    </div>
  );
}

// HOC
const Portal = (Component: React.FunctionComponent<any>) => (props: any) => {
  return ReactDOM.createPortal(
    <Component {...props} />,
    document.getElementById("chat") as HTMLElement
  );
};

// HOC 적용
export default Portal(Chat);
