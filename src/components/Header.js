import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom"


export default function Header() {
  return (

    <div>
      <header>
        <h1>Phil Tantsidis</h1>
        <nav>
          <ul>
            <Link to='/' className = 'btn btn-link'>Portfolio</Link>
            <Link to='/about' className = 'btn btn-link'>About Me</Link>
            <Link to='/contact' className = 'btn btn-link'>Contact</Link>
          </ul>
        </nav>
      </header>

    </div>

  );
}

