/**
 * Email testing utilities
 * Use these to test your email endpoints
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export interface SendEmailParams {
  to: string;
  subject: string;
  html?: string;
  text?: string;
  cc?: string;
  bcc?: string;
  replyTo?: string;
}

/**
 * Send test email via API
 */
export async function sendTestEmail(params: SendEmailParams) {
  try {
    const response = await fetch(`${API_BASE}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send email");
    }

    return data;
  } catch (error) {
    console.error("Email send error:", error);
    throw error;
  }
}

/**
 * Verify email transporter connection
 */
export async function verifyEmailConnection() {
  try {
    const response = await fetch(`${API_BASE}/api/send-email`, {
      method: "GET",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Connection verification failed");
    }

    return data;
  } catch (error) {
    console.error("Connection verification error:", error);
    throw error;
  }
}

/**
 * Send welcome email template
 */
export async function sendWelcomeEmail(email: string) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #1e3a8a;">Welcome to Lions Club</h1>
      <p>Hello,</p>
      <p>Thank you for joining our community. We're excited to have you on board!</p>
      <p>
        <a href="https://example.com" style="display: inline-block; padding: 10px 20px; background-color: #1e3a8a; color: white; text-decoration: none; border-radius: 5px;">
          Get Started
        </a>
      </p>
      <p>Best regards,<br>Lions Club Team</p>
    </div>
  `;

  return sendTestEmail({
    to: email,
    subject: "Welcome to Lions Club",
    html,
  });
}

/**
 * Send contact form notification
 */
export async function sendContactNotification(
  email: string,
  name: string,
  message: string
) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    </div>
  `;

  return sendTestEmail({
    to: process.env.GMAIL_USER || "admin@example.com",
    subject: `New contact from ${name}`,
    html,
  });
}
