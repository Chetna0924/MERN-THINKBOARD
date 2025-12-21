// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import notesroute from "./routes/notesroute.js";
// import rateLimiter from "./middleware/rateLimiter.js";

// const app = express();
// const PORT = process.env.PORT || 5001;

// /* 🔥 REQUIRED FOR UPSTASH */
// app.set("trust proxy", 1);

// /* middlewares */
// app.use(cors());
// app.use(express.json());

// app.use(rateLimiter); // always ON (dev + prod)


// /* routes */
// app.use("/api/notes", notesroute);

// connectDB();

// app.listen(PORT, () => {
//   console.log(`Server started on PORT: ${PORT}`);
// });
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import notesroute from "./routes/notesroute.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.set("trust proxy", 1);

app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesroute);

connectDB();

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
