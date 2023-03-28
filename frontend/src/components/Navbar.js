import React, { useContext, useState } from 'react';
import './Navbar.scss';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import { AuthContext } from '../contexts/auth';

function Navbar() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [error, setError] = useState('');
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
          <Login setError={setError}/>
          {showRegistration && <button onClick={() => setShowRegistration(false)}>Close Form</button>}
          {!showRegistration && <button onClick={() => setShowRegistration(true)}>Register</button>}
        </div>
      )
    }
  }

  const publicUrl = process.env.PUBLIC_URL;

  return (
    <nav className="navigation">
      <img src={`${publicUrl}/EZLFG.png`} alt="logo" className="logo" />
      <ul className="navigation-links">
        <div>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </div>
        <div>
          <li>{renderLogin()}</li>
        </div>
        <div>
          <li>{showRegistration && <Register setShowRegistration={setShowRegistration} setError={setError} />}</li>
        </div>
      </ul>
      <div className="auth-buttons">
        {error && <div className="error">{error}</div>}
      </div>
    </nav>
  );  
}

export default Navbar;