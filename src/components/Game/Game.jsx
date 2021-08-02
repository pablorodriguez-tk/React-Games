import React from 'react';

const Game = ({ game }) => {
  return (
    <div>
      <div>
        <img src={game.thumb} alt="" />
        <div>{game.savings}</div>
        <div>{game.title}</div>
      </div>
      <div>
        <div>Steam Review</div>
        <div>{game.steamRatingPercent}</div>
        <div>{game.normalPrice}</div>
        <div>{game.salePrice}</div>
      </div>
    </div>
  );
};

export default Game;
