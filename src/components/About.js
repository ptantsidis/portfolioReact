import React from 'react';
import '../styles/About.css';
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div style={{ backgroundImage: 'url(/assets/images/sundown.jpg)'}}>
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
          <Link to = "url(https://www.linkedin.com/in/phil-tantsidis-0813ba/)"  className ='LinkedIn'>LinkedIn Profile</Link>
          <div></div>
          <Link to="url(./assets/images/Tantsidis.doc)" className = 'Resume' >Resume</Link>
        </ul>
      </section>
    </section>
    </div>
  );
}