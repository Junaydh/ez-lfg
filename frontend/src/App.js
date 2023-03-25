import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import FilterBar from './components/Filterbar';
import UserList from './components/UserList';
import { useSessions } from './hooks/useSessions';
import SessionList from './components/SessionList';
import React, { useState } from 'react';

function App() {
  const [selectedGameId, setSelectedGameId] = useState(null);
  const sessions = useSessions(selectedGameId);
  const userId = 8;

  const handleGameClick = (gameId) => {
    setSelectedGameId(prevSelectedGameId => prevSelectedGameId === gameId ? null : gameId);
  };

  return (
    <main>
      <Navbar />
      <div className='games-list'>
        <GamesList selectedGameId={selectedGameId} onGameClick={handleGameClick} />
      </div>
      <SessionList sessions={sessions} userId={userId}/>
      <UserList sessionId={1} />
    </main>
  );
}


export default App;
