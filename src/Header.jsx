<<<<<<< HEAD
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
=======
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
      </nav>
    </header>
  );
};

export default Header;
>>>>>>> 1aa0473a0256461b2ecb560942ae0877726ba135
