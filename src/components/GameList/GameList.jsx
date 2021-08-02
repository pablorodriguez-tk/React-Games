import React from 'react';
import { useAppContext } from '../../context/AppContext';
import Game from '../Game/Game';
import './gamelist.css';

const GameList = () => {
  const { gameList } = useAppContext();
  return (
    <div className="gamelist">
      {gameList.map((game, i) => (
        <Game game={game} key={game.gameID} />
      ))}
    </div>
  );
};

export default GameList;
