import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Grid from './Grid';
import Sidebar from './Sidebar';
import './App.css';
import Home from './Componentes/paginas/Home';
import Sobre from './Componentes/paginas/Sobre';
import Contato from './Componentes/paginas/Contato';
import MinhaConta from './Componentes/paginas/MinhaConta';
import Login from './Componentes/Login/Login';
import Registrar from '/src/Componentes/Login/Registrar.jsx'; 
import Animes from './Animes';
import MinhaConta2 from './Componentes/Login/MinhaConta2';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); 
  const handleLogin = (loggedInUser) => {
    setIsAuthenticated(true);
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null); 
  };

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser); 
  };

  return (
    <div className="App">
      <Router>
        <AppContent 
          isAuthenticated={isAuthenticated} 
          user={user} 
          handleLogin={handleLogin} 
          handleLogout={handleLogout} 
          handleUpdateUser={handleUpdateUser} 
        />
      </Router>
    </div>
  );
}

function AppContent({ isAuthenticated, user, handleLogin, handleLogout, handleUpdateUser }) {
  const location = useLocation();
  const isLoginOrRegisterPage = location.pathname === "/" || location.pathname === "/registrar";

  return (
    <>
      {!isLoginOrRegisterPage && <Header onLogout={handleLogout} />}
      
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/minhaconta2" element={<MinhaConta2 user={user} onUpdateUser={handleUpdateUser} />} />

        <Route
          path="/home"
          element={
            <>
              <Banner />
              <div className="content">
                {isAuthenticated ? (
                  <>
                    <Grid />
                    <Sidebar />
                  </>
                ) : (
                  <div className="unauthenticated-message">
                    <h2>Bem-vindo à Home</h2>
                    <p>Para ver o conteúdo completo, por favor faça login.</p>
                  </div>
                )}
              </div>
            </>
          }
        />
        
        <Route path="/animes/:id" element={<Animes />} />

        {isAuthenticated ? (
          <>
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/minha-conta" element={<MinhaConta user={user} onUpdateUser={handleUpdateUser} />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </>
  );
}

export default App;