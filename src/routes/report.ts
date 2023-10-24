import express from "express";
const router = express.Router();

import getReports from "../controllers/report/getReports";
import getReport from "../controllers/report/getReport";
import getReportsBy from "../controllers/report/getReportsBy";
import addReport from "../controllers/report/addReport";
import deleteReport from "../controllers/report/deleteReport";
import updateReport from "../controllers/report/updateReport";

router.get("/report", getReports);
router.get("/report/:id", getReport);
router.get("/report/patient/:id", getReportsBy);
router.get("/report/doctor/:id", getReportsBy);
router.post("/report", addReport);
router.delete("/report/:id", deleteReport);
router.patch("/report/:id", updateReport);

export { router as reportRouter };
