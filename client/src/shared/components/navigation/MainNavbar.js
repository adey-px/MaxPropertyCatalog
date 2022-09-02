import React from 'react'

import MainHeader from '../header/MainHeader'
import {Link} from 'react-router-dom'
import './MainNavbar.css'


const MainNavbar = props => {
  return (
    // Children for mainHeader comp
    <MainHeader>
        <button className='main-navigation__menu-btn'>
            <span />
            <span />
            <span />
        </button>
        <h1 className="main-navigation__title">
           <Link to="/"> Your Places</Link>
        </h1>
        <nav>
            ...
        </nav>
    </MainHeader>
  )
}

export default MainNavbar