const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rayraylgbt+',
  database: 'crud_cadastro',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

function startServer(port) {
  app.listen(port, (err) => {
    if (err) {
      console.error(`Erro ao iniciar na porta ${port}:`, err.message);
      if (port === 5000) {
        console.log('Tentando iniciar na porta 5001...');
        startServer(5001);
      }
    } else {
      console.log(`Servidor rodando na porta ${port}`);
    }
  });
}

startServer(5000);

app.post('/register', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({
      success: false,
      message: 'Nome, email e senha são obrigatórios!',
    });
  }

  const checkQuery = 'SELECT id FROM usuarios WHERE email = ?';
  db.query(checkQuery, [email], (err, result) => {
    if (err) {
      console.error('Erro ao verificar email:', err);
      return res.status(500).json({
        success: false,
        message: 'Erro ao verificar email!',
        error: err,
      });
    }

    if (result.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'Email já cadastrado!',
      });
    }

    const insertQuery = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    db.query(insertQuery, [nome, email, senha], (err, result) => {
      if (err) {
        console.error('Erro ao registrar usuário:', err);
        return res.status(500).json({
          success: false,
          message: 'Erro ao registrar usuário!',
          error: err,
        });
      }

      console.log(`Novo usuário registrado: ID: ${result.insertId}, Nome: ${nome}, Email: ${email}`);
      
      return res.status(201).json({
        success: true,
        message: 'Usuário registrado com sucesso!',
      });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({
      success: false,
      message: 'Email e senha são obrigatórios!',
    });
  }

  const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  db.query(query, [email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao fazer login:', err);
      return res.status(500).json({
        success: false,
        message: 'Erro ao realizar login!',
        error: err,
      });
    }

    if (result.length > 0) {
      
      return res.status(200).json({
        success: true,
        user: result[0],
        message: 'Login realizado com sucesso!',
      });
    } else {
    
      return res.status(401).json({
        success: false,
        message: 'Email ou senha incorretos!',
      });
    }
  });
});