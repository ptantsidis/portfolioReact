import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section className="container">
      <h1>About Me</h1>
      <section className="about-me container m-3 p-3">
        <div className="left-align">
          <img alt="Phil Tantsidis" src="./assets/images/phil_photo2.png" class="left" />
        </div>
        <ul className="right-align">
          <li>Full Stack Developer with HTML, JavaScript, CSS, JQuery, Bootstrap, SQL and API skills. REACT MERN, MVC as well. </li>
          <li>Baan LN Infor, BOI, DDC, supply chain, manufacturing, master data integration, security, development,
            administrative, training, implementation and consulting.</li>
          <li>Specializing in Aerospace and Defense with experience in manufacturing and automotive.</li>
          <li>Systems Analyst and Programmer adding Full Stack Developer to this already experienced technical expert.</li>
          {/* <li><a href="https://www.linkedin.com/in/phil-tantsidis-0813ba/">LinkedIn Profile</a></li>
            <li><a href="./assets/images/Tantsidis.doc">Resume</a></li> */}

        </ul>
      </section>
    </section>
  );
}