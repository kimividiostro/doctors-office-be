import express from "express";
const router = express.Router();

import getDoctors from "../controllers/doctor/getDoctors";
import getDoctorLogin from "../controllers/doctor/getDoctorLogin";
import getDoctor from "../controllers/doctor/getDoctor";
import addDoctor from "../controllers/doctor/addDoctor";
import deleteDoctor from "../controllers/doctor/deleteDoctor";
import updateDoctor from "../controllers/doctor/updateDoctor";

router.get("/doctor", getDoctors);
router.post("/doctor/login", getDoctorLogin);
router.get("/doctor/:id", getDoctor);
router.post("/doctor", addDoctor);
router.delete("/doctor/:id", deleteDoctor);
router.patch("/doctor/:id", updateDoctor);

export { router as doctorRouter };
