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

            const lista = await itemRepository.find({order: {id: "ASC"}})


            return res.status(200).json({ lista })
        } catch (error) {
            return res.status(500).json({ message: 'Ops! Ocorreu algum erro, tente novamente.' })
        }

    }

    async delete(req: Request, res: Response) {


        try {

            if(!req.body.id) return res.json({message: 'Ops! Ocorreu algum erro, confira o ID da sua tarefa!'})
            const { id } = req.body

            const item = await itemRepository.findOneBy({id})

            if(!item) return res.json({message:'Erro inesperado! Confira o ID da sua tarefa e tente novamente!'})

            await itemRepository.delete(item)
            
            return res.json({message: 'Tarefa deletada com sucesso'})

        } catch (error) {
            return res.status(500).json({ message: 'Ops! Ocorreu algum erro, tente novamente.' })
        }

    }

    async update(req: Request, res: Response){

        try {
            const { id, updatedTask } = req.body
            
            const item = await itemRepository.findOneBy({id})

            if(!item) return res.json({message:'Erro inesperado! Tente novamente'})

            itemRepository
            .createQueryBuilder()
            .update(item)
            .set({
                task: updatedTask
            })
            .where("id = :id", {id})
            .execute()

            return res.json({message: 'Tarefa atualizada com sucesso!'})


        } catch (error) {
            return res.status(500).json({ message: 'Ops! Ocorreu algum erro, tente novamente.' })
        }

    }

    async deleteAll(req:Request, res:Response){

        try {
            
        
          await itemRepository.clear()

           
         return res.json({message: 'Todas as Tarefas foram deletadas com sucesso'})


        } catch (error) {
            return res.status(500).json({ message: 'Ops! Ocorreu algum erro, tente novamente.' })
        }

    }
}