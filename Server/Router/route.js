import {ExportData,ExportDataById } from "../Controller/controllers.js";

import express from "express";
const router= express.Router();

router.get('/GetData', ExportData);
router.get('/GetData/:id', ExportDataById);

export default router;