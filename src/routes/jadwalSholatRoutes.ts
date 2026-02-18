import { Router } from "express";
import { getJadwalSholat, getKab, getProvinsi } from "../controllers/jadwalSholatController";

// Membuat router untuk rute Quran  
const router = Router();

router.post("/shalat", getJadwalSholat);

router.get("/provinsi", getProvinsi);

router.post("/kabkota", getKab);

export default router;

