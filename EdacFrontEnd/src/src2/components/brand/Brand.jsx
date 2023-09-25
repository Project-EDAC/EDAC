import React from 'react';
//import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';
import cdaclogo from '../../assets/CDAC2.png'
import sunbeamlogo from '../../assets/subeamlogo2.png'

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={cdaclogo} style={{height:150,width:280}}  alt='cdac'/>
    </div>
    <div>
      <img src={sunbeamlogo} style={{height:150,width:500}}alt='sunbeam'/>
    </div>
   
  </div>
);

export default Brand;
