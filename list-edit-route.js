const { Router } = require("express");
const task = require("./tareas")
const ListEditRouter = Router()

ListEditRouter.post('/crear-tarea', (req, res) => {

    task.push(req.body)
    res.status(200).json(task)
})

ListEditRouter.delete('/borrar-tarea/:id', (req, res) => {
    const { id } = req.params
    console.log("🚀 ~ file: list-edit-route.js:13 ~ ListEditRouter.delete ~ id:", id)
    const existingTaskIndex = task.findIndex((t) => t.id = id);
    if (existingTaskIndex === -1) {
        res.status(404).json({ error: 'Tarea no encontrada' });
    } else {
        const deletedTask = task.splice(existingTaskIndex, 1);

    }
    console.log(task);
    res.status(200).json({ task })
})

ListEditRouter.put('/actualizar-tarea/:id', (req, res) => {
    const { id } = req.params
    const tareaActualizada = req.body;
    const existingTaskIndex = task.findIndex((t) => t.id = id);
    if (existingTaskIndex === '-1') {
        res.status(404).json({ error: 'Tarea no encontrada' });
    } else {
        task[existingTaskIndex] = { ...task[existingTaskIndex], ...tareaActualizada };
        res.status(200).json(task[existingTaskIndex]);
    }
})

module.exports = ListEditRouter