import axios from "axios";  
import { Request, Response } from "express";

// Controller untuk mendapatkan daftar surah
export const getSurahList = async (req: Request, res: Response) => {
    // Mengambil data dari API eksternal
    const response = await axios.get("https://equran.id/api/v2/surat");
    res.json(response.data);
}

// Controller untuk mendapatkan surah berdasarkan nomor
export const getSurahByNumber = async (req: Request, res: Response) => {
    // Mengambil nomor surah dari parameter URL
    const surahNumber = req.params.number;
    const response = await axios.get(`https://equran.id/api/v2/surat/${surahNumber}`);
    res.json(response.data);
}

// Controller untuk mendapatkan tafsir surah berdasarkan nomor
export const getSurahTafsir = async (req: Request, res: Response) => {
    
    const surahNumber = req.params.number;
    const response = await axios.get(`https://equran.id/api/v2/tafsir/${surahNumber}`);
    res.json(response.data);
}