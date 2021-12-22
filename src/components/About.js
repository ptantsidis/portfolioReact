import React from 'react';
import '../styles/About.css';
import myImage from './images/phil_photo2.png';

const linkedInHost = "https://www.linkedin.com/in/phil-tantsidis-0813ba/"
const resumeHost = "https://docs.google.com/document/d/1eImY7yy03w1-4BBdiZYjJgxoDNtWiw3eqNw-_zOaipM/edit?usp=sharing"
const AbsoluteURL = ""
const linkedInUrl = new URL(AbsoluteURL,linkedInHost).href;
const resumeUrl = new URL(AbsoluteURL,resumeHost).href


export default function About() {
  return (
    // 
    <div style={{ backgroundImage: 'url(/assets/images/sunset.jpeg)'}}>
    <section className="container">
      <h2>About Me</h2>
      <h2>Full-Stack Developer+</h2>
      <section className="about-me container m-3 p-3">
        <div className="left-align">
          <img src= {myImage} alt="Phil Tantsidis" className="left"/>
        </div>
        <ul className="right-align">
          <li>Full Stack Developer with HTML, JavaScript, CSS, JQuery, Bootstrap, SQL and API skills. REACT, MERN, MVC as well. </li>
          <li>Baan LN Infor, BOI, DDC, Supply Chain Management, Manufacturing, Master Data Integration, Security, Development,
            Application Administration, Training, Implementation and Consulting.</li>
          <li>Specializing in Aerospace and Defense with experience in manufacturing and automotive.</li>
          <li>Systems Analyst and Programmer adding Full Stack Developer to this already experienced technical expert.</li>
          <div></div>
          <a href={linkedInUrl} target={'_blank'} rel="noopener noreferrer external">LinkedIn</a>       
          <div></div>
          <a href={resumeUrl} target={'_blank'} rel="noopener noreferrer external">Resume</a>
        </ul>
      </section>
    </section>
    </div>
  );
}