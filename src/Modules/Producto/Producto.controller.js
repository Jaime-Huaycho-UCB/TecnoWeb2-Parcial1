const productoService = require('./Producto.service');

class ProductoController {
    async obtenerProductos(req, res) {
        try {
            const resultado = await productoService.obtenerProductos();
            res.status(resultado.code).json(resultado);
        } catch (error) {
            res.status(error.statusCode || 500).json({
                code: error.statusCode || 500,
                mensaje: error.message
            });
        }
    }

    async agregarProducto(req, res) {
        try {
            const resultado = await productoService.agregarProductos(req.body);
            res.status(resultado.code).json(resultado);
        } catch (error) {
            res.status(error.statusCode || 500).json({
                code: error.statusCode || 500,
                mensaje: error.message
            });
        }
    }

    async editarProducto(req,res) {
        try {
            const resultado = await productoService.agregarProductos(req.body);
            res.status(resultado.code).json(resultado);
        } catch (error) {
            res.status(error.statusCode || 500).json({
                code: error.statusCode || 500,
                mensaje: error.message
            });
        }
    }

    async eliminarProducto(req,res) {
        try {
            const {id} = req.params;
            const resultado = await productoService.eliminarProducto(id);
            res.status(resultado.code).json(resultado);
        } catch (error) {
            res.status(error.statusCode || 500).json({
                code: error.statusCode || 500,
                mensaje: error.message
            });
        }
    }
}

module.exports = new ProductoController();
