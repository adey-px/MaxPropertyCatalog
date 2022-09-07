import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavbarLinks.css';


const NavbarLinks = props => {
  return (

    // Define children for sideDrawer
    <ul className="nav-links">
        <li>
            <NavLink exact to="/">All Users</NavLink>
        </li>
        <li>
            <NavLink to="/user-places/user1">My Places</NavLink>
        </li>
        <li>
            <NavLink to="/new-place">Add Place</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Authenticate</NavLink>
        </li>
    </ul>
  );
}

export default NavbarLinks;