import express from "express";
const router = express.Router();

import getSpecializations from "../controllers/specialization/getSpecializations";
import getSpecialization from "../controllers/specialization/getSpecialization";
import addSpecialization from "../controllers/specialization/addSpecialization";

router.get("/specialization", getSpecializations);
router.get("/specialization/:id", getSpecialization);
router.post("/specialization", addSpecialization);

export { router as specializationRouter };
