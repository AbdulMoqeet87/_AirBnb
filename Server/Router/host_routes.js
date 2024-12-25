import {CreateHost, loginHost} from "../Controller/HostController.js";
import express from "express";

const router= express.Router();

router.post('/signup', CreateHost);
router.post('/login', loginHost);

export default router;