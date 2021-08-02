import React from 'react';
import { useAppContext } from '../../context/AppContext';
import Game from '../Game/Game';
import './gamelist.css';

const GameList = () => {
  const { gameList, gameFiltered } = useAppContext();

  if (gameFiltered.length !== 0) {
    return (
      <>
        <div className="gamelist">
          {gameFiltered.map((game, i) => (
            <Game game={game} key={game.gameID} />
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="gamelist">
      {gameList.map((game, i) => (
        <Game game={game} key={game.gameID} />
      ))}
    </div>
  );
};

export default GameList;
