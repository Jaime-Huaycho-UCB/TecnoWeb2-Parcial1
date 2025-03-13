const express = require('express');
const contadorController = require('./Contador.controller');

const router = express.Router();

router.get('/', contadorController.obtenerContadores);

module.exports = router;