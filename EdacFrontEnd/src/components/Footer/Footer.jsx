import React from 'react';
import '../style.css'; // Make sure the path to your CSS file is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus, faPinterest } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-md-offset-1">
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" aria-label="Google Plus"><FontAwesomeIcon icon={faGooglePlus} /></a>
              <a href="#" aria-label="Pinterest"><FontAwesomeIcon icon={faPinterest} /></a>
            </div>
          </div>
        </div>

        <p className="colophon"style={{color:"white"}}>Copyright 2023 EDAC. Designed by EDAC Team. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
