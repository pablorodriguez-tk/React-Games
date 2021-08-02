import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Rating } from '../Rating/Rating';
import './game.css';

const Game = ({ game }) => {
  const { setCart, cart } = useAppContext();
  const addToCart = () => {
    setCart([...cart, game]);
  };
  return (
    <div className="game">
      <div className="game__image position-relative">
        <img src={game.thumb} alt={game.title} />
        <div className="game__image-savings position-absolute top-0 start-50 translate-middle p-2 bg-danger border-light rounded-circle">
          {Math.round(game.savings)}%off
        </div>
      </div>
      <div className="game__info">
        <div className="game__info-title">{game.title}</div>
        <div className="game__info-steam">
          <div className="game__info-steam-review">Steam Review</div>
          <Rating game={game} />
          <div className="game__button-position">
            <div className="button btn btn-primary" onClick={addToCart}>
              <div>${game.normalPrice}</div>
              <div>${game.salePrice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
