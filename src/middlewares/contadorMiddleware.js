const contadorOperaciones = {
    GET: 0,
    POST: 0,
    PUT: 0,
    DELETE: 0,
};

const contarOperaciones = (req, res, next) => {
    const metodo = req.method;

    if (contadorOperaciones[metodo] !== undefined) {
        contadorOperaciones[metodo] += 1;
    }

    next();
};

module.exports = { contarOperaciones, contadorOperaciones };
