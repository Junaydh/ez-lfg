import React, { useState, useContext } from 'react';
import { register } from '../services/auth';
import { AuthContext } from '../contexts/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [discordTag, setDiscordTag] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const { updateUser } = useContext(AuthContext);

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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Profile Picture:
        <input type="text" value={profilePic} onChange={handleProfilePicChange} />
      </label>
      <br />
      <label>
        Discord Tag:
        <input type="text" value={discordTag} onChange={handleDiscordTagChange} />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;