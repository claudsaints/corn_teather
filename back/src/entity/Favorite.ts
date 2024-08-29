import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from "typeorm"
import { Users } from "./User"
@Entity()
export class Favorite{

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Users, (user) => user.favorites) user: Users;

    @Column()
    movieId: number

    @Column()
    title: string

    @Column()
    imgLink: string


}
