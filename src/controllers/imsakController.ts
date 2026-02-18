import axios from "axios";  
import { Request, Response } from "express";


export const getProvinsi = async (req: Request, res: Response) => {
    // Mengambil nomor surah dari parameter URL
    const response = await axios.get(`https://equran.id/api/v2/imsakiyah/provinsi`);
    res.json(response.data);
}


export const getKab = async (req: Request, res: Response) => {
    // Mengambil nomor surah dari parameter URL
    try {
     const { provinsi } = req.body;
    const response = await axios.post(`https://equran.id/api/v2/imsakiyah/kabkota`, {
      provinsi,
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil jadwal Imsakiyah' });
  }
}

export const getJadwalImsakiyah = async (req: Request, res: Response) => {
  try {
    // contoh: ambil parameter dari body
    const { provinsi, kabkota, bulan, tahun } = req.body;

    const response = await axios.post('https://equran.id/api/v2/imsakiyah', {
      bulan,
      kabkota,
      provinsi,
      tahun,
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil jadwal Imsakiyah' });
  }
};
