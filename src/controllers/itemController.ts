import { Request, Response } from "express";
import { Item } from "../entities/items";
import { itemRepository } from "../repositories/itemRepository";

export class ItemController {
    async create(req: Request, res: Response) {

        try {
            const { task } = req.body

            const newItem = itemRepository.create({ task })
            await itemRepository.save(newItem)

            return res.status(201).json(newItem)

        } catch (error) {
            return res.status(500).json({ message: 'Ops! Ocorreu algum erro, tente novamente.' })
        }
    }

    async list(req: Request, res: Response) {

        try {

            const lista = await itemRepository.find()


            return res.status(200).json({ lista })
        } catch (error) {
            return res.status(500).json({ message: 'Ops! Ocorreu algum erro, tente novamente.' })
        }

    }

    async delete(req: Request, res: Response) {


        try {
            const { id } = req.body

            const item = await itemRepository.findOneBy({id})

            if(!item) return res.json({message:'Erro inesperado! Tente novamente'})

            await itemRepository.delete(item)
            
            return res.json({message: 'Tarefa deletada com sucesso'})

        } catch (error) {
            return res.status(500).json({ message: 'Ops! Ocorreu algum erro, tente novamente.' })
        }

    }
}