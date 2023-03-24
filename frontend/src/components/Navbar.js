import React from 'react';
import './Navbar.scss';

function Navbar() {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <nav className='navigation'>
      <img src={`${publicUrl}/EZLFG.png`} alt='logo' className='logo' />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;