import React from 'react';
import '../styles/About.css';
import { Link } from "react-router-dom"
const linkedInHost = "https://www.linkedin.com/in/phil-tantsidis-0813ba/"
const resumeHost = "https://docs.google.com/document/d/1eImY7yy03w1-4BBdiZYjJgxoDNtWiw3eqNw-_zOaipM/edit?usp=sharing"
// can also work with relative urls like 'doc/sign/' or '/doc/sign'
const relativeOrAbsoluteURL = ""
const linkedInUrl = new URL(relativeOrAbsoluteURL,linkedInHost).href;
const resumeUrl = new URL(relativeOrAbsoluteURL,resumeHost).href


export default function About() {
  return (
    
    <div style={{ backgroundImage: 'url(/assets/images/sunset.jpeg)'}}>
    <section className="container">
      <h1>Full-Stack Developer</h1>
      <h2>About me</h2>
      <section className="about-me container m-3 p-3">
        <div className="left-align">
          <img alt="Phil Tantsidis" src="./assets/images/phil_photo2.png" className="left" />
        </div>
        <ul className="right-align">
          <li>Full Stack Developer with HTML, JavaScript, CSS, JQuery, Bootstrap, SQL and API skills. REACT, MERN, MVC as well. </li>
          <li>Baan LN Infor, BOI, DDC, supply chain, manufacturing, master data integration, security, development,
            administrative, training, implementation and consulting.</li>
          <li>Specializing in Aerospace and Defense with experience in manufacturing and automotive.</li>
          <li>Systems Analyst and Programmer adding Full Stack Developer to this already experienced technical expert.</li>
          <div></div>
          <a href={linkedInUrl} target={'_blank'} rel="noopener noreferrer external">LinkedIn</a>
          {/* <Link to ={{ pathname: "https://www.linkedin.com/in/phil-tantsidis-0813ba/"}} className ='LinkedIn'>LinkedIn Profile</Link> */}
          
          <div></div>
          <a href={resumeUrl} target={'_blank'} rel="noopener noreferrer external">Resume</a>
          {/* <Link to={{ pathname:  "https://docs.google.com/document/d/1eImY7yy03w1-4BBdiZYjJgxoDNtWiw3eqNw-_zOaipM/edit?usp=sharing" }} tareget = "_blankl" className = 'Resume' >Resume</Link> */}
        </ul>
      </section>
    </section>
    </div>
  );
}