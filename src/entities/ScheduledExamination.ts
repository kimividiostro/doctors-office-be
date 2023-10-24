import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Examination } from "./Examination";
import { Patient } from "./Patient";
import { Report } from "./Report";
import { Doctor } from "./Doctor";

@Entity("scheduledExamination")
export class ScheduledExamination extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reasonForComing: string;

  @Column('time')
  startTime: Date;

  @Column('time')
  endTime: Date

  @Column()
  date: Date;

  @ManyToOne(
    () => Examination,
    (examination) => examination
  )
  @JoinColumn({ name: "examination_id" })
  examination: Examination;

  @ManyToOne(() => Patient, (patient) => patient.scheduledExaminations, { onDelete: 'CASCADE' })
  @JoinColumn({ name: "patient_id" })
  patient: Patient;

  @ManyToOne(() => Doctor, (doctor) => doctor.scheduledExaminations, { onDelete: 'CASCADE' })
  @JoinColumn({ name: "doctor_id" })
  doctor: Doctor

  @OneToOne(() => Report)
  report: Report;
}
