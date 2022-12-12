import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../stylesheets/Navbar.css';
import { signInWithGoogle, signOut, useUserState } from '../utilities/firebase';

function Navbar() {
  return(
    <div>
      <nav className="navbar  navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <h1 className="brand" >NYSL App</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              
            </div>
            <div className="offcanvas-body">
              <Authentication />
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="./" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="./Schedule" className="nav-link">Game Schedule</Link>
                </li>
                <VisibleLinksSignedIn />
              </ul>
              <img className="logo" src="images/nysl_logo.png" alt="NYSL Logo"></img>
            </div>
          </div>
        </div>
      </nav>
      <>
        <div id="detail" className="content-container">
          <Outlet />
        </div>
      </>
    </div>
  )
}

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

const Authentication = () => {
  const [user] = useUserState();
  return (
    <div className="btn-toolbar justify-content-between">
      { user ? <SignOutButton /> : <SignInButton /> }
    </div>
  );
};

const VisibleLinksSignedIn = () => {
  const [user] = useUserState();
  return (
    <div>
      {user ?
        <li className="nav-item">
          <Link to="./MessageBoard" className="nav-link">Message Board</Link>
        </li> :
        <br/>}
    </div>
  );
};


export default Navbar