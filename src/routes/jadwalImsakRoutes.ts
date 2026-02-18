import { Router } from "express";
import { getJadwalImsakiyah, getKab, getProvinsi } from "../controllers/imsakController";

// Membuat router untuk rute Quran  
const router = Router();

router.post("/imsakiyah", getJadwalImsakiyah);

router.get("/provinsi", getProvinsi);

router.post("/kabkota", getKab);

export default router;
