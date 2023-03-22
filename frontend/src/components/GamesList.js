import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GamesList.scss';
import Game from './Game';

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/games')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => console.log('Error fetching games:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredGames = games.filter(game => {
    return game.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="games-list-container">
      <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search games..." />
      {filteredGames.map(game => (
        <Game key={game.id} logo={game.game_logo} name={game.name} />
      ))}
    </div>
  );
};

export default GamesList;