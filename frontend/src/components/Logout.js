import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import { logout } from '../services/auth';

const Logout = () => {
  const { updateUser } = useContext(AuthContext);
  const history = useHistory();

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;