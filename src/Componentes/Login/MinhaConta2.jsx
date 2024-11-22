import { useState, useEffect } from 'react';
import axios from 'axios';
import './MinhaConta2.css'; 

const MinhaConta2 = ({ user, onUpdateUser }) => {
  const [formValues, setFormValues] = useState({
    nome: user ? user.nome : '',
    email: user ? user.email : '',
    senha: '',
  });
  const [errorMessages, setErrorMessages] = useState({
    nome: "",
    email: "",
    senha: ""
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (user) {
      setFormValues({
        nome: user.nome,
        email: user.email,
        senha: '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
    setErrorMessages({ nome: "", email: "", senha: "" }); 
    setSuccessMessage(""); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let errors = {};

    if (!formValues.nome.trim()) errors.nome = "O nome é obrigatório!";
    if (!formValues.email.trim()) errors.email = "O e-mail é obrigatório!";
    if (!formValues.senha.trim()) errors.senha = "A senha é obrigatória!";

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (formValues.email && !emailRegex.test(formValues.email)) {
      errors.email = "Por favor, insira um e-mail válido.";
    }

    if (formValues.senha && formValues.senha.length < 6) {
      errors.senha = "A senha deve ter pelo menos 6 caracteres.";
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    try {
      const response = await axios.put('http://localhost:5000/update-profile', formValues);
      if (response.data.success) {
        setSuccessMessage(response.data.message || "Cadastro atualizado com sucesso!");
        onUpdateUser({ ...user, ...formValues }); 
      } else {
        setErrorMessages({ geral: response.data.message || 'Ocorreu um erro ao modificar o cadastro.' });
      }
    } catch (error) {
      if (error.response) {
        setErrorMessages({ geral: `Erro: ${error.response.data.message || 'Ocorreu um erro ao modificar o cadastro. Tente novamente.'}` });
      } else {
        setErrorMessages({ geral: "Ocorreu um erro de rede. Verifique sua conexão." });
      }
    }
  };

  return (
    <div className="minha-conta-container">
      <h2>Minha Conta</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formValues.nome}
            onChange={handleChange}
          />
          {errorMessages.nome && <p className="error-message">{errorMessages.nome}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errorMessages.email && <p className="error-message">{errorMessages.email}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formValues.senha}
            onChange={handleChange}
          />
          {errorMessages.senha && <p className="error-message">{errorMessages.senha}</p>}
        </div>

        {errorMessages.geral && <p className="error-message">{errorMessages.geral}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default MinhaConta2;