import React, { useState } from 'react';
import Register from './Register';

function RegisterPage() {
  const [error, setError] = useState('');

  return (
    <div>
      <h1>Register</h1>
      {error && <div className="error">{error}</div>}
      <Register setError={setError} />
    </div>
  );
}

export default RegisterPage;