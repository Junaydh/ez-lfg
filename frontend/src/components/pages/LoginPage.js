import './Page.scss';
import React, { useState } from 'react';
import Login from './Login';

export default function LoginPage() {
  const [error, setError] = useState('');

  return (
    <div>
      <h1>Login</h1>
      {error && <div className="error">{error}</div>}
      <Login setError={setError} />
    </div>
  );
}