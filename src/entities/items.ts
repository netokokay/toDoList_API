import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("items")
export class Item {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    task: string
    
}