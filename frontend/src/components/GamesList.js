import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GamesList.scss';
import Game from './Game';

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedGameId, setSelectedGameId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/games')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => console.log('Error fetching games:', error));
  }, []);

  useEffect(() => {
    console.log(selectedGameId)
  }, [selectedGameId])



  const handleGameClick = (gameId) => {
    setSelectedGameId(prevSelectedGameId => prevSelectedGameId === gameId ? null : gameId);
  };

  const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="games-list-container">
      <input
        type="text"
        placeholder="Search for a game"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-bar"
      />
      <div className="games-container">
        {filteredGames.map(game => (
          <Game
            key={game.id}
            logo={game.game_logo}
            name={game.name}
            selected={game.id === selectedGameId}
            onClick={() => handleGameClick(game.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default GamesList;