import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Homes")
export class Homes {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  ownerid!: number;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;
}
