import React from 'react';
import gpt3Logo from '../../assets/logo2.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h3 className="gradient__text" >CONTACT US</h3>
    </div>

    {/* <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        {/* <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p> */}
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>EDAC</h4>
        <p>Authorized Training Centre of C-DAC ACTS </p>
        <p>"Sunbeam IT Park", Ground Floor, Phase 2 of Rajiv Gandhi Infotech Park, Hinjawadi, Pune - 411057, MH-INDIA</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Webmail FAQs Sitemap Privacy Authorized Training Centre of C-DAC ACTS</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>EDAC. © 2023. All Rights Reserved.

</p>
    </div>
  </div>
);

export default Footer;
