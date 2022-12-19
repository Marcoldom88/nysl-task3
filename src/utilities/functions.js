import { signInWithGoogle, signOut, useUserState } from '../utilities/firebase';
import { Link } from "react-router-dom";

const SignInButton = () => (
  <button className="btn btn-secondary btn-sm"
      onClick={() => signInWithGoogle()}>
    Sign In
  </button>
);

const SignOutButton = () => (
  <div>
    <button className="btn btn-secondary btn-sm"
      onClick={() => signOut()}>
      Sign Out
    </button>
  </div>
);

export const Authentication = () => {
  const [user] = useUserState();
  return (
    <div className="btn-toolbar justify-content-between">
      { user ? <SignOutButton /> : <SignInButton /> }
    </div>
  );
};

export const VisibleLinksSignedIn = () => {
  const [user] = useUserState();
  return (
    <div>
      {user ?
        <>
        <li className="nav-item">
          <Link to="./MessageBoard" className="nav-link">Message Board</Link>
        </li>
        </>:
        <br/>}
    </div>
  );
};
