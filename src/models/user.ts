import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from "typeorm";
import {hashSync, compareSync} from 'bcryptjs'

@Entity("Users")
@Unique(['email', 'phone'])
export class Users {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!: string;

    @Column()
    password!: string;

    @Column()
    email!: string;

    @Column()
    phone!: string;

    @Column()
    @CreateDateColumn()
    created_at!: Date;

    @Column()
    @UpdateDateColumn()
    updated_at!: Date;

    hashPassword() {
        this.password = hashSync(this.password,8)
    }

    checkDecryptedPassword(unencryptedPass: string) {
        return compareSync(unencryptedPass, this.password )
    }
}

