import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LogoMS2.jpg';

const Footer = () => {
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
            <Link to="/about">Acerca de Valve</Link>
          </li>
          <li>
            <Link to="/steamworks">Steamworks</Link>
          </li>
          <li>
            <Link to="/job">Empleo</Link>
          </li>
          <li>
            <Link to="/steam-distribution">Distribución de Steam</Link>
          </li>
          <li>
            <Link to="/gift-cards">Tarjetas regalo</Link>
          </li>
          <li>
            <Link to="/steam">Steam</Link>
          </li>
          <li>
            <Link to="/steam1">@Steam</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
