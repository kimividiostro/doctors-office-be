import express from "express";
const router = express.Router();

import getManagerLogin from "../controllers/manager/getManagerLogin";
import getManager from "../controllers/manager/getManager";
import addManager from "../controllers/manager/addManager";

router.post("/manager/login", getManagerLogin);
router.get("/manager/:id", getManager);
router.post("/manager", addManager);

export { router as managerRouter };
