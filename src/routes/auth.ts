import express from "express";
import login from "../controllers/auth/login";
import logout from "../controllers/auth/logout";
import autoLogin from "../controllers/auth/autoLogin";

const router = express.Router();

router.post('/auth/login', login);
router.post('/auth/logout', logout);
router.post('/auth/autoLogin', autoLogin);

export {router as authRouter};