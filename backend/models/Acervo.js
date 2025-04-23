
// 2. models/Acervo.js
// --------------------
const mongoose = require('mongoose');

const AcervoSchema = new mongoose.Schema({
  titulo: String,
  tipo: String,
  localidade: String,
  data: Date
});

module.exports = mongoose.model('Acervo', AcervoSchema);