const express = require("express");
const app = express()
const tareas = require('./tareas.json')
const port = 8000;
app.use(express.json())



app.get('/tareas', (req, res) => {
    res.status(200).send(tareas)
})



app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto ${port}`)
})