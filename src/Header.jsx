import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import { FaHome, FaInfoCircle, FaPhoneAlt, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';
import logoImage from './assets/Starlight.png';

const Header = ({ onLogout }) => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    onLogout();  
    navigate('/');  
  };

  return (
    <header className="header">
      <img src={logoImage} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <FaHome /> 
            </Link>
          </li>
          <li>
            <Link to="/sobre">
              <FaInfoCircle /> 
            </Link>
          </li>
          <li>
            <Link to="/contato">
              <FaPhoneAlt /> 
            </Link>
          </li>
        </ul>

        <Link to="/minha-conta">
          <button>
            <FaUser /> 
          </button>
        </Link>

        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt /> Sair
        </button>
      </nav>
    </header>
  );
};

export default Header;