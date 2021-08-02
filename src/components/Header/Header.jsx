import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LogoMS.jpg';

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={Logo} alt="MS Logo" />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Browse</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
