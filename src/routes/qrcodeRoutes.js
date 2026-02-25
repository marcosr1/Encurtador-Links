import { Router } from "express";
import { generateQRcode } from "../controllers/qrcodeController.js";

const router = Router();

router.get("/qrcode/:slug", generateQRcode);

export default router;