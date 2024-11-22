import React, { useState } from 'react';
import axios from 'axios';

function MinhaConta({ user }) {
  const [nome, setNome] = useState(user ? user.nome : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    if (!nome || !email || !senha) {
      setMessage('Todos os campos são obrigatórios!');
      return;
    }

    try {
      console.log('Enviando dados para atualização:', { id: user.id, nome, email, senha });

      const response = await axios.put('http://localhost:5000/update', {
        id: user.id,
        nome,
        email,
        senha,
      });

      console.log('Resposta do servidor:', response.data);

      if (response.data.success) {
        setMessage('Cadastro atualizado com sucesso!');
      } else {
        setMessage(`Erro: ${response.data.message}`);
      }
    } catch (err) {
      console.error('Erro ao atualizar', err);
      setMessage('Erro ao atualizar os dados. Tente novamente.');
    }
  };

  return (
    <div className="minha-conta-container">
      <h2>Minha Conta</h2>
      <div className="input-field">
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>

      <button onClick={handleUpdate}>Atualizar Dados</button>

      {message && <p className="error-message">{message}</p>}
    </div>
  );
}

export default MinhaConta;