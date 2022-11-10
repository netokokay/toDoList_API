import { AppDataSource } from "../data-source";
import { Item } from "../entities/items";



export const itemRepository = AppDataSource.getRepository(Item)