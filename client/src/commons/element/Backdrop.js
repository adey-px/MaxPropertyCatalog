import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';


const Backdrop = props => {

  return ReactDOM.createPortal(

    // Rendered in index.html, used in mainNavbar 
    <div className="backdrop" 
         onClick={props.onClick}>
    </div>,

    document.getElementById('backdrop')

  );
}

export default Backdrop;
