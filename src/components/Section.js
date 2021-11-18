import React from 'react';
import '../styles/Section.css';
import projects from '../portfolio.json';
import { useState, useEffect } from 'react';

const Section = () => {
  // const [ project, setProjects] = useState([])
  // useEffect(() => {
  //   setProjects(projects)
  // }, [])

  return (
    <section class="column container">
      <h3>Portfolio</h3>
      <div className=" container d-flex flex-wrap justify-content-evenly">
      {projects.map((app, key) => {
        return (<section className="card card-column" key={key}>
          <h3>{app.title}</h3>
          <a href={app.deploy}><img
            src={app.src} className="image4 img-fluid" alt={app.title} /></a>
          <a href={app.github}>GitHub</a>
        </section>

        )
      })}
      </div>
    </section>

  );
}


export default Section;
