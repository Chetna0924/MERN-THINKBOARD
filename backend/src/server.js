import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import notesroute from "./routes/notesroute.js";
// import rateLimiter from "./middleware/rateLimiter.js"; // abhi band rakhenge

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

/* ✅ PROPER CORS (NO MANUAL HEADERS) */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

/* ❌ Rate limiter abhi DISABLED (Redis error ki wajah se) */
// app.use("/api", rateLimiter);

/* ✅ ROUTES */
app.use("/api/notes", notesroute);

/* ✅ DB + SERVER START */
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
  });
