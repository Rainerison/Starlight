import React from 'react';
import './Sidebar.css';
import img4 from './assets/Mask Group.jpeg';
import img5 from './assets/Mask Group (2).jpeg';
import img6 from './assets/Mask Group (3).jpeg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Noticias mais recentes</h2>
      <div className='img-grid'>
        <div className='news-card'>
        <img src={img4} alt="imagem4" />
        <div className='news-content'>
        <span>Animes</span>
        <h3>Notícia 1</h3>
        <p>Descrição da notícia 1</p>
        <a href="#">Ler mais</a>
        </div>
        </div>

        <div className='news-card'>
        <img src={img5} alt="imagem5" />
        <div className='news-content'>
        <span>Animes</span>
        <h3>Notícia 2</h3>
        <p>Descrição da notícia 2</p>
        <a href="#">Ler mais</a>
        </div>
        </div>

        <div className='news-card'>
        <img src={img6} alt="imagem6" />
        <div className='news-content'>
        <span>Animes</span>
        <h3>Notícia 3</h3>
        <p>Descrição da notícia 3</p>
        <a href="#">Ler mais</a>
        </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;