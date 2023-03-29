import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import FilterBar from './components/Filterbar';
import UserList from './components/UserList';
import { useSessions } from './hooks/useSessions';
import SessionList from './components/SessionList';
import SessionForm from './components/SessionForm';
import React, { useState, useContext } from 'react';
import { AuthContext } from './contexts/auth';

function App() {
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [selectedGameCover, setSelectedGameCover] = useState(null);
  const [newSessions, setNewSessions] = useState([]);
  const sessions = useSessions(selectedGameId);
  const { user } = useContext(AuthContext);

  let userId;

  if (!user) {
    userId = null;
  } else {
    userId = user.id;
  }

  useEffect(() => {
    setNewSessions(sessions);
    console.log("Sessions state: ", sessions)
    console.log("newSessions state: ", newSessions)
  }, [sessions]);

  const handleGameClick = (gameId, gameCover) => {
    setSelectedGameId(prevSelectedGameId => prevSelectedGameId === gameId ? null : gameId);
    setSelectedGameCover(prevSelectedGameCover => prevSelectedGameCover ? null : gameCover);
  };

  return (
    <main style={{backgroundImage: `url(${selectedGameCover})` }}>
      <Navbar />
      <div className='games-list'>
        <GamesList selectedGameId={selectedGameId} onGameClick={handleGameClick} />
      </div>
      <div className='create-session'> 
        <SessionForm sessions={newSessions}/>
      </div>
      
      <SessionList gameCover ={selectedGameCover} sessions={sessions} userId={userId}/>  
    </main>
  );
}


export default App;
