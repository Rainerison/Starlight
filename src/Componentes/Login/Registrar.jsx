import React, { useState } from 'react';
import axios from 'axios';
import './Registrar.css';

const Registrar = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (nome && email && senha) {
      try {
        const response = await axios.post('http://localhost:5000/register', {
          nome,
          email,
          senha,
        });

        if (response.data.success) {
          setSuccess('Cadastro realizado com sucesso!');
          setError('');
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError('Erro ao tentar realizar cadastro. Tente novamente!');
        console.error('Erro ao cadastrar:', err);
      }
    } else {
      setError('Preencha todos os campos!');
    }
  };

  return (
    <div className="registrar-container">
      <form onSubmit={handleRegister}>
        <h2>Registrar-se</h2>

        <div className="input-field">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registrar;