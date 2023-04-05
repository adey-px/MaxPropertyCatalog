import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '../header/Header';
import NavbarLinks from './NavLinks';
import SideNavbar from '../mobile/SideNavbar';
import Backdrop from '../element/Backdrop';
import './navbar.css';

//
const MainNavbar = (props) => {
	const [mobileView, setmobileView] = useState(false);

	// open siteDrawer handler
	const openSideNavHandler = () => {
		setmobileView(true);
	};

	// close siteDrawer, ref Backdrop in element dir
	const closeSideNavHandler = () => {
		setmobileView(false);
	};

	return (
		<React.Fragment>
			{/* if siteNavbar open, show backdrop to close it */}
			{mobileView && (
				<Backdrop onClick={closeSideNavHandler} />
			)}

			{/* sideNavbar for mobile view */}
			<SideNavbar
				show={mobileView}
				onClick={closeSideNavHandler}
			>
				<nav className='main-navigation__drawer-nav'>
					<NavbarLinks />
				</nav>
			</SideNavbar>

			{/* children in mainHeader */}
			<MainHeader>
				<button
					onClick={openSideNavHandler}
					className='main-navigation__menu-btn'
				>
					<span />
					<span />
					<span />
				</button>

				<h1 className='main-navigation__title'>
					<Link to='/'>Catalog</Link>
				</h1>

				<nav className='main-navigation__header-nav'>
					<NavbarLinks />
				</nav>
			</MainHeader>
		</React.Fragment>
	);
};

export default MainNavbar;
