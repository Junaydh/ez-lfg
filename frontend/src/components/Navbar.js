import React, { useContext } from 'react';
import './Navbar.scss';
import Login from './Login';
import { AuthContext } from '../contexts/auth';


export default function Navbar() {
  const { user } = useContext(AuthContext);

  const renderLogin = () => {
    if (user) {
      return (
        <Logout />
      );
    } else {
      return (
        <Login />
      )
    }
}


  return (
    <nav className='navigation'>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className='auth-buttons'>
        {renderLogin()}
      </div>
    </nav>
  );
}


