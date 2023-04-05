import React from 'react';
import './header.css';

//
const Header = (props) => {
	return (
		// children from mainNavbar
		<header className='main-header'>
			{props.children}
		</header>
	);
};

export default Header;