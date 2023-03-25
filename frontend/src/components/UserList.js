import { useEffect, useState } from 'react';
import { getSessionPlayers } from '../hooks/getSessionPlayers';
import UserListItem from './UserListItem';

function UserList({ sessionId, userId }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getSessionPlayers(sessionId).then(players => setPlayers(players));
  }, [sessionId]);

  // Only show the list of users if the current user is in the session
  if (players.some(player => player.id === userId)) {
    return (
      <div className="user-list-container">
        <h3>Players in this session:</h3>
        <div className="user-list">
          {players.map(player => (
            <UserListItem key={player.id} user={player} />
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default UserList;
