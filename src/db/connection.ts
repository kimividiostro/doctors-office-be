import { DataSource } from "typeorm";
import { Patient } from "../entities/Patient";
import { Doctor } from "../entities/Doctor";
import { Manager } from "../entities/Manager";
import { Examination } from "../entities/Examination";
import { ScheduledExamination } from "../entities/ScheduledExamination";
import { Report } from "../entities/Report";
import { Specialization } from "../entities/Specialization";
import { Notification } from "../entities/Notification";
import { MessageToManager } from "../entities/MessageToManager";
import Session from "../entities/Session";

const connectDB = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin123",
  database: "pia-sept-23",
  entities: [
    Patient,
    Doctor,
    Manager,
    Examination,
    ScheduledExamination,
    Report,
    Specialization,
    Notification,
    MessageToManager,
    Session
  ],
  synchronize: true,
});

connectDB
  .initialize()
  .then(() => {
    console.log("Connected to PostgreSQL...");
  })
  .catch((err) => {
    console.error(`Failed to Connected to PostgreSQL...`, err);
  });

export default connectDB;
