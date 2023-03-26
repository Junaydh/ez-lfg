import React from 'react';
import './Navbar.scss';
import Login from './Login';
import axios from 'axios';
import { login, logout, register } from '../services/auth';

export default function Navbar() {
  return (
    <nav className='navigation'>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className='auth-buttons'>
        <Login />
      </div>
    </nav>
  );
}


