import './SessionListItem.scss';
import { joinSession, leaveSession } from '../hooks/joinOrLeaveSession';
import { getSessionPlayers } from '../hooks/getSessionPlayers';
import { useState, useEffect } from 'react';

function SessionListItem({ session, userId, sessions, setSessions }) {
  const [sessionPlayers, setSessionPlayers] = useState([]);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    getSessionPlayers(session.id).then(players => {
      setSessionPlayers(players);
    });
  }, [session.id]);

  useEffect(() => {
    if (session.users.some(user => user.id === userId)) {
      setJoined(true);
    } else {
      setJoined(false);
    }
  }, [session.users, userId]);

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

  const handleJoinOrLeaveSession = () => {
    if (joined) {
      leaveSession(userId, session.id).then(() => {
        getSessionPlayers(session.id).then(players => {
          setSessionPlayers(players);
          setJoined(false); // update the joined state to false
          const updatedSessions = sessions.map(s => {
            if (s.id === session.id) {
              return {
                ...s,
                users: s.users.filter(u => u.id !== userId)
              }
            }
            return s;
          });
          setSessions(updatedSessions); // update the sessions state with the updated session
        });
      });
    } else {
      const alreadyJoinedSession = sessions.find(s => s.users.some(u => u.id === userId));
      if (alreadyJoinedSession) {
        leaveSession(userId, alreadyJoinedSession.id).then(() => {
          getSessionPlayers(alreadyJoinedSession.id).then(players => {
            const updatedSessions = sessions.map(s => {
              if (s.id === alreadyJoinedSession.id) {
                return {
                  ...s,
                  users: players
                }
              }
              return s;
            });
            setSessions(updatedSessions); // update the sessions state with the updated session
          });
        });
      }
      joinSession(userId, session.id).then(() => {
        getSessionPlayers(session.id).then(players => {
          setSessionPlayers(players);
          setJoined(true); // update the joined state to true
          const updatedSessions = sessions.map(s => {
            if (s.id === session.id) {
              return {
                ...s,
                users: [...s.users, { id: userId }]
              }
            }
            return s;
          });
          setSessions(updatedSessions); // update the sessions state with the updated session
        });
      });
    }
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
        {joined ? (
          <button className='leave-session' onClick={handleJoinOrLeaveSession}>Leave Session</button>
        ) : (
          <button onClick={handleJoinOrLeaveSession}>Join Session +</button>
        )}
      </footer>
    </div>
  );
}

export default SessionListItem;
