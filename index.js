const express = require("express");
const app = express()
const tareas = require('./tareas');
const ListViewRouter = require("./list-view-router");
const ListEditRouter = require("./list-edit-route");
const port = 8000;
app.use(express.json())

app.use(ListViewRouter)
app.use(ListEditRouter)
/* app.get('/tareas', (req, res) => {
    res.status(200).send(tareas)
}) */



app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto ${port}`)
})
