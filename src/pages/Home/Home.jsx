import React from 'react';

// Components
import GameList from '../../components/GameList/GameList';
import HeroImage from '../../components/HeroImage/HeroImage';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
  return (
    <div className="App">
      <HeroImage />
      <SearchBar />
      <GameList />
    </div>
  );
};

export default Home;
