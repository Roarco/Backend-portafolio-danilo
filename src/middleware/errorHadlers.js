function logErrors(err, req, res, next) {
    //mostrar el error en servidor para poder monitorearlo
    console.error(err);

    /* importante para saber que se esta enviando a un middleware de tipo error,
        si no tiene el error dentro entonces se esta mandando a uno normal
     */
    next(err);
}

function errorHandler(err, req, res, next) {
    /*  así no se utilice next en el código se debe poner aqui, ya que un middleware
     de error tiene los cuatro parámetros */
    res.status(500).json({
        message: err.message, //mostrar al cliente el mensaje de error
        stack: err.stack      ///mostrar info del error
    });
}

function boomErrorHandler(err, req, res, next) {
    //si el error es de boom, entonces se puede obtener el error
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };