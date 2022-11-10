import { Request, Response, Router } from "express"
import { ItemController } from "./src/controllers/itemController"

const express = require('express')

const routes = Router()

routes.put('/criarTarefa', new ItemController().create)
routes.get('/listarTarefas', new ItemController().list)
routes.delete('/deletarTarefa', new ItemController().delete)



export default routes