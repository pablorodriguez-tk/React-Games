import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LogoMS.jpg';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={Logo} alt="MS Logo" />
        </Link>
      </div>
      <div className="header__links">
        <Link to="/">Home</Link>
        <Link to="/search">Browse</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Header;
