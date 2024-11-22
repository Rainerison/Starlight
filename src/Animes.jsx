import React from 'react';
import { useParams } from 'react-router-dom';

const Animes = () => {
  const { id } = useParams();
  
  const articles = [
    { id: '1', title: 'Demon Slayer', content: 'A Crunchyroll anunciou sua programação para a CCXP24, incluindo os animes Demon Slayer e Solo Leveling como destaques, além de painéis temáticos de animes, dublagem e mais. Pela primeira vez no Brasil os astros de voz Takahiro Sakurai (Giyu Tomioka) e Kengo Kawanishi (Muichiro Tokito), ambos de Demon Slayer, participarão da CCXP24no palco Thunder. Ao lado deles o público terá ainda Daniel Figueira, dublador brasileiro de Tanjiro Kamado. ' },
    { id: '2', title: 'Studios Ghilib', content: 'Lançado em fevereiro no Brasil, o longa é considerado um dos melhores trabalhos do Studio Ghibli, tanto que rendeu a Miyazaki, de 83 anos, a estatueta de "Melhor Animação". O último Oscar conquistado pelo cineasta foi com a "A Viagem de Chihiro". O catálogo da Netflix apresenta inúmeros filmes de animação do estúdio japonês. A maioria das opções são dirigidas e produzidas por Hayao Miyazaki. Mesmo assim, o catálogo conta também com trabalhos de outros cineastas.  ' },
    { id: '3', title: 'Dragon Ball', content: 'O Globoplay revelou que Dragon Ball, anime original que mostra as aventuras de Goku quando criança, chegou a seu catálogo nesta terça-feira (28). Os primeiros 78 episódios da animação estão disponíveis com dublagem em português do Brasil. O vídeo de anúncio também revela que Dragon Ball Z Kai, versão remasterizada da mais famosa saga da franquia, estreará em breve no serviço. Mesmo com o fim da programação infantiil da Rede Globo, a empresa ainda continua com alguns conteudos infantis como classicos da Tv Globinho na sua plataforma de Streaming e no seu canal infantil Gloob e Gloobinho.' },
  ];

  const article = articles.find(article => article.id === id);

  if (!article) {
    return <p>Artigo não encontrado!</p>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Animes;