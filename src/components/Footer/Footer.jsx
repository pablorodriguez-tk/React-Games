import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LogoMS2.jpg';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <Link to="/">
          <img src={Logo} alt="MS Logo" />
        </Link>
      </div>
      <div className="footer__links">
        <Link to="/about">Acerca de Valve</Link>
        <Link to="/steamworks">Steamworks</Link>
        <Link to="/job">Empleo</Link>
        <Link to="/steam-distribution">Distribución de Steam</Link>
        <Link to="/gift-cards">Tarjetas regalo</Link>
        <Link to="/steam">Steam</Link>
        <Link to="/steam1">@Steam</Link>
      </div>
    </div>
  );
};

export default Footer;
