const { Router } = require("express");
const task = require("./tareas")
const ListViewRouter = Router()

ListViewRouter.get('/complete', (req, res) => {
    const tareasCompletas = []
    task.map((task)=>{
        if (task.isCompleted) {
            tareasCompletas.push(task)
        }
    })
    res.status(200).json(tareasCompletas)
})

ListViewRouter.get('/incomplete', (req, res) => {
    const tareasIncompletas = []
    task.map((task)=>{
        if (!task.isCompleted) {
            tareasIncompletas.push(task)
        }
    })
    res.status(200).json(tareasIncompletas)
})

module.exports = ListViewRouter