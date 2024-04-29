import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Account{

    @PrimaryGeneratedColumn()
    id :number;

    @Column()
    accountnumber : string;

    @Column()
    accountprice : number;
}