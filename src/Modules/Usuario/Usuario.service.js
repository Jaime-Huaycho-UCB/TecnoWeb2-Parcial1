const Usuario = require('./Usuario.schema');
const HttpError = require('../../Util/HttpError')

class UsuarioService {
    async obtenerUsuarios() {
        const usuarios = await Usuario.find();
        if (usuarios.length==0){
            throw new HttpError('No hay usuarios registrados',400)
        }
        return {
            code: 200,
            usuarios: usuarios
        };
    }

    async agregarUsuario(data) {
        const usuario = new Usuario(data);
        const usuarioGuardado = await usuario.save();
        return {
            code: 201,
            mensaje: 'El usuario se registro exitosamente',
            usuario: usuarioGuardado
        };
    }

    async editarUsuario(data) {
        const usuario = await Usuario.findById(data.id);
        usuario.nombre = data.nombre;
        usuario.edad = data.nombre;
        usuario.ocupacion = data.ocupacion;
        const usuarioEditado = await usuario.save();
        return {
            code: 201,
            mensaje: 'El usuario se edito exitosamente',
            usuario: usuarioEditado
        };
    }

    async eliminarUsuario(id){
        const usuarioEliminado = await Usuario.findByIdAndDelete(id);
        if (!usuarioEliminado) {
            throw new HttpError('El usuario no fue encontrado',400);
        }
        return {
            code: 201,
            mensaje: 'El usuario se elimino exitosamente',
        }; 
    }
}

module.exports = new UsuarioService();
