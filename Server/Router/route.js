import {addNewUser, DataCheck, ExportData,ExportDataById, loginUser } from "../Controller/controllers.js";

import express from "express";
const router= express.Router();

router.get('/GetData', ExportData);
router.get('/DataCheck', DataCheck);
router.post('/AddUser', addNewUser);
router.post('/logUser', loginUser);
router.get('/GetData/:id', ExportDataById);

export default router;