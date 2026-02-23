import {Router} from "express";
import { redirectToOriginalUrl } from "../controllers/redirectController.js";

const router = Router();

router.get("/:slug", redirectToOriginalUrl);

export default router;