import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Doctor } from "./Doctor";

@Entity("specialization")
export class Specialization extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @OneToMany(() => Doctor, (doctor) => doctor.specialization)
  doctors: Doctor[];
}
