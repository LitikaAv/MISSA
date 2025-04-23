
// 4. routes/acervos.js
// ----------------------
const express = require('express');
const router = express.Router();
const Acervo = require('../models/Acervo');

router.get('/', async (req, res) => {
  const acervos = await Acervo.find();
  res.json(acervos);
});

router.post('/', async (req, res) => {
  const novoAcervo = new Acervo(req.body);
  await novoAcervo.save();
  res.json(novoAcervo);
});

router.delete('/:id', async (req, res) => {
  await Acervo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Acervo deletado' });
});

module.exports = router;