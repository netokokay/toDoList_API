import { Request, Response, Router } from "express"
import { ItemController } from "./src/controllers/itemController"

const express = require('express')

const routes = Router()

routes.post('/criarTarefa', new ItemController().create)
routes.get('/listarTarefas', new ItemController().list)
routes.delete('/deletarTarefa', new ItemController().delete)

routes.delete('/deletarTodas', new ItemController().deleteAll)

routes.put('/atualizarTarefa', new ItemController().update)




export default routes