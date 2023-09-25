import React from 'react';
import '../style.css'; // Make sure the path to your CSS file is correct
import logo from '../../src2/assets/logo-aqua2.png'; // Make sure the path to your logo image is correct
import { Link } from 'react-router-dom'; // If you're using React Router

function FacultyHeader() {
  return (
    <div className="site-header">
      <div className="container">
        <Link to="/" className="branding">
          <img src={logo} style={{ width: 100.58, height: 30.58 }} alt="EDAC Logo" className="logo" />
          <div className="logo-type">
            <h1 className="site-title">EDAC</h1>
            {/* <small className="site-description">tagline goes here</small> */}
          </div>
        </Link>

        <div className="main-navigation">
          <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
          <ul className="menu">
            <li className="menu-item"><Link to="/">Home</Link></li>
            {/* <li className="menu-item current-menu-item"><Link to="/admin">Admin login</Link></li> */}
            <li className="menu-item"><Link to="/faculty">Faculty Login</Link></li>
            {/* <li className="menu-item"><Link to="/faculty">Faculty Login</Link></li> */}
            <li className="menu-item"><Link to="/faculty/logout">LogOut</Link></li>
          </ul>
        </div>

        {/* Implement your mobile navigation here */}

      </div>
    </div>
  );
}

export default FacultyHeader;
