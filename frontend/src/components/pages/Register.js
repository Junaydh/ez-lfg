import './Register.scss';
import React, { useState, useContext } from 'react';
import { register } from '../../services/auth';
import { AuthContext } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';

const Register = ({ setError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [discordTag, setDiscordTag] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate(); // import useNavigate from react-router-dom

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDiscordTagChange = (event) => {
    setDiscordTag(event.target.value);
  };

  const handleProfilePicChange = (event) => {
    setProfilePic(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await register(username, password, email, profilePic, discordTag);
      updateUser(user);
      navigate('/');
    } catch (error) {
      console.error(error)
      setError('Username already in use. Please try again.')
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-floating mb-3"> 
        <input type="username" className="form-control" id="floatingUsername" placehholder="Username" value={username} onChange={handleUsernameChange} />  
        <label htmlFor="floatingUsername">Username</label>
      </div>
      <div className="form-floating mb-3">
         <input type="password" className="form-control" id="floatingPassword" placehholder="Password" value={password} onChange={handlePasswordChange} />
         <label htmlFor="floatingPassword" className="form-label">Password</label>
      </div>
      <div className="form-floating mb-3">
         <input type="text" className="form-control" id="floatingEmail" placehholder="Email"value={email} onChange={handleEmailChange} />
         <label htmlFor="floatingEmail" className="form-label">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingPfp" placehholder="Profile Picture" value={profilePic} onChange={handleProfilePicChange} />
        <label htmlFor="floatingPfp" className="form-label">Profile Picture</label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingTag" placehholder="Discord Tag"value={discordTag} onChange={handleDiscordTagChange} />
        <label htmlFor="floatingTag" className="form-label">Discord Tag</label>
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default Register;