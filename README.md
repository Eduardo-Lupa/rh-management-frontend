# ✨ RH-Management-Frontend ✨

## 🚀 Gerenciamento de RH Moderno e Eficiente: A Interface que Simplifica a Administração de Pessoas.

[![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue)](https://github.com/Eduardo-Lupa/rh-management-frontend)
[![Licença MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## 📄 Descrição Geral do Projeto

Bem-vindo ao repositório **RH-Management-Frontend**!

Este projeto representa a interface de usuário (frontend) para um robusto sistema de gerenciamento de Recursos Humanos. Desenvolvido com **React** e estilizado com **Tailwind CSS**, o objetivo principal é fornecer uma experiência de usuário fluida, intuitiva e moderna para a administração de dados de colaboradores, controle de acesso e navegação segura.

Esta solução foi concebida para **resolver o desafio de complexidade** na gestão de RH, transformando processos burocráticos em interações digitais simples e rápidas, garantindo a segurança e o controle através de autenticação via token.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e ferramentas-chave, garantindo performance e uma arquitetura moderna:

| Categoria | Tecnologia | Badge (Ícone) |
| :--- | :--- | :--- |
| **Linguagem** | JavaScript | <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge"> |
| **Framework UI** | React | <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge"> |
| **Estilização** | Tailwind CSS | <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge"> |
| **Roteamento** | React Router DOM | <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router DOM Badge"> |
| **Gerenciamento** | NPM | <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM Badge"> |
| **Controle de Versão**| Git & GitHub | <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git Badge"> |

---

## 🎯 O que Foi Feito e Aprendido (Seções Cruciais)

Esta seção detalha os principais recursos implementados e os conceitos técnicos aprofundados durante o desenvolvimento deste projeto.

### 1. ⚙️ Funcionalidades e Telas Implementadas

* **Autenticação Completa (Login/Logout):** Implementação de uma tela de login moderna e funcional para garantir o acesso restrito ao sistema.
* **Gerenciamento de Usuários:** Criação de rotas e componentes para visualização e, potencialmente, CRUD (Create, Read, Update, Delete) de dados de colaboradores.
* **Navegação e Rotas Protegidas:** Configuração de rotas usando `react-router-dom` para navegação entre as telas de Login, Dashboard e Usuários.
* **Formulários Reativos:** Desenvolvimento de formulários amigáveis e reativos para a coleta de dados de usuários e credenciais de login.
* **Design Responsivo:** Aplicação de classes utilitárias do Tailwind CSS para garantir que a interface seja totalmente responsiva e visualmente atraente em qualquer dispositivo.

### 2. 🔑 Conceitos Chave Aplicados (Segurança e Arquitetura)

* **Middleware de Conexão (Interceptor/Guard):** O conceito mais crucial aplicado é a utilização de um "middleware" de requisição. Este componente (geralmente um *interceptor* em bibliotecas HTTP) garante que o **Token de Autenticação (JWT)** seja anexado ao cabeçalho (`Authorization: Bearer <token>`) de **TODA** requisição que se conecta com o backend.
* **Persistência de Sessão (Token):** O token de autenticação é persistido (no `localStorage`) após o login bem-sucedido. O frontend é configurado para resgatar este token e usá-lo para manter a sessão ativa e autorizada.
* **Rotas Privadas (Private Routes):** Implementação de um componente de rota privada (ou `Wrapper`) que verifica a existência e validade do token de autenticação antes de renderizar páginas sensíveis (como o Dashboard ou Usuários). Caso o token não exista, o usuário é redirecionado para a tela de Login.
* **Estilização Utility-First:** Domínio e aplicação prática do paradigma "utility-first" do **Tailwind CSS**, focando na construção rápida de interfaces sem sair dos arquivos de componentes.
* **Componentização com React:** Utilização do React para criar uma estrutura de componentes reutilizáveis, seguindo boas práticas de desenvolvimento de frontend.

### 3. 🚧 Desafios Técnicos Superados

* **Sincronização Frontend/Backend:** O principal desafio superado foi garantir a comunicação segura e síncrona com o backend, lidando com erros de autenticação (como token expirado ou inválido) e redirecionando o usuário de forma elegante.
* **Configuração do Tailwind:** Ajuste fino da configuração do Tailwind, incluindo a criação de classes customizadas e a correta aplicação de temas.

---

## ⚙️ Como Executar o Projeto (Instalação e Uso)

Siga os passos abaixo para configurar e executar este projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (ou Yarn) instalados em seu ambiente.

### 1. Clonar o Repositório

Abra seu terminal e clone o projeto:

```bash
git clone https://github.com/Eduardo-Lupa/rh-management-frontend.git
cd rh-management-frontend
npm run start:dev
```
