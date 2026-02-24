import { Router } from "express";
import { createLink } from "../controllers/linkController.js";

const router = Router();
 
router.post("/link", createLink);

export default router;