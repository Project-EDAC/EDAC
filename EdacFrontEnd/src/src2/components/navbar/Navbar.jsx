import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo2 from '../../assets/logo4.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo2} />
        </div>
        <div className="gpt3__navbar-sign">
          <p><a href="/" style={{color:'#81AFDD'}}>Home</a></p>
          <p><a href="/admin/login" style={{color:'#81AFDD'}}>Admin Login</a></p>
          <p><a href="/faculty/login" style={{color:'#81AFDD'}}>Faculty Login</a></p>
          <p><a href="/student/login" style={{color:'#81AFDD'}}>Student Login</a></p>
          <p><a href="#blog" style={{color:'#81AFDD'}}>About us</a></p>
          <p><a href="#footer" style={{color:'#81AFDD'}}>Contacts</a></p>
        </div>
      </div>
      {/* <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="/">Home</a></p>
          <p><a href="/admin/login" style={{color:'aqua'}}>Admin Login</a></p>
          <p><a href="#possibility" style={{color:'aqua'}}>Faculty Login</a></p>
          <p><a href="#features" style={{color:'aqua'}}>Student Login</a></p>
          <p><a href="#blog" style={{color:'aqua'}}>About us</a></p>
          <p><a href="#blog" style={{color:'aqua'}}>Contacts</a></p>
          </div>
          {/* <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div> */}
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
