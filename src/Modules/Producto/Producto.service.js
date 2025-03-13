const Producto = require('./Producto.schema');
const HttpError = require('../../Util/HttpError')

class ProductoService {
    async obtenerProductos() {
        const productos = await Producto.find();
        if (productos.length==0){
            throw new HttpError('No hay productos registrados',400)
        }
        return {
            code: 200,
            productos: productos
        };
    }

    async agregarProductos(data) {
        const producto = new Producto(data);
        const productoGuardado = await producto.save();
        return {
            code: 201,
            mensaje: 'El usuario se registro exitosamente',
            producto: productoGuardado
        };
    }

    async editarProducto(data) {
        const producto = await Producto.findById(data.id);
        if (data.nombre){
            producto.nombre = data.nombre;
        }
        if (producto.precio){
            producto.precio = data.precio;
        }
        if (producto.categoria){
            producto.categoria = data.categoria;
        }
        const productoGuardado = await producto.save();
        return {
            code: 201,
            mensaje: 'El producto se edito exitosamente',
            producto: productoGuardado
        };
    }

    async eliminarProducto(id){
        const productoEliminado = await Producto.findByIdAndDelete(id);
        if (!productoEliminado) {
            throw new HttpError('El producto no fue encontrado',400);
        }
        return {
            code: 201,
            mensaje: 'El producto se elimino exitosamente',
        }; 
    }
}

module.exports = new ProductoService();
