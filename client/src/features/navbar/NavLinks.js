import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './navLinks.css';

//
const NavbarLinks = (props) => {
	const authUser = useContext(AuthContext);

	return (
		<ul className='nav-links'>
			<li>
				<NavLink
					exact
					to='/'
				>
					Home
				</NavLink>
			</li>

			{!authUser.loggedIn && (
				<>
					<li>
						<NavLink to='/properties/all'>Property</NavLink>
					</li>
					<li>
						<NavLink to='/account'>Login</NavLink>
					</li>
				</>
			)}

			{authUser.loggedIn && (
				<>
					<li>
						<NavLink to='/properties/user1'>
							My Property
						</NavLink>
					</li>
					<li>
						<NavLink to='/create-property'>
							Add Property
						</NavLink>
					</li>
					<li>
						<button onClick={authUser.logout}>
							Logout
						</button>
					</li>
				</>
			)}
		</ul>
	);
};

export default NavbarLinks;