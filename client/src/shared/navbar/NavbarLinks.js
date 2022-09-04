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
            <NavLink to="/user1/user-places">My Places</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">Add Place</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Authenticate</NavLink>
        </li>
    </ul>
  );
}

export default NavbarLinks;