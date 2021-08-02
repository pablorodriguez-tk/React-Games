import React from 'react';
import { useAppContext } from '../../context/AppContext';
import useForm from '../../hooks/useForm';
import Game from '../Game/Game';
import './searchBar.css';

const SearchBar = () => {
  const [formValues, handleInputChange] = useForm({ searchText: '' });
  const { gameList } = useAppContext();
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
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
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
