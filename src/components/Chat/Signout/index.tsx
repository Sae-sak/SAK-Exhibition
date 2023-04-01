import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../config/firebaseApp";

import LoadingIcon from "../LoadingIcon";
import ErrorMsg from "../ErrorMsg";

export default function SignOut() {
  const [signOut, loading, error] = useSignOut(auth);

  if (error) return <ErrorMsg message={error.message} />;
  if (loading) return <LoadingIcon />;

  return (
    <div className="App">
      <button onClick={async () => await signOut()}>Sign out</button>
    </div>
  );
}
