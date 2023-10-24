import express from "express";
const router = express.Router();

import getScheduledExaminations from "../controllers/scheduledExamination/getScheduledExaminations";
import getScheduledExamination from "../controllers/scheduledExamination/getScheduledExamination";
import getScheduledExaminationsBy from "../controllers/scheduledExamination/getScheduledExaminationsBy";
import addScheduledExamination from "../controllers/scheduledExamination/addScheduledExamination";
import deleteScheduledExamination from "../controllers/scheduledExamination/deleteScheduledExamination";
import updateScheduledExamination from "../controllers/scheduledExamination/updateScheduledExamination";

router.get("/scheduledExamination", getScheduledExaminations);
router.get("/scheduledExamination/:id", getScheduledExamination);
router.get("/scheduledExamination/patient/:id", getScheduledExaminationsBy);
router.get("/scheduledExamination/doctor/:id", getScheduledExaminationsBy);
router.post("/scheduledExamination", addScheduledExamination);
router.delete("/scheduledExamination/:id", deleteScheduledExamination);
router.patch("/scheduledExamination/:id", updateScheduledExamination);

export { router as scheduledExaminationRouter };
