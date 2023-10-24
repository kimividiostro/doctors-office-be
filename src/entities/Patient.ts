import { Entity, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Manager } from "./Manager";
import { ScheduledExamination } from "./ScheduledExamination";
import { Notification } from "./Notification";

@Entity("patient")
export class Patient extends Manager {
  @Column({
    nullable: true,
  })
  profilePic: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(
    () => ScheduledExamination,
    (scheduledExamination) => scheduledExamination.patient
  )
  scheduledExaminations: ScheduledExamination[];

  @OneToMany(() => Notification, (notification) => notification.patient)
  notifications: Notification[];

  @Column({
    default: 'pending',
  })
  registrationStatus: string;
}