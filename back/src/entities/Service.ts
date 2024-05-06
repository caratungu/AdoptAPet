import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Appointment } from "./Appointment";

@Entity({
  name: "services",
})
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  description: string;

  @Column()
  is_active: boolean;

  @OneToMany(() => Appointment, (appointment) => appointment.service)
  appointments: Appointment[];
}
