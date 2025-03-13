const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('./Modules/Usuario/Usuario.routes');
const productoRoutes = require('./Modules/Producto/Producto.routes');
const contadorRoutes = require('./Modules/Contador/Contador.routes');
const { contarOperaciones, contadorOperaciones } = require('./middlewares/contadorMiddleware');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.URL_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error:', err));

app.use('/usuarios', usuarioRoutes);
app.use('/productos', productoRoutes);
app.use('/contadores', contadorRoutes);

app.use(contarOperaciones);
app.get('/operaciones', (req, res) => {
    res.json({
        code: 200,
        mensaje: "Conteo de operaciones en el backend",
        operaciones: contadorOperaciones
    });
});

module.exports = app;
