// src/server/index.ts
import express from "express";
import contactRouter from "./routes/contact";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3, // limit each IP to 3 requests per minute
  message: "Too many requests. Please try again later.",
});

app.use(cors()); // frontend is served separately
app.use(bodyParser.json());

// Register your contact form route
app.use("/api/contact", limiter, contactRouter);

app.use(express.static(join(__dirname, "../../public")));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
