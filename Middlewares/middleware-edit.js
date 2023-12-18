const handlErrorPost = ((req, res, next) => {

    if (!req.body.Tarea && !req.body.estado) {
        res.status(400).json({ error: 'la solicitud esta vacia' })
    }
    if (!req.body.Tarea || !req.body.estado || !req.body.id) {
        res.status(400).json({ error: 'faltan datos para crear la tarea' })
    }
    next()

})

const handlErrorPut = ((req, res, next) => {

    if (!req.body.id && !req.body.isCompleted && !req.body.description) {
        res.status(400).json({ error: 'la solicitud esta vacia' })
    }
    if (!req.body.isCompleted || !req.body.description || !req.body.id) {
        res.status(400).json({ error: 'faltan datos para modificar la tarea' })
    }
    next()

})

const validarMetodoHTTP = (req, res, next) => {
    const metodosValidos = ['GET', 'POST', 'PUT', 'DELETE'];

    if (metodosValidos.includes(req.method)) {
        next();
    } else {
        res.status(405).send('Método HTTP no permitido');
    }
};

module.exports = { handlErrorPost, handlErrorPut, validarMetodoHTTP };