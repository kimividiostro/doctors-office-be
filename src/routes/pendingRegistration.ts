import express from "express";
import getPendingRegistrations from "../controllers/pendingRegistration/getPendingRegistrations";
import approvePendingRegistration from "../controllers/pendingRegistration/approvePendingRegistration";
import declinePendingRegistration from "../controllers/pendingRegistration/declinePendingRegistration";

const router = express.Router();

router.get('/pendingRegistrations', getPendingRegistrations);
router.post('/approvePendingRegistration', approvePendingRegistration);
router.post('/declinePendingRegistration', declinePendingRegistration);

export { router as pendingRegistrationRouter };