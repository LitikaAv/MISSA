// 3. routes/usuarios.js
// ----------------------
const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

router.get('/', async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

router.post('/', async (req, res) => {
  const novoUsuario = new Usuario(req.body);
  await novoUsuario.save();
  res.json(novoUsuario);
});

router.delete('/:id', async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ message: 'Usuário deletado' });
});

module.exports = router;