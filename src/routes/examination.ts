import express from "express";
const router = express.Router();

import getExaminations from "../controllers/examination/getExaminations";
import getExamination from "../controllers/examination/getExamination";
import getExaminationsBySpecialization from "../controllers/examination/getExaminationsBySpecialization";
import addExamination from "../controllers/examination/addExamination";
import deleteExamination from "../controllers/examination/deleteExamination";
import updateExamination from "../controllers/examination/updateExamination";
import evaluateDoctorExaminationRequest from "../controllers/examination/evalueateDoctorEmaxinationRequest";
import getExaminationsByDoctor from "../controllers/examination/getExaminationsByDoctor";
import addExaminationRequest from "../controllers/examination/addExaminationRequest";
import getExaminationRequests from "../controllers/examination/getExaminationRequests";
import { addNewExaminationRequest } from "../controllers/examination/addNewExaminationRequest";
import { evaluateNewExaminationRequests } from "../controllers/examination/evaluateNewExaminationRequest";
import getPendingExaminations from "../controllers/examination/getPendingExaminations";

router.get("/examination/pending", getPendingExaminations);
router.post('/examination/evaluate', evaluateDoctorExaminationRequest);
router.post("/examination/evaluateNew", evaluateNewExaminationRequests);
router.post("/examination/new", addNewExaminationRequest);
router.post("/examination/request", addExaminationRequest);
router.get("/examination/requests", getExaminationRequests);
router.get("/examination/specialization/:id", getExaminationsBySpecialization);
router.get("/examination/getExaminationsByDoctor/:id", getExaminationsByDoctor)
router.get("/examinations", getExaminations);
router.get("/examination/:id", getExamination);
router.post("/examination", addExamination);
router.delete("/examination/:id", deleteExamination);
router.patch("/examination/:id", updateExamination);

export { router as examinationRouter };
