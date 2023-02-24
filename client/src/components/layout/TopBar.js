import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";
import { FiHome } from "react-icons/fi"
const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  let dashLink;
  let homeIcon = <FiHome />
  if (user) {
    dashLink = <Link to="/dashboard">{homeIcon}</Link>;
  }

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li>
            <Link className="menu-text" to="/">
              Journey
            </Link>
          </li>
          <li>{dashLink}</li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          {user ? authenticatedListItems : unauthenticatedListItems}
        </ul>
      </div>
    </div>
  );
};

export default TopBar;

