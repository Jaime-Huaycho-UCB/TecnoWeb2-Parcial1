const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    ocupacion: String
});

const Usuario = mongoose.model('usuarios', usuarioSchema);
module.exports = Usuario;
