// src/server/routes/contact.ts
import express from "express";
import { sendContactForm } from "../utils/sendContactForm";

const router = express.Router();

router.post("/", async (req, res) => {
  const result = await sendContactForm(req.body);

  if (result.success) {
    res.status(200).json({ success: true });
  } else {
    res.status(500).json({ success: false });
  }
});

export default router;
