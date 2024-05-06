import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import TypePet from "../enums/TypePet";
import StatusPet from "../enums/StatusPet";
import { User } from "./User";

@Entity({
    name: "pets",
})
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  type: TypePet;

  @Column({
    length: 20,
  })
  name: string;

  @Column("integer")
  age: number;

  @Column()
  description: string;

  @Column()
  status: StatusPet;
  
  @ManyToOne(() => User, (user) => user.pets)
  user: User | null;
}