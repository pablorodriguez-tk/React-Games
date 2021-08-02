import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Rating = ({ game }) => {
  if (game.steamRatingPercent < 20) {
    return (
      <>
        <FontAwesomeIcon icon={faStar} color="yellow" />
      </>
    );
  } else if (game.steamRatingPercent < 40) {
    return (
      <>
        <FontAwesomeIcon icon={faStar} color="yellow" />
        <FontAwesomeIcon icon={faStar} color="yellow" />
      </>
    );
  } else if (game.steamRatingPercent < 60) {
    return (
      <>
        <FontAwesomeIcon icon={faStar} color="yellow" />
        <FontAwesomeIcon icon={faStar} color="yellow" />
        <FontAwesomeIcon icon={faStar} color="yellow" />
      </>
    );
  } else if (game.steamRatingPercent < 80) {
    return (
      <>
        <FontAwesomeIcon icon={faStar} color="yellow" />
        <FontAwesomeIcon icon={faStar} color="yellow" />
        <FontAwesomeIcon icon={faStar} color="yellow" />
        <FontAwesomeIcon icon={faStar} color="yellow" />
      </>
    );
  } else {
    return (
      <>
        <FontAwesomeIcon icon={faStar} color="yellow" />
        <FontAwesomeIcon icon={faStar} color="yellow" />
        <FontAwesomeIcon icon={faStar} color="yellow" />
        <FontAwesomeIcon icon={faStar} color="yellow" />
        <FontAwesomeIcon icon={faStar} color="yellow" />
      </>
    );
  }
};
