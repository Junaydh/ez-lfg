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

  return (
    <table className="user-list">
      <thead>
        <tr>
          <th className="user-list__header">Username</th>
          <th className="user-list__header">Profile Pic</th>
          <th className="user-list__header">Discord Tag</th>
        </tr>
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