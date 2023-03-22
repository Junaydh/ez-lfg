import React from 'react';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className='navigation'>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}


