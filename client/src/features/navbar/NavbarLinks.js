import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './navbarLinks.css';

//
const NavbarLinks = (props) => {
	const authUser = useContext(AuthContext);

	return (
		<ul className='nav-links'>
			<li>
				<NavLink exact to='/'>Home</NavLink>
			</li>

			{authUser.loggedIn && (
				<>
					<li>
						<NavLink to='/user-places/user1'>
							My Places
						</NavLink>
					</li>
					<li>
						<NavLink to='/new-place'>Add Place</NavLink>
					</li>
				</>
			)}

			{!authUser.loggedIn && (
				<li>
					<NavLink to='/account'>Login</NavLink>
				</li>
			)}

			{authUser.loggedIn && (
				<li>
					<button onClick={authUser.logout}>Logout</button>
				</li>
			)}
		</ul>
	);
};

export default NavbarLinks;
