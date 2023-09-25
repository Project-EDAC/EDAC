import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="PG Diploma In Advanced Computing (PG-DAC)" text=" " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The education eligibility criteria for the PG-DAC course is:</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title=" " text="Graduate in Engineering (10+2+4 or 10+3+3 years) in IT / Computer Science / Electronics / Telecommunications / Electrical / Instrumentation, OR MSc/MS (10+2+3+2 years) in Computer Science, IT, Electronics OR" />
      <Feature title=" " text="Graduate in any discipline of Engineering,OR
MCA, MCM, OR
Post Graduate Degree in Physics/ Mathematics / Statistics, OR" />
      <Feature title=" " text="Post Graduate Degree in Management with graduation in IT / Computer Science / Computer Applications.
The candidates must have secured a minimum of 50% marks in their qualifying examination." />
    </div>
  </div>
);

export default WhatGPT3;
