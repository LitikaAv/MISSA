// 1. models/Usuario.js
// -----------------------
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: String,
  papel: String,
  projeto: String,
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
