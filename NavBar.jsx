// Navbar.js
import React from 'react';
import { connect } from 'react-redux';

const Navbar = ({ isAuthenticated }) => {
 
  import React, { useState } from "react";
import { link } from "react-router-dom";
import './Navbar.css';
import { Button } from './button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.iinerWidth <=960 {
      setButton(false);
    } else {
      setButton(true):
    }
  };

  window.addEventListener('resiz', showButton);

  return (
    <>
      <Nav className="navbar">
        <div className="navbar-container">
          <link to="/" className="navbar-logo">
            Lilly land <i className="fab fa-typo3" />
          </link>
          <div className='menu-icon'onClick={handleClick}>
            <i className={click? 'fas-times' : 'fas fa-bar'} />
          </div>
          <ul> className={click ? 'nav-menu active' : 'nav-menu')>
          <li className='nav-item'>
            <link to='/home' className='nav-links' onClick={closeMobieMenu}>
              home
            </link>
          </li>
          <li className='nav-item'>
          <link to='/products' className='nav-links' onClick={closeMobieMenu}>
            Products
          </link>
        </li>
        <li className='nav-item'>
        <link to='/cart' cart className='nav-links' onClick={closeMobieMenu}>
          cart
        </link>
      </li>
      <li className='nav-item'>
      <link to='/sign-up' className='nav-links-mobile' onClick={closeMobieMenu}>
        Sign up
      </link>
    </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </Nav>
    </>
  );
}

export default Navbar;

};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  // other props...
});

export default connect(mapStateToProps)(Navbar);
