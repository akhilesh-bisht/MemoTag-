import express from "express";
import { submitForm } from "../controller/formController.js";

const router = express.Router();

// Handle form submission
router.post("/", submitForm);

export default router;
