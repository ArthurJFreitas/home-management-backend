import { Entity, PrimaryGeneratedColumn, Column , CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity("Homes")
export class Homes {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  ownerid!: number;

  @Column()
  @CreateDateColumn()
  created_at!: Date;

  @Column()
  @UpdateDateColumn()
  updated_at!: Date;
}
