import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import FilterBar from './components/Filterbar';
import UserList from './components/UserList';
import { useSessions } from './hooks/useSessions';
import SessionList from './components/SessionList';
import SessionForm from './components/SessionForm';
import React, { useState } from 'react';

function App() {
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [sessions, setSessions] = useState([]);
  const userId = 8;

  const handleGameClick = (gameId) => {
    setSelectedGameId(prevSelectedGameId => prevSelectedGameId === gameId ? null : gameId);
  };

  const sessionsFromHook = useSessions(selectedGameId, sessions, setSessions);

  return (
    <main>
      <Navbar />
      <div className='games-list'>
        <GamesList selectedGameId={selectedGameId} onGameClick={handleGameClick} />
      </div>
      <SessionForm sessions={sessionsFromHook} setSessions={setSessions} />
      <SessionList sessions={sessionsFromHook} userId={userId}/>  
    </main>
  );
}

export default App;
