import React from 'react';
import './Grid.css';
import img1 from './assets/CN Steven Universe.jpeg';
import img2 from './assets/Rose.jpeg';
import img3 from './assets/download (4).jpeg';

const Grid = () => {
  const articles = [
    { titulo: 'Logo da Série', sumario: 'Steven Universe' },
    { titulo: 'Rose Quartz', sumario: 'Mãe do Steven' },
  ];

  return (
    <div className="grid">
      <div className="grid-item">
        <h3>{articles[0].titulo}</h3>
        <p>{articles[0].sumario}</p>
        <img 
          src={img1} 
          alt="Imagem de Artigo 1" 
        />
        <p className="image-text">A série Steven Universe foi criacda pela Animadora e Ilustradora Rebecca Sugar, que mesmo com o final da série ainda tem esperanças de continuar suas produções.</p> {/* Texto centralizado abaixo da imagem */}
      </div>

      <div className="grid-item">
        <img 
          src={img2} 
          alt="Imagem de Artigo 2 - Parte 1" 
        />
        <img 
          src={img3} 
          alt="Imagem de Artigo 2 - Parte 2" 
        />
      </div>
    </div>
  );
};

export default Grid;
