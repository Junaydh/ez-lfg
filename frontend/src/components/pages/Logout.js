import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { logout } from '../../services/auth';

const Logout = () => {
  const { updateUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      updateUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleLogout} className="btn btn-primary">Logout</button>
  );
};

export default Logout;