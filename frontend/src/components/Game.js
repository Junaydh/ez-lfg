import React from 'react';
import './Game.scss';

export default function Game (props) {
  <div className="game">
    <img className="game__image" src={props.img} alt={props.name} />
    <span className="game__name">{props.name}</span>
  </div>
};