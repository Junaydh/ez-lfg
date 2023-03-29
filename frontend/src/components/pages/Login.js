import './Login.scss';
import React, { useState, useContext } from 'react';
import { login } from '../../services/auth';
import { AuthContext } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({setError}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate(); // import useNavigate from react-router-dom

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await login(username, password);
      updateUser(user);
      navigate('/'); // redirect to the home page after successful login
    } catch (error) {
      setError('Invalid credentials. Please try again.')
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-floating mb-3">
        <input type="username" className="form-control" id="floatingInput" placeholder='Username' value={username} onChange={handleUsernameChange} />
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

export default Login;
