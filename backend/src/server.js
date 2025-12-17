import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import notesroute from "./routes/notesroute.js";

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/notes", notesroute);

connectDB();

app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
