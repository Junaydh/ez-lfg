import React from 'react';
import './Navbar.scss';
import axios from 'axios';

function Navbar() {
  const publicUrl = process.env.PUBLIC_URL;

  const handleLogin = () => {
    console.log("HandleLogin")
    axios.post('http://localhost:3001/users/login', {
      email: 'user@example.com',
      password: 'password123'
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
  };

  const handleLogout = () => {
    axios.post('http://localhost:3001/users/logout')
    .then(response => console.log(response))
    .catch(error => console.log(error));
  };

  const handleSignup = () => {
    axios.post('http://localhost:3001/users/signup', {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123'
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
  };

  return (
    <nav className='navigation'>
      <img src={`${publicUrl}/EZLFG.png`} alt='logo' className='logo' />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className='auth-buttons'>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleSignup}>Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;