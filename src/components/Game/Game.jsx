import React from 'react';
import './game.css';

const Game = ({ game }) => {
  const addToCart = () => {};
  return (
    <div className="game">
      <div className="game__image">
        <img src={game.thumb} alt={game.title} />
        <div className="game__image-savings">{game.savings}</div>
      </div>
      <div className="game__info">
        <div className="game__info-title">{game.title}</div>
        <div className="game__info-steam">
          <div>Steam Review</div>
          <div>{game.steamRatingPercent}</div>
          <button onClick={addToCart}>
            <div>${game.normalPrice}</div>
            <div>${game.salePrice}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
