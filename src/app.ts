import express from "express";
import cors from "cors";
import quranRoutes from "./routes/quranRoutes";
import jadwalSholatRoutes from './routes/jadwalSholatRoutes'
import jadwalImsakRoutes from './routes/jadwalImsakRoutes'

const app = express();

// Mengaktifkan middleware CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Mengaktifkan middleware untuk parsing JSON
app.use(express.json());

// Menggunakan rute untuk API Quran
app.use("/api/quran", quranRoutes);

app.use("/api/jadwalsholat", jadwalSholatRoutes);

app.use("/api/jadwalimsakiyah", jadwalImsakRoutes);

export default app;