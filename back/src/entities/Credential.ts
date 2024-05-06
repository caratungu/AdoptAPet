import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "credentials",
})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
        nullable: true,
        unique: true,
    })
    username: string;

    @Column({
        nullable: true,
    })
    password: string;
}