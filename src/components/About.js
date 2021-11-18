import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section class="container">
        <h1>About Me</h1>
        <container class="about-me">
                <div class="left-align">
            {/* <img src="./assets/images/phil_photo2.png" class="left"> */}
                </div>
        <ul class="right-align">
            <li>Full Stack Developer with HTML, JavaScript, CSS, JQuery, Bootstrap, SQL and API skills. REACT MERN, MVC as well. </li>
            <li>Baan LN Infor, BOI, DDC, supply chain, manufacturing, master data integration, security, development,
                administrative, training, implementation and consulting.</li> 
            <li>Specializing in Aerospace and Defense with experience in manufacturing and automotive.</li>
            <li>Systems Analyst and Programmer adding Full Stack Developer to this already experienced technical expert.</li>
            {/* <li><a href="https://www.linkedin.com/in/phil-tantsidis-0813ba/">LinkedIn Profile</a></li>
            <li><a href="./assets/images/Tantsidis.doc">Resume</a></li> */}

        </ul>
        </container>    
    </section>
  );
}