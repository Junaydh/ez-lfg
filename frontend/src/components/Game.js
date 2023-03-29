import React from 'react';
import './Game.scss';

const Game = ({ cover, logo, name, selected, onClick }) => {

  return (
    <div className={`game-container ${selected ? 'selected' : ''}`} onClick={() => onClick(cover)}>
      <img className="game-logo" src={logo} alt={`${name} logo`} />
      <div className="game-name">{name}</div>
    </div>
  );
};

export default Game;