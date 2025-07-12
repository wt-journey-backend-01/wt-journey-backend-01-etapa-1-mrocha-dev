console.log("Iniciando servidor...");

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Rota principal - index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota GET /sugestao - recebe nome e ingredientes via query
app.get('/sugestao', (req, res) => {
  const nome = req.query.nome || 'Cliente';
  const ingredientes = req.query.ingredientes || 'sem ingredientes';
  res.send(`
    <h1>Obrigado pela sugestão, ${nome}!</h1>
    <p>Você sugeriu: ${ingredientes}</p>
    <a href="/">Voltar</a>
  `);
});

// Rota GET /contato - exibe formulário de contato
app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

// Rota POST /contato - redireciona com dados via query string (PRG)
app.post('/contato', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;
  const query = new URLSearchParams({ nome, email, assunto, mensagem }).toString();
  res.redirect(`/contato-recebido?${query}`);
});

// Rota GET /contato-recebido - exibe os dados do formulário
app.get('/contato-recebido', (req, res) => {
  const { nome, email, assunto, mensagem } = req.query;
  res.send(`
    <h1>Contato Recebido!</h1>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Assunto:</strong> ${assunto}</p>
    <p><strong>Mensagem:</strong> ${mensagem}</p>
    <a href="/">Voltar</a>
  `);
});

// Rota /api/lanches - retorna lanches em JSON
app.get('/api/lanches', (req, res) => {
  const lanchesPath = path.join(__dirname, 'public', 'data', 'lanches.json');
  const lanches = JSON.parse(fs.readFileSync(lanchesPath, 'utf-8'));
  res.json(lanches);
});

// Rota 404 - página de erro
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor da DevBurger rodando em http://localhost:${PORT}`);
});
