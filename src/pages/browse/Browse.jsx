import React from 'react';
import GameList from '../../components/GameList/GameList';
import SearchBar from '../../components/SearchBar/SearchBar';

const Browse = () => {
  return (
    <div>
      <SearchBar />
      <GameList />
    </div>
  );
};

export default Browse;
