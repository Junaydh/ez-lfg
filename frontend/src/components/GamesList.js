import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GamesList.scss';
import Game from './Game';

const GamesList = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/games')
      .then(response => {
        setGames(response.data);
        setFilteredGames(response.data);
      })
      .catch(error => console.log('Error fetching games:', error));
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = games.filter(game => game.name.toLowerCase().includes(query));
    setFilteredGames(filtered);
    setSearchQuery(query);
  };

  return (
    <div className="games-list">
      <input
        className="games-list__search"
        type="text"
        placeholder="Search for a game"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="games-list__games">
        {filteredGames.map(game => (
          <Game key={game.id} game={game} onClick={() => console.log(`Clicked game ${game.name}`)} />
        ))}
      </div>
    </div>
  );
};

export default GamesList;