import React from 'react';
import './Game.scss';

const Game = (props) => {
  return (
    <div className="game">
      <img className="game__logo" src={props.logo} alt={props.name} />
      <span className="game__name">{props.name}</span>
    </div>
  );
};

export default Game;