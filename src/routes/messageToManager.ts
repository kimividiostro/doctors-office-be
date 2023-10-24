import express from "express";
const router = express.Router();

import addMessageToManager from "../controllers/messageToManager/addMessageToManager";
import getMessageToManager from "../controllers/messageToManager/getMessageToManager";
import getMessagesToManager from "../controllers/messageToManager/getMessagesToManager";
import deleteMessageToManager from "../controllers/messageToManager/deleteMessageToManager";

router.get("/messageToManager", getMessagesToManager);
router.get("/messageToManager/:id", getMessageToManager);
router.post("/messageToManager", addMessageToManager);
router.delete("/messageToManager/:id", deleteMessageToManager);

export { router as messageToManagertRouter };
