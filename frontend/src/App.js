import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import FilterBar from './components/Filterbar';
import UserList from './components/UserList';
import { useSessions } from './hooks/useSessions';
import SessionList from './components/SessionList';
import SessionForm from './components/SessionForm';
import React, { useState, useEffect } from 'react';

function App() {
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [selectedGameCover, setSelectedGameCover] = useState(null);
  const sessions = useSessions(selectedGameId);
  const userId = 8;
  const handleGameClick = (gameId, gameCover) => {
    setSelectedGameId(prevSelectedGameId => prevSelectedGameId === gameId ? null : gameId);
    setSelectedGameCover(gameCover);
  };
  return (
    <main>
      <Navbar />
      <div className='games-list'>
        <GamesList selectedGameId={selectedGameId} onGameClick={handleGameClick} />
      </div>
      <div className='create-session'> 
        <SessionForm />
      </div>

      <SessionList gameCover ={selectedGameCover} sessions={sessions} userId={userId}/>  
    </main>
  );
}
export default App;