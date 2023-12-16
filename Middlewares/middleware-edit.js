const handlErrorPost = ((req, res, next) => {

    if (!req.body.Tarea && !req.body.estado) {
        res.status(400).json({ error: 'la solicitud esta vacia' })
    }
    if (!req.body.Tarea || !req.body.estado || !req.body.id) {
        res.status(400).json({ error: 'faltan datos para crear la tarea' })
    }
    console.log("🚀 ~ file: middleware-edit.js:14 ~ handlErrorPut ~ req:", req.body)
    next()

})

const handlErrorPut = ((req, res, next) => {

    if (!req.body.Tarea && !req.body.estado) {
        res.status(400).json({ error: 'la solicitud esta vacia' })
    }
    if (!req.body.Tarea || !req.body.estado || !req.body.id) {
        res.status(400).json({ error: 'faltan datos para crear la tarea' })
    }
    console.log("🚀 ~ file: middleware-edit.js:14 ~ handlErrorPut ~ req:", req.body)
    next()

})

module.exports = { handlErrorPost, handlErrorPut };