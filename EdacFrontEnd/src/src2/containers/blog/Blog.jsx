import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Course Contents</h1>
    </div>
    <div className="gpt3__blog-container">
      {/* <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} text="C++ Programming    - 72 Hours" />
      </div> */}
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="C++ Programming    - 72 Hours" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Concepts of Operating System & Software Development Methodologies    - 72 Hours" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Object Oriented Programming with Java    - 112 Hours" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Algorithms and Data Structures (Using Java)    - 72 Hours" />
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Database Technologies    - 72 Hours" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Web Programming Technologies    - 112 Hours" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Microsoft .Net Technologies    - 84 Hours" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="General Aptitude & Effective Communication    - 80 Hours" />
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Web-based Java Programming    - 104 Hours" /> 
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Project    - 120 Hours" />
      </div>
    </div>
  </div>
);

export default Blog;
