const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('./Modules/Usuario/Usuario.routes');
const productoRoutes = require('./Modules/Producto/Producto.routes');
const contadorRoutes = require('./Modules/Contador/Contador.routes');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.URL_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection error:', err));

app.use('/usuarios', usuarioRoutes);
app.use('/productos',productoRoutes);
app.use('/contadores',contadorRoutes);

module.exports = app;
