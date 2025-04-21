<<<<<<< HEAD
# MISSA
=======
# Projeto MISSA 🎥📱
>>>>>>> 99ef07e (docs: adiciona estrutura inicial do banco de dados)

**Versão atual:** Beta

<<<<<<< HEAD
O projeto **MISSA** é um aplicativo cultural que propõe a criação de um museu digital permanente para Sabinópolis-MG, utilizando tecnologias modernas de backend (Node.js, MongoDB), frontend (Next.js) e um modelo filosófico-científico inovador: a **Vetorialética**.

---

## 📊 Propósito

MISSA visa documentar, valorizar e democratizar o acesso ao acervo audiovisual da região, inicialmente baseado em materiais já presentes no **Facebook** e **YouTube**, evoluindo para um sistema interativo de contribuição comunitária.

---

## ⚙️ Tecnologias Utilizadas
- **Backend**: Node.js + Express
- **Banco de dados**: MongoDB
- **Frontend**: Next.js (React)
- **Autenticação**: JWT (JSON Web Tokens)
- **Hospedagem do repositório**: GitHub (LitikaAv)

---

## 🌐 Fundamento Vetorialético

A arquitetura do sistema é inspirada pela **Vetorialética**, uma epistemologia que substitui entidades estáticas por fluxos vetoriais de significado. Isso reflete-se:

- Na estrutura não-hierárquica das mídias.
- Na interação horizontal entre usuários.
- Na valorização do percurso imagético e não apenas do conteúdo.

---

## 📚 Instalação Local
```bash
# Clone o repositório
$ git clone git@github.com:LitikaAv/MISSA.git

# Acesse o backend
$ cd missa-backend
$ npm install
$ npm run dev

# Em outro terminal, acesse o frontend
$ cd missa
$ npm install
$ npm run dev
```

Backend: [http://localhost:5000](http://localhost:5000)  
Frontend: [http://localhost:3000](http://localhost:3000)

---

## 🔒 Boas Práticas de Segurança
- Senhas com hash (bcrypt)
- Tokens JWT com expiração e secret segura
- CORS configurado corretamente
- Validação de entrada (ex: express-validator)
- Backups regulares com `mongodump`

---

## 📅 Roadmap
- [x] Backend estruturado com autenticação JWT
- [x] Cadastro de usuários e mídias
- [ ] Busca e filtro de conteúdos
- [ ] Upload de imagens e vídeos
- [ ] Interface responsiva
- [ ] Integração com armazenamento em nuvem
- [ ] Espaço para curadoria comunitária

---

## 📍 Onde encontrar

- Repositório: [github.com/LitikaAv/MISSA](https://github.com/LitikaAv/MISSA)
- Desenvolvedor: Neimar Alves Barroso

---

## 🌟 Licença
Este projeto está licenciado sob a Licença MIT.

---

## 🌈 Inspiração

O MISSA é parte de um ecossistema maior de transformação cultural, científica e política, alinhado às ideias do **Modelo Núvem** e à **7ª República**.

"Documentar é transver. Transver é repovoar o tempo." — *Vetorialética*

=======
## Estrutura

- `/frontend`: Interface do usuário (Next.js)
- `/backend`: API em Node.js com MongoDB
- `/docs`: Documentação e apresentações
- `/dumps`: Backups do banco de dados
- `/scripts`: Scripts úteis (backup, instalação, etc)

## Como rodar

```bash
cd backend
npm install
npm run dev
>>>>>>> 99ef07e (docs: adiciona estrutura inicial do banco de dados)
