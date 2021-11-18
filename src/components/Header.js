import React from 'react';
import '../styles/Header.css';
import {Link} from "react-router-dom"

export default function Header() {
  return (

    <div>
      <header>
      <h1>Phil Tantsidis</h1>
      <nav>
        <ul>
          <Link to='/'>About Me</Link>
          <Link to='/section'>Portfolio</Link>
          <Link to='/contact'>Contact</Link>
        </ul>
      </nav>
      </header>
    </div>
  );
}
