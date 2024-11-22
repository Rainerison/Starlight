import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import img4 from './assets/Mask Group.jpeg';
import img5 from './assets/Mask Group (2).jpeg';
import img6 from './assets/Mask Group (3).jpeg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Notícias mais recentes</h2>
      <div className='img-grid'>
        <div className='news-card'>
          <img src={img4} alt="imagem4" />
          <div className='news-content'>
            <span>Animes</span>
            <h3>Demon Slayer</h3>
            <p>Veja as Últimas Novidades</p>
            <Link to="/animes/1">Ler mais</Link>
          </div>
        </div>

        <div className='news-card'>
          <img src={img5} alt="imagem5" />
          <div className='news-content'>
            <span>Animes</span>
            <h3>Studios Ghilib</h3>
            <p>Veja as Últimas Novidades</p>
            <Link to="/animes/2">Ler mais</Link>
          </div>
        </div>

        <div className='news-card'>
          <img src={img6} alt="imagem6" />
          <div className='news-content'>
            <span>Animes</span>
            <h3>Dragon Ball no Globoplay</h3>
            <p>Veja as Últimas Novidades</p>
            <Link to="/animes/3">Ler mais</Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;