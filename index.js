const express = require("express");
const app = express()
const tareas = require('./tareas.json');
const { handlErrorPost, handlErrorPut } = require("./Middlewares/middleware-edit");
const port = 8000;
app.use(express.json())

app.post('/list-edit-router', handlErrorPost, (req, res) => {
    res.status(200).send(tareas)
})

app.put('/list-edit-router', handlErrorPut, (req, res) => {
    res.status(200).send(tareas)
})

app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto ${port}`)
})