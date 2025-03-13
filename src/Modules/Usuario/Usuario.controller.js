const usuarioService = require('./Usuario.service');

class UsuarioController {
    async obtenerUsuarios(req, res) {
        try {
            const resultado = await usuarioService.obtenerUsuarios();
            res.status(resultado.code).json(resultado);
        } catch (error) {
            res.status(error.statusCode || 500).json({
                code: error.statusCode || 500,
                mensaje: error.message
            });
        }
    }

    async agregarUsuario(req, res) {
        try {
            const resultado = await usuarioService.agregarUsuario(req.body);
            res.status(resultado.code).json(resultado);
        } catch (error) {
            res.status(error.statusCode || 500).json({
                code: error.statusCode || 500,
                mensaje: error.message
            });
        }
    }

    async editarUsuario(req,res) {
        try {
            const resultado = await usuarioService.editarUsuario(req.body);
            res.status(resultado.code).json(resultado);
        } catch (error) {
            res.status(error.statusCode || 500).json({
                code: error.statusCode || 500,
                mensaje: error.message
            });
        }
    }

    async eliminarUsuario(req,res) {
        try {
            const {id} = req.params;
            const resultado = await usuarioService.eliminarUsuario(id);
            res.status(resultado.code).json(resultado);
        } catch (error) {
            res.status(error.statusCode || 500).json({
                code: error.statusCode || 500,
                mensaje: error.message
            });
        }
    }
}

module.exports = new UsuarioController();
