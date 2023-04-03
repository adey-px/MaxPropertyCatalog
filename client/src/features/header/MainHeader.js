import React from 'react';
import './MainHeader.css';

//
const MainHeader = (props) => {
	return (
		// children from mainNavbar
		<header className='main-header'>
			{props.children}
		</header>
	);
};

export default MainHeader;