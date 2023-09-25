import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>After completion of course students will be able to acquire the following skills:</h4>
      <h1 className="gradient__text">Course Outcome</h1>
      <p>Use technologies to access and interpret information effectively</p>
      <p>Apply their analytical skills to investigate unfamiliar problems using web technologies like HTML 5.0, CSS, Java Script, Jquery, Angular JS</p>
      <p>
      Use quantitative data confidently and competently
      </p>
      <p>
      Use communication technologies competently
      </p>
      <p>
      Understand the multi-tier architecture of web-based enterprise applications using. Enterprise JavaBeans. Integrate Servlets, JSPs with EJB and Databases in J2EE application
      </p>
      <p>
      Understand .net architecture, develop and maintain the application
      </p>
    </div>
  </div>
);

export default Possibility;
