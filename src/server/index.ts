// src/server/index.ts
import express from "express";
import contactRouter from "./routes/contact";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors()); // Add if frontend is served separately
app.use(bodyParser.json());

// Register your contact form route
app.use("/api/contact", contactRouter);

// Optional: serve static files if you're bundling front + back
app.use(express.static(join(__dirname, "../../public")));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
