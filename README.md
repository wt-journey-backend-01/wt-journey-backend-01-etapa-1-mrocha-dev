# 🍔 DevBurger - Cardápio Digital (Etapa 1)

Projeto desenvolvido como parte da Jornada Web Tech Network - Back-end.  
Consiste na criação de uma aplicação back-end com Node.js e Express, simulando um cardápio digital para uma hamburgueria fictícia.

---

## 🚀 Funcionalidades

- Servidor web criado com **Node.js + Express**
- Servindo páginas HTML diretamente via rotas
- Recebimento de dados via formulário (`GET` e `POST`)
- Redirecionamento com o padrão **PRG (Post, Redirect, Get)**
- Rota de API simulada retornando JSON
- Estilização com CSS
- Página de erro 404 personalizada

---

## 🗂️ Estrutura do Projeto

devburger/
├── public/
│ ├── css/
│ │ └── style.css
│ ├── images/
│ │ └── logo.png (opcional)
│ ├── data/
│ │ └── lanches.json
│ └── 404.html
│
├── views/
│ ├── index.html
│ └── contato.html
│
├── server.js
├── package.json
├── .gitignore
└── README.md


---

## 🔁 Rotas Implementadas

| Rota                | Método | Descrição                                                                 |
|---------------------|--------|---------------------------------------------------------------------------|
| `/`                 | GET    | Página inicial com o cardápio e formulário de sugestão de lanche         |
| `/sugestao`         | GET    | Recebe dados via query string e exibe agradecimento personalizado        |
| `/contato`          | GET    | Exibe formulário de contato                                               |
| `/contato`          | POST   | Processa o contato e redireciona para `/contato-recebido` (PRG)          |
| `/contato-recebido` | GET    | Exibe os dados recebidos no contato após o redirecionamento              |
| `/api/lanches`      | GET    | Retorna lista de lanches em JSON (simulando uma API)                     |
| `*` (qualquer outra)| GET    | Página 404 personalizada                                                  |

---

## 💻 Como executar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/wt-journey-backend-01/wt-journey-backend-01-etapa-1-mrocha-dev

Tecnologias utilizadas
Node.js

Express.js

HTML5

CSS3

JavaScript

Git & GitHub

Autor
Desenvolvido por Mishel Rocha
GitHub: @mrocha-dev