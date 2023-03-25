import React, { useEffect, useState } from 'react';
import UserListItem from './UserListItem';
import { getSessionPlayers } from '../hooks/getSessionPlayers';
import './UserList.scss';

const UserList = ({ sessionId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getSessionPlayers(sessionId)
      .then(users => setUsers(users))
      .catch(err => console.error(err.message));
  }, [sessionId]);

  useEffect(() => {
    const interval = setInterval(() => {
      getSessionPlayers(sessionId)
        .then(users => setUsers(users))
        .catch(err => console.error(err.message));
    }, 10); // update users every 10 seconds

    return () => clearInterval(interval);
  }, [sessionId]);

  return (
    <table className="user-list">
      <thead>

      </thead>
      <tbody>
        {users.map(user => (
          <UserListItem key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;