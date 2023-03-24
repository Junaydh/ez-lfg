import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import { useSessions } from './hooks/useSessions';
import SessionList from './components/SessionList';
import React, { useState } from 'react';

function App() {
  const [selectedGameId, setSelectedGameId] = useState(null);
  const sessions = useSessions(selectedGameId);

  const handleGameClick = (gameId) => {
    setSelectedGameId(prevSelectedGameId => prevSelectedGameId === gameId ? null : gameId);
  };

  return (
    <main>
      <Navbar />
      <div className='games-list'>
        <GamesList selectedGameId={selectedGameId} onGameClick={handleGameClick} />
      </div>
      <SessionList sessions={sessions} gameId={selectedGameId} />
    </main>
  );
}


export default App;
