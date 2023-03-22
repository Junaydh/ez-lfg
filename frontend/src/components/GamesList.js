import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GamesList.scss';
import Game from './Game';

const GamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/games')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => console.log('Error fetching games:', error));
  }, []);

  return (
    <div className="games-list">
      <div className="games-list__games">
        {games.map(game => (
          <Game key={game.id} logo={game.game_logo} name={game.name} />
        ))}
      </div>
    </div>
  );
};

export default GamesList;