import React from 'react';
import { useAppContext } from '../../context/AppContext';
import getGamesByName from '../../helper/getGamesByName';
import useForm from '../../hooks/useForm';
import './searchBar.css';

const SearchBar = () => {
  const [formValues, handleInputChange, reset] = useForm({ searchText: '' });
  const { gameList, setGameFiltered } = useAppContext();
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    const gameFiltered = getGamesByName(searchText, gameList);
    setGameFiltered(gameFiltered);
  };
  const handleClearFilter = () => {
    setGameFiltered([]);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="icon-input">
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            value={searchText}
            onChange={handleInputChange}
            name="searchText"
            autoComplete="off"
            aria-describedby="addon-wrapping"
          />
          <button
            type="button"
            className="btn btn-info"
            onClick={handleClearFilter}
          >
            Clear Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
