import React from 'react';
import './Sobre.css';
import LogotImage from "../../assets/Starlight.png"; 

export default function Sobre() {
  return (
    <div className="sobre">
      <div className="image-container">
        <img src={LogotImage} alt="Logo" className="starlight-logo" />
      </div>

      <h2>
        A página é voltada a atualizações de séries já existentes e novidades que estão por vir no mundo geek.
        Essa será uma experiência maravilhosa para os que já são conhecidos por NERDS.
      </h2>
    </div>
  );
}