import React from 'react';
import '../styles/Section.css';
import projects from '../portfolio.json';
// import { useState, useEffect } from 'react';

const Section = () => {
  // const [ project, setProjects] = useState([])
  // useEffect(() => {
  // setProjects(projects)
  // }, [])

  return (
    <div>
    <div style={{ backgroundImage: 'url(assets/images/sunset.jpeg)'}}>
    <section className="column container">
      <h2>Full-Stack Development</h2>
      <div className=" container d-flex flex-wrap justify-content-evenly">
      {projects.map((app, key) => {
        return (
        <section className="card card-column" key={key}>
          <h3>{app.title}</h3>
          <li>{app.description}</li>
          <li><a href={app.deploy}><img src = {process.env.PUBLIC_URL + app.src} className="image img-fluid" alt={app.title} /></a></li>
          <li><a href={app.github}>GitHub</a></li>
        </section>
        )
      })}
      </div>
    
    </section>
    </div>
    </div>
  );
}


export default Section;
