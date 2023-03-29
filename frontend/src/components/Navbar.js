// Navbar.js
import React, { useContext, useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

export default function Navbar() {
  const { user } = useContext(AuthContext);

  const publicUrl = process.env.PUBLIC_URL;

  return (
    <nav className="navigation">
      <img src={`${publicUrl}/EZLFG.png`} alt="logo" className="logo" />
      <ul className="navigation-links">
        <div>
          {user ? (
            <div>
              <Link to="/profile">Profile</Link>
            </div>
          ) : (
            <div>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );  
}