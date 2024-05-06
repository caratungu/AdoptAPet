import { Column, Entity, JoinColumn, OneToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";
import { Pet } from "./Pet";

@Entity({
    name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column({
    length: 100
  })
  email: string;

  @Column("integer")
  phone: number;

  @Column()
  birthdate: Date;

  @Column()
  nDni: number;

  @Column()
  picture: string; //! Revisar

  @OneToOne(() => Credential)
  @JoinColumn()
  credential: Credential;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];

  @OneToMany(() => Pet, (pet) => pet.user)
  pets: Pet[];
}
