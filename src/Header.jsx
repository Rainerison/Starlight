import React from 'react';
import './Header.css';
import logoImage from './assets/Vector.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logoImage} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
        <button>Minha Conta</button>
      </nav>
    </header>
  );
};

export default Header;
