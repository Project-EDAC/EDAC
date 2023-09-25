import React from 'react';
import people from '../../assets/people.png';
import ai2 from '../../assets/ai2.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">PG Diploma In Advanced Computing (PG-DAC)
      </h1>
      <p>PG-DAC is the most popular PG Diploma course of C-DAC. The course is targeted towards Engineering Graduates and MCA/MSc who wish to venture into the domain of advanced computing. The course aims to groom the students to enable them to work on current technology scenarios as well as prepare them to keep pace with the changing face of technology and the requirements of the growing IT industry. The entire course syllabus, courseware, teaching methodology and the course delivery have been derived from the rich research and development background of C-DAC. Running successfully for 30 years, the PG-DAC course has produced thousands of professionals, who are well positioned in the industry today.</p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={ai2} />
    </div>
  </div>
);

export default Header;
