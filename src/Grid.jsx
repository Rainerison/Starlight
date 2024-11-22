import React, { useState, useEffect } from 'react';
import './Grid.css';
import img1 from './assets/stevenuniverse.jpg';
import img2 from './assets/Rose.jpeg';
import img3 from './assets/download (4).jpeg';
import img4 from './assets/download (2).jpeg';
import img5 from './assets/Earth.jpeg';
import img6 from './assets/Moon.jpeg';
import img7 from './assets/Ocean_Gem.jpeg';

const Grid = () => {
  const articles = [
    { titulo: 'Logo da Série', sumario: 'Steven Universe' },
    { titulo: 'Rose Quartz', sumario: 'Mãe do Steven' },
  ];

  const [currentImageIndex1, setCurrentImageIndex1] = useState(0); 
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0); 

  const imagesGroup1 = [img2, img3]; 
  const imagesGroup2 = [img4, img5, img6, img7]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % imagesGroup1.length);
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % imagesGroup2.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid">
      <div className="grid-item">
        <h3>{articles[0].titulo}</h3>
        <p>{articles[0].sumario}</p>
        <img src={img1} alt="Imagem de Artigo 1" />
        <p className="image-text">
          A série Steven Universe foi criada pela Animadora e Ilustradora Rebecca Sugar, que mesmo com o final da série
          ainda tem esperanças de continuar suas produções.
        </p>
      </div>

      <div className="grid-item">
  
        <div className="carousel">
          <img src={imagesGroup1[currentImageIndex1]} alt="Imagem de transição 1" />
        </div>
 
        <div className="carousel">
          <img src={imagesGroup2[currentImageIndex2]} alt="Imagem de transição 2" />
        </div>
      </div>
    </div>
  );
};

export default Grid;