import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Doctor } from "./Doctor";

@Entity("messageToManager")
export class MessageToManager extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, (doctor) => doctor.messages)
  doctor: Doctor;

  @Column()
  message: string;
}
