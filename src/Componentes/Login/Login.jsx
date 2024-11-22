import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';
import LogotImage from "../../assets/Starlight.png";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && senha) {
      try {
        const response = await axios.post("http://localhost:5000/login", {
          email,
          senha,
        });

        if (response.data.success) {
          onLogin(response.data.user); 
          navigate("/home");
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setError("E-mail ou senha incorretos!");
        } else {
          setError("Erro ao tentar fazer login. Tente novamente!");
        }
        console.error("Erro no login:", err);
      }
    } else {
      setError("Preencha todos os campos!");
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={LogotImage} alt="Logo" className="starlight-logo" />
      </div>

      <form onSubmit={handleSubmit}>
        <h1>Acesse o site</h1>

        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
              setError("");
            }}
          />
          <FaLock className="icon" />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>

          <a
            href="#"
            className="forgot-password"
            onClick={(e) => {
              e.preventDefault();
              navigate("/minhaconta2"); 
            }}
          >
            Esqueci minha senha
          </a>
        </div>

        <button type="submit">Entrar</button>
      </form>

      <div className="signup-link">
        <p>Não Possuo Cadastro <span onClick={() => navigate("/registrar")} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Registrar</span></p>
      </div>
    </div>
  );
};

export default Login;