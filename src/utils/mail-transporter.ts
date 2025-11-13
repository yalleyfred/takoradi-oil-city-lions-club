import nodemailer from "nodemailer";

interface MailOptions {
  to: string;
  from: string;
  message: string;
}

export async function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });
}

export const transporter = {
  sendMail: async (mailOptions: MailOptions) => {
    const transport = await createTransporter();
    return transport.sendMail(mailOptions);
  },
};
