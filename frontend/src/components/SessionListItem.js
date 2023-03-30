import "./SessionListItem.scss";
import { joinSession, leaveSession } from "../hooks/joinOrLeaveSession";
import { getSessionPlayers } from "../hooks/getSessionPlayers";
import { useState, useEffect } from "react";
import { kickPlayer } from "../hooks/kickPlayer";

function SessionListItem({ session, userId }) {
  const [sessionPlayers, setSessionPlayers] = useState([]);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    getSessionPlayers(session.id).then((players) => {
      setSessionPlayers(players);
    });
  }, [session.id]);

  useEffect(() => {
    if (sessionPlayers.some((user) => user.id === userId)) {
      setJoined(true);
    } else {
      setJoined(false);
    }
  }, [sessionPlayers, userId]);

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

  const handleKick = (playerId) => {
    kickPlayer(session.id, playerId).then(() => {
      getSessionPlayers(session.id).then((players) => {
        setSessionPlayers(players).catch((err) => {
          return err.message;
        });
      });
    });
  };

  const isCreator = session.creator.id === userId;

  const playerUsernames = (
    <div className="player-details">
      {sessionPlayers.length === 0 ? (
        <div className="empty-session">Session is empty</div>
      ) : (
        <table className="player-list-table">
          <thead>
            <tr>
              <th></th>
              <th className="--player">Player</th>
              <th className="--discord">Discord</th>
              {isCreator && <th></th>}
            </tr>
          </thead>
          <tbody>
            {sessionPlayers.map((player) => (
              <tr key={player.id}>
                <td>
                  <img
                    src={player.profile_pic}
                    alt="Profile"
                    className="profile-pic"
                  />
                </td>
                <td>{player.username}</td>
                <td>{player.discord_tag}</td>
                {isCreator && (
                  <td>
                    {player.id !== userId && (
                      <button
                        className="kick-button"
                        onClick={() => handleKick(player.id)}
                      >
                        Kick
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

  const handleJoinOrLeaveSession = () => {
    if (sessionPlayers.length >= session.max_players) {
      return; // Don't allow joining when session is full
    }
    if (userId === null) {
      alert("Please log in to join a session");
      return; // Don't allow joining when user is not logged in
    }

    if (joined) {
      // User is already in the session, render Leave Session button
      leaveSession(userId, session.id).then(() => {
        getSessionPlayers(session.id).then((players) => {
          setSessionPlayers(players);
          setJoined(false); // update the joined state to false
        });
      });
    } else if (sessionPlayers.some((user) => user.id === userId)) {
      // User is already in the session but not joined, render Join Session + button
      setJoined(true); // update the joined state to true
    } else {
      // User is not in the session, render Join Session + button
      joinSession(userId, session.id).then(() => {
        getSessionPlayers(session.id).then((players) => {
          setSessionPlayers(players);
          setJoined(true); // update the joined state to true
        });
      });
    }
  };

  return (
    <div key={session.id} className="session-card-wrapper">
        <h2>{session.title}</h2>
        <p>{session.description}</p>
      <div key={session.id} className="session-card">
        <div className="host-description">
          <div className="host-details">
            <h3>Session </h3>
            <p>{session.id}</p>
            <h3>Host</h3>
            <p>{session.creator.username}</p>
            <h5>
              <i className="fab fa-discord"></i> {session.creator.discord_tag}
            </h5>
          </div>
        </div>
        <div className="details">
          <div className="preferences">
            {/*sessionPlayers.length === 0 ? (<div className="players"><p>Session is empty</p></div>) : <></>*/}
            <div>
            <h3>Players</h3> 
            <p>{sessionPlayers.length}/{session.max_players}</p>
            </div>
            <div>Mic Required: {session.mic_required ? "Yes" : "No"}</div>
            <div>
              Playstyle: {session.competitve ? "Competitive" : "Casual"}{" "}
            </div>
            <div>Region: {session.region}</div>
            <div>Platform: {session.platform}</div>
          </div>
          {sessionPlayers.length === 0 ? (
            <div className="session-empty">Session is empty</div>
          ) : (
            <div className="players-container">{playerUsernames}</div>
          )}
        </div>
        <footer>
          <span>{formattedDate}</span>
          {sessionPlayers.length >= session.max_players ? (
            <span className="session-full">Session Full</span>
          ) : joined ? (
            <button
              className="leave-session"
              onClick={handleJoinOrLeaveSession}
            >
              Leave Session
            </button>
          ) : (
            <button onClick={handleJoinOrLeaveSession}>Join Session +</button>
          )}
        </footer>
      </div>
    </div>
  );
}
export default SessionListItem;
