import './SessionListItem.scss';
import { joinSession, leaveSession } from '../hooks/joinOrLeaveSession';
import { getSessionPlayers } from '../hooks/getSessionPlayers';
import { useState, useEffect } from 'react';
import UserList from './UserList';
import { getSessions } from '../hooks/getSessions';


function SessionListItem({ session, userId }) {
  const [sessionPlayers, setSessionPlayers] = useState([]);
  const [joined, setJoined] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/sessions`)
      .then(response => setSessions(response.data))
      .catch(err => {
        console.error(err.message);
        setSessions([]);
      });
  }, []);
  

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
    if (session.users.length >= session.max_players) {
      return; // Don't allow joining when session is full
    }
  
    if (joined) {
      leaveSession(userId, session.id).then(() => {
        getSessionPlayers(session.id).then(players => {
          setSessionPlayers(players);
          setJoined(false);
        });
        setShowUserList(false);
      });
    } else {
      // Check if the user is already joined to a session
      const alreadyJoinedSession = sessions.find(session => session.users.some(user => user.id === userId));
      if (alreadyJoinedSession) {
        // User has already joined a session, so show an error message or disable the join button
        return;
      }
      
      // User has not already joined a session, so proceed with joining this session
      joinSession(userId, session.id).then(() => {
        getSessionPlayers(session.id).then(players => {
          setSessionPlayers(players);
          setJoined(true);
        });
        setShowUserList(true);
      });
    }
  };
  

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
          Players: {sessionPlayers.length}/{session.max_players}
        </span>
          <span>Mic Required: {session.mic_required ? "Yes" : "No"}</span>
        </div>
        <div className="right-details">
          <div className="players">
            {playerUsernames}
          </div>
        </div>
      </div>
      {showUserList && <UserList sessionId={session.id} />}
      <footer>
        <span>{formattedDate}</span>
        {session.users.length >= session.max_players ? (
  <span className="session-full">Session Full</span>
) : joined ? (
  <button className='leave-session' onClick={handleJoinOrLeaveSession}>
    Leave Session
  </button>
) : (
  <button onClick={handleJoinOrLeaveSession}>Join Session +</button>
)}
      </footer>
      
    </div>
  );
}

export default SessionListItem;
