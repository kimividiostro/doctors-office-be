import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Patient } from "./Patient";

@Entity("notification")
export class Notification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: false,
  })
  read: boolean;

  @Column()
  message: string;

  @ManyToOne(() => Patient, (patient) => patient.notifications)
  @JoinColumn({ name: "patientId" })
  patient: Patient;
}
