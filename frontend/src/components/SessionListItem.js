import './SessionListItem.scss';
import { joinSession } from '../hooks/joinSession';
import { getSessionPlayers } from '../hooks/getSessionPlayers';
import { useState, useEffect } from 'react';

function SessionListItem({ session, userId }) {
  const [sessionPlayers, setSessionPlayers] = useState([]);

  useEffect(() => {
    getSessionPlayers(session.id).then(players => {
      setSessionPlayers(players);
    });
  }, [session.id]);

  const date = new Date(session.created_at);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const playerUsernames = (
    <>
      {sessionPlayers.length > 0 ? (
        <ul>
          {sessionPlayers.map((player) => (
            <li key={player.id}>{player.username}</li>
          ))}
        </ul>
      ) : (
        <p>Session is empty</p>
      )}
    </>
  );
  
  
  const handleJoinSession = () => {
    joinSession(userId, session.id).then(() => {
      getSessionPlayers(session.id).then(players => {
        setSessionPlayers(players);
      });
    });
  }

  return (
    <div key={session.id} className="session-card">
      <h2>{session.title}</h2>
      <div className='host-description'>
        <div className='host-details'>
          <h3>Host: {session.creator.username}</h3>
          <h5>
            <i className="fab fa-discord"></i> {session.creator.discord_tag}
          </h5>
        </div>
        <p>{session.description}</p>
      </div>
      <div className="details">
        <div className="preferences">
          <span>
            Players: {session.users.length}/{session.max_players}
          </span>
          <span>Mic Required: {session.mic_required ? "Yes" : "No"}</span>
        </div>
        <div className="right-details">
          <div className="players">
            {playerUsernames}
          </div>
        </div>
      </div>
      <footer>
        <span>{formattedDate}</span>
        <button onClick={handleJoinSession}>Join Session +</button>
      </footer>
    </div>
  );
}

export default SessionListItem;
