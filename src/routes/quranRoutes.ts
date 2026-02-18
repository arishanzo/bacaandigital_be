import { Router } from "express";
import { getSurahList, getSurahByNumber, getSurahTafsir} from "../controllers/quranController";

// Membuat router untuk rute Quran  
const router = Router();

// Rute untuk mendapatkan daftar surah
router.get("/surahs", getSurahList);

// Rute untuk mendapatkan surah berdasarkan nomor
router.get("/surah/:number", getSurahByNumber);

// Rute untuk mendapatkan tafsir surah berdasarkan nomor
router.get("/surah/tafsir/:number", getSurahTafsir);

export default router;

