import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthsContext } from "../../contextApi/AuthsContext";
import "./NavbarLinks.css";

const NavbarLinks = (props) => {
  //
  // To check login and logout usin authContext
  const getAuth = useContext(AuthsContext);

  return (
    // navLinks as children for sideDrawer comp
    <ul className="nav-links">
      <li>
        <NavLink exact to="/">
          Members
        </NavLink>
      </li>

      {getAuth.loggedIn && (
        <li>
          <NavLink to="/user-places/user1">My Places</NavLink>
        </li>
      )}

      {getAuth.loggedIn && (
        <li>
          <NavLink to="/new-place">Add Place</NavLink>
        </li>
      )}

      {!getAuth.loggedIn && (
        <li>
          <NavLink to="/auth-User">Account</NavLink>
        </li>
      )}

      {getAuth.loggedIn && (
        <li>
          <button onClick={getAuth.logout}>Logout</button>
        </li>
      )}
    </ul>
  );
};

export default NavbarLinks;
