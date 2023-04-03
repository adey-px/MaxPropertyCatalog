import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './sideNavbar.css';

// Select children from navbarLinks comp
// show here taken to sideDrawer in mainNavbar comp
const SideNavbar = (props) => {
	const mobile = (
		<CSSTransition
			classNames='slide-in-left'
			in={props.show}
			timeout={200}
			mountOnEnter
			unmountOnExit
		>
			<aside
				className='side-drawer'
				onClick={props.onClick}
			>
				{props.children}
			</aside>
		</CSSTransition>
	);

	// ref drawer above root in index.html
	return ReactDOM.createPortal(
		mobile,
		document.getElementById('drawer')
	);
};

export default SideNavbar;
