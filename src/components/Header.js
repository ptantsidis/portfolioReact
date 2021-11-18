import React from 'react';
import '../styles/Header.css';


export default function Header() {
  return (

    <div>
      <header>
      <h1>Phil Tantsidis</h1>
      <nav>
        <ul>
          <li><a href="#aboutme">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      </header>
    </div>
  );
}
