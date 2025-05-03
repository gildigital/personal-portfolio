// src/server/routes/contact.ts
import express, { Request, Response } from "express";
import { sendContactForm } from "../utils/sendContactForm";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message || message.length > 3000) {
    res.status(400).json({ success: false, error: "Invalid input." });
    return;
  }

  try {
    const result = await sendContactForm({ name, email, message });

    if (result.success) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ success: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

export default router;
