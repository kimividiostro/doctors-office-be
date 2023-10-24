import express from "express";
const router = express.Router();

import getNotifications from "../controllers/notifications/getNotifications";
import getNotification from "../controllers/notifications/getNotification";
import addNotification from "../controllers/notifications/addNotification";
import updateNotification from "../controllers/notifications/updateNotification";

router.get("/notification", getNotifications);
router.get("/notification/:id", getNotification);
router.post("/notification", addNotification);
router.patch("/notification/:id", updateNotification);

export { router as notificationRouter };
