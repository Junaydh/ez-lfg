import React from 'react';
import './Game.scss';

const Game = ({ logo, name, selected, onClick }) => {
  return (
    <div className={`game-container ${selected ? 'selected' : ''}`} onClick={onClick}>
      <img className="game-logo" src={logo} alt={`${name} logo`} />
      <div className="game-name">{name}</div>
    </div>
  );
};

export default Game;