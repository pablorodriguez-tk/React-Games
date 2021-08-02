import React, { useEffect, useState } from 'react';
import { fetchGames } from '../../api/fetchGames';
import Game from '../Game/Game';
import './gamelist.css';

const GameList = () => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchGames();
      setGameList(response);
    })();
  }, []);

  return (
    <div className="gamelist">
      {gameList.map((game, i) => (
        <Game game={game} key={game.gameID} />
      ))}
    </div>
  );
};

export default GameList;
