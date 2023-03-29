// Navbar.js
import React, { useContext, useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import Logout from './pages/Logout'

export default function Navbar() {
  const { user } = useContext(AuthContext);

  const publicUrl = process.env.PUBLIC_URL;

  return (
    <nav className="navigation">
      <img src={`${publicUrl}/EZLFG.png`} alt="logo" className="logo" />
      <ul className="navigation-links">
        <div className='parent-div'>
          {user ? (
              <div className='nav-links'>
                <div className='left'>
                  <Link to="/" className='nav-link'>Home</Link>
                </div>
                <div className='right'>
                  <Link to="/profile" className='nav-link'>Profile</Link>
                  <Logout />
                </div>
              </div>
            ) : (
              <div className='nav-links'>
                <div className='left'>
                  <Link to="/" className='nav-link home'>Home</Link>
                </div>
                <div className='right'>
                  <Link to="/login" className='nav-link login'>Login</Link>
                  <Link to="/register" className='nav-link register'>Register</Link>
                </div>
              </div>
            )}
        </div>
      </ul>
    </nav>
  );  
}