const express = require('express');
const productoController = require('./Producto.controller');

const router = express.Router();

router.get('/', productoController.obtenerProductos);
router.post('/', productoController.agregarProducto);
router.put('/', productoController.editarProducto);
router.delete('/:id',productoController.eliminarProducto);

module.exports = router;
