import React, { useContext, useState } from 'react';
import './Navbar.scss';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import { AuthContext } from '../contexts/auth';

export default function Navbar() {
  const [showRegistration, setShowRegistration] = useState(false);
  const { user } = useContext(AuthContext);

  const renderLogin = () => {
    if (user) {
      return (
        <div>
          <Logout />
        </div>
      )
      } else {
      return (
        <div>
          <Login />
          {showRegistration && <button onClick={() => setShowRegistration(false)}>Close Form</button>}
          {!showRegistration && <button onClick={() => setShowRegistration(true)}>Register</button>}
        </div>
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
        {showRegistration && <Register />}
      </div>
    </nav>
  );
}