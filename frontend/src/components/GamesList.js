import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game from './Game';
import './GamesList.scss';

const GamesList = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('/games')
      .then(response => setGames(response.data))
      .catch(error => console.log('Error fetching games:', error));
  }, []);


  const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="games-list">
      <input
        className="games-list__search"
        type="text"
        placeholder="Search for a game"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <div className="games-list__games">
        {filteredGames.map(game => (
          <Game key={game.id} name={game.name} image={game.image} />
        ))}
      </div>
    </div>
  );
};

export default GamesList;