import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../header/MainHeader";
import NavbarLinks from "./NavbarLinks";
import SideDrawer from "../mobile/SideDrawer";
import Backdrop from "../element/Backdrop";
import "./mainNavbar.css";

//
const MainNavbar = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // open siteDrawer handler
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  // close siteDrawer, ref Backdrop in element dir
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <React.Fragment>
      {/* If siteDraw is open, render backdrop comp to close it*/}
      {drawerOpen && <Backdrop onClick={closeDrawer} />}

      {/* Sidedrawer from sideDrawer comp in mobile dir */}
      <SideDrawer show={drawerOpen} onClick={closeDrawer}>
        <nav className="main-navigation__drawer-nav">
          <NavbarLinks />
        </nav>
      </SideDrawer>

      {/* For children in mainHeader comp */}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>

        <h1 className="main-navigation__title">
          <Link to="/">GeoTracker</Link>
        </h1>

        <nav className="main-navigation__header-nav">
          <NavbarLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavbar;
