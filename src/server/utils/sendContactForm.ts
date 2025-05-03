// src/server/utils/sendContactForm.ts
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER!,
    pass: process.env.BREVO_SMTP_KEY!,
  },
});

export const sendContactForm = async (
  data: ContactFormData
): Promise<{ success: boolean }> => {
  const { name, email, message } = data;

  const mailOptions = {
    from: '"Portfolio Contact Form" <gil@leetphys.com>',
    to: "martinezgil.sd@gmail.com",
    subject: `New message from ${name}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return { success: false };
  }
};
