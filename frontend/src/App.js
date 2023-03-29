import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import GamesList from './components/GamesList';
import FilterBar from './components/Filterbar';
import UserList from './components/UserList';
import { useSessions } from './hooks/useSessions';
import SessionList from './components/SessionList';
import SessionForm from './components/SessionForm';
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from './contexts/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [selectedGameCover, setSelectedGameCover] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const { sessions, fetchSessions } = useSessions(selectedGameId);
  const { user } = useContext(AuthContext);

  let userId;

  if (!user) {
    userId = null;
  } else {
    userId = user.id;
  }

  useEffect(() => {
    if(!showForm){
      fetchSessions();
    }
  }, [showForm])

  const handleGameClick = (gameId, gameCover) => {
    console.log(gameCover)

    //rerite to look like lines 38-42
    setSelectedGameId(prevSelectedGameId => prevSelectedGameId === gameId ? null : gameId);

    if(gameCover === selectedGameCover) {
      setSelectedGameCover(null);
    } else {
      setSelectedGameCover(gameCover);
    }
    

  };

  return (
    <Router>
      <main style={{backgroundImage: `url(${selectedGameCover})` }}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <div className='games-list'>
                <GamesList selectedGameId={selectedGameId} onGameClick={handleGameClick} />
              </div>

              <div className='create-session'> 
              {!showForm && <button className="session-form-button" onClick={() => setShowForm(!showForm)}>Create a new session</button>}
              {showForm && <button className="session-form-button-cancel" onClick={() => setShowForm(!showForm)}>Cancel</button>}
              </div>
                {showForm && <SessionForm setShowForm={setShowForm}/>}
              
              
              <SessionList gameCover ={selectedGameCover} sessions={sessions} userId={userId}/> 
            </div>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </Router>
  );
}


export default App;
