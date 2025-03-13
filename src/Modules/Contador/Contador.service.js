const usuarioService = require('../Usuario/Usuario.service');
const productoService = require('../Producto/Producto.service');
class ContadorService {
    async obtenerContadores(){
        const obtenerUsuarios = await usuarioService.obtenerUsuarios();
        const obtenerProductos = await productoService.obtenerProductos();
        return {
            code: 200,
            usuarios: obtenerUsuarios.usuarios.length,
            productos: obtenerProductos.productos.length
        }
    }
}

module.exports = new ContadorService();