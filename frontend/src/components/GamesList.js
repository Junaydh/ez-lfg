import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game from './Game';
import './GamesList.scss';

const GamesList = (props) => {

  return (
    <div className="games-list">
      <input
        className="games-list__search"
        type="text"
        placeholder="Search for a game"
      />
      <div className="games-list__games">
          <Game />
      </div>
    </div>
  );
};

export default GamesList;