import nodemailer from "nodemailer";
import { google } from "googleapis";

interface MailOptions {
  to: string;
  from: string;
  message: string;
}

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

async function getAccessToken() {
  try {
    const { token } = await oauth2Client.getAccessToken();
    return token;
  } catch (error) {
    console.error("Failed to get access token:", error);
    throw error;
  }
}

export async function createTransporter() {
  const accessToken = await getAccessToken();

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    },
  });
}

export const transporter = {
  sendMail: async (mailOptions: MailOptions) => {
    const transport = await createTransporter();
    return transport.sendMail(mailOptions);
  },
};
