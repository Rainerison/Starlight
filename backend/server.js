const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rayraylgbt+',
  database: 'crud_cadastro'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ success: false, message: 'Acesso não autorizado!' });
  }

  jwt.verify(token, 'seu_secret_key', (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Token inválido ou expirado.' });
    }
    req.user = user;
    next();
  });
};

app.put('/update', authenticateToken, (req, res) => {
  const { id, nome, email, senha } = req.body;

  if (!id || !nome || !email || !senha) {
    return res.status(400).json({
      success: false,
      message: 'ID, nome, email e senha são obrigatórios para atualização!',
    });
  }

  const checkUserQuery = 'SELECT * FROM usuarios WHERE id = ?';
  db.query(checkUserQuery, [id], (err, result) => {
    if (err) {
      console.error('Erro ao verificar usuário:', err);
      return res.status(500).json({
        success: false,
        message: 'Erro ao verificar usuário',
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Usuário não encontrado!',
      });
    }

    const checkEmailQuery = 'SELECT * FROM usuarios WHERE email = ? AND id != ?';
    db.query(checkEmailQuery, [email, id], (err, result) => {
      if (err) {
        console.error('Erro ao verificar e-mail:', err);
        return res.status(500).json({
          success: false,
          message: 'Erro ao verificar e-mail.',
        });
      }

      if (result.length > 0) {
        return res.status(400).json({
          success: false,
          message: 'Este e-mail já está em uso por outro usuário.',
        });
      }

      const updateQuery = 'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?';
      db.query(updateQuery, [nome, email, senha, id], (err, result) => {
        if (err) {
          console.error('Erro ao atualizar usuário:', err);
          return res.status(500).json({
            success: false,
            message: 'Erro ao atualizar cadastro',
          });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            message: 'Nenhuma alteração feita. O usuário não foi encontrado ou os dados são os mesmos.',
          });
        }

        res.status(200).json({
          success: true,
          message: 'Cadastro atualizado com sucesso!',
        });
      });
    });
  });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});