const { validarMetodoHTTP } = require("./Middlewares/middlewares");
const ListViewRouter = require("./list-view-router");
const ListEditRouter = require("./list-edit-route");
const tareas = require('./tareas');
const express = require("express");
const app = express()
const port = 8000;

app.use(express.json())
//validacion http methos
app.use(validarMetodoHTTP)
//router
app.use(ListViewRouter)
app.use(ListEditRouter)

app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto ${port}`)
})
