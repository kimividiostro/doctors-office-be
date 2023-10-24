import express from "express";
const router = express.Router();

import getPatients from "../controllers/patient/getPatients";
import getPatientLogin from "../controllers/patient/getPatientLogin";

import getPatient from "../controllers/patient/getPatient";
import addPatient from "../controllers/patient/addPatient";
import deletePatient from "../controllers/patient/deletePatient";
import updatePatient from "../controllers/patient/updatePatient";
import changePassword from "../controllers/patient/changePassword";

router.post("/patient/login", getPatientLogin);
router.post("/patient/changePassword", changePassword);
router.get("/patient/:id", getPatient);
router.patch("/patient/:id", updatePatient);
router.delete("/patient/:id", deletePatient);
router.get("/patient", getPatients);
router.post("/patient", addPatient);

export { router as patientRouter };
