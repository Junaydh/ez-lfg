import './SessionListItem.scss';
import { getSessionPlayers } from '../hooks/getSessionPlayers';
import { useState, useEffect } from 'react';

function SessionListItem({ session }) {
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

  const playersUsernames = sessionPlayers.map((player) => player.username);

  return (
    <div key={session.id} className="session-card">
      <h2>{session.title}</h2>
      <h3>Host: {session.creator.username}</h3>
      <h5>
        <i className="fab fa-discord"></i> {session.creator.discord_tag}
      </h5>
      <div className="session-prefs-description">
        <div className="preferences">
          <span>
            Players: {session.users.length}/{session.max_players}
          </span>
          <span>Mic Required: {session.mic_required ? "Yes" : "No"}</span>
        </div>
        <p>{session.description}</p>
        <div>
          <span>Players: {playersUsernames.join(", ")}</span>
        </div>
      </div>
      <span>{formattedDate}</span>
    </div>
  );
}

export default SessionListItem;
