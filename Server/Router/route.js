import {addNewUser, DataCheck, ExportData,ExportDataById, LogBack, loginUser } from "../Controller/controllers.js";

import express from "express";
const router= express.Router();

router.get('/GetData', ExportData);
router.get('/DataCheck', DataCheck);
router.post('/signup', addNewUser);
router.post('/login', loginUser);
router.get('/GetData/:id', ExportDataById);
router.get('/auth', LogBack);

export default router;