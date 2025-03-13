const express = require('express');
const usuarioController = require('./Usuario.controller');

const router = express.Router();

router.get('/', usuarioController.obtenerUsuarios);
router.post('/', usuarioController.agregarUsuario);
router.put('/', usuarioController.editarUsuario);
router.delete('/:id',usuarioController.eliminarUsuario);

module.exports = router;
