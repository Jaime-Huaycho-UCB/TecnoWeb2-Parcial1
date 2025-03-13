const contadorService = require('./Contador.service');
class ContadorController {
    async obtenerContadores(req, res) {
        try {
            const resultado = await contadorService.obtenerContadores();
            res.status(resultado.code).json(resultado);
        } catch (error) {
            res.status(error.statusCode || 500).json({
                code: error.statusCode || 500,
                mensaje: error.message
            });
        }
    }
}

module.exports = new ContadorController();