import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { register } from '../services/auth';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [discordTag, setDiscordTag] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <label>Discord Tag:</label>
          <input type="text" value={discordTag} onChange={(event) => setDiscordTag(event.target.value)} />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Signup;