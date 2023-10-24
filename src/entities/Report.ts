import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { ScheduledExamination } from "./ScheduledExamination";

@Entity("report")
export class Report extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  diagnosis: string;

  @Column()
  therapy: string;

  @Column()
  controlDate: Date;

  @Column()
  controlTime: string;

  @OneToOne(() => ScheduledExamination)
  @JoinColumn()
  scheduledExamination: ScheduledExamination;
}
