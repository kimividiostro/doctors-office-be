import { Entity, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { Manager } from "./Manager";
import { MessageToManager } from "./MessageToManager";
import { Specialization } from "./Specialization";
import { ScheduledExamination } from "./ScheduledExamination";
import { Examination } from "./Examination";

@Entity("doctor")
export class Doctor extends Manager {
  @Column({
    nullable: true,
  })
  profilePic: string;

  @Column({
    unique: true,
  })
  licenceNumber: string;

  @Column()
  officeDepartment: string;

  @ManyToOne(() => Specialization, (specialization) => specialization.doctors)
  @JoinColumn({name: "specialization_id"})
  specialization: Specialization;

  @OneToMany(() => MessageToManager, (message) => message.doctor)
  messages: MessageToManager[];

  @OneToMany(() => ScheduledExamination, (examination) => examination.doctor)
  scheduledExaminations: ScheduledExamination[];

  @ManyToMany(() => Examination)
  @JoinTable({name: 'doctor_examination'})
  examinations: Examination[]

  @ManyToMany(() => Examination)
  @JoinTable({name: 'examination_request'})
  examinationRequests: Examination[]
}
