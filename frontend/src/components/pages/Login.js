import React, { useState, useContext } from 'react';
import { login } from '../../services/auth';
import { AuthContext } from '../../contexts/auth';

const Login = ({setError}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { updateUser } = useContext(AuthContext);

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
      // Redirect to dashboard or home page
    } catch (error) {
      setError('Invalid credentials. Please try again.')
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input type="username" className="form-control" id="floatingInput" placeholder='Username' value={username} onChange={handleUsernameChange} />
        <label for="floatingInput">Username</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={handlePasswordChange}/>
        <label for="floatingPassword">Password</label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;