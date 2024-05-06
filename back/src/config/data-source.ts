import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";
import { Service } from "../entities/Service";
import { Pet } from "../entities/Pet";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "4dm1n$C476",
    database: "adoptapet",
    // dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User,Appointment,Credential,Service,Pet],
    subscribers: [],
    migrations: [],
  })

export const UserModel = AppDataSource.getRepository(User);
export const AppointmentModel = AppDataSource.getRepository(Appointment);
export const CredentialModel = AppDataSource.getRepository(Credential);
export const ServiceModel = AppDataSource.getRepository(Service);
export const PetModel = AppDataSource.getRepository(Pet);