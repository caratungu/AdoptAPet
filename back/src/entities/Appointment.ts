import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import StatusAppointment from "../enums/StatusAppointment";
import { User } from "./User";
import { Service } from "./Service";

@Entity({
    name: "appointments",
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  dateRequest: Date;

  @Column({
    nullable: true,
  })
  timeRequest: string;

  @Column({
    nullable: true,
  })
  dateAppointment: Date;

  @Column({
    nullable: true,
  })
  timeAppointment: string;

  @Column({
    nullable: true,
  })
  status: StatusAppointment;
  
  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
  
  @ManyToOne(() => Service, (service) => service.appointments)
  service: Service;
}