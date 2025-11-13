import { NextRequest, NextResponse } from "next/server";
import { createTransporter } from "@/utils/mail-transporter";

export async function GET() {
  return NextResponse.json({ 
    message: "API is running",
    endpoints: {
      sendEmail: "POST /api/send-email"
    }
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { to, subject, html, text } = body;

    // Validate required fields
    if (!to || !subject || (!html && !text)) {
      return NextResponse.json(
        { 
          error: "Missing required fields",
          required: ["to", "subject", "html or text"]
        },
        { status: 400 }
      );
    }

    // Create transporter and send email
    const transporter = await createTransporter();
    const result = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to,
      subject,
      html: html || text,
      text: text || undefined,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      messageId: result.messageId,
    });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 }
    );
  }
}
