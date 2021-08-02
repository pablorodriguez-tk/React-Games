import React, { useEffect, useState } from 'react';
import { fetchGames } from '../../api/fetchGames';
import Game from '../Game/Game';

const GameList = () => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchGames();
      console.log(response);
      setGameList(response);
    })();
  }, []);

  return (
    <div>
      {gameList.map((game, i) => (
        <Game game={game} key={game.gameID} />
      ))}
    </div>
  );
};

export default GameList;
