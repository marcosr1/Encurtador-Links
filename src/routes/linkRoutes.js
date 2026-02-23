import { Router } from "express";
import { getLinkStats, createLink } from "../controllers/linkController.js";

const router = Router();

router.get("/stats", getLinkStats);

router.post("/link", createLink);

export default router;