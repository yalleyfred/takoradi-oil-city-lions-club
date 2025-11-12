import { NextRequest, NextResponse } from "next/server";
import { createTransporter } from "@/utils/mail-transporter";

interface EmailRequest {
  to: string;
  subject: string;
  html?: string;
  text?: string;
  cc?: string;
  bcc?: string;
  replyTo?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: EmailRequest = await req.json();
    const { to, subject, html, text, cc, bcc, replyTo } = body;

    // Validate required fields
    if (!to || !subject || (!html && !text)) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          required: ["to", "subject", "html or text"],
          example: {
            to: "recipient@example.com",
            subject: "Test Email",
            html: "<h1>Hello</h1><p>This is a test</p>",
          },
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
      cc: cc || undefined,
      bcc: bcc || undefined,
      replyTo: replyTo || undefined,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        messageId: result.messageId,
        recipient: to,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API] Email send error:", error);
    
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    
    // Check for specific OAuth errors
    if (errorMessage.includes("invalid_grant")) {
      return NextResponse.json(
        {
          success: false,
          error: "OAuth token expired or invalid",
          hint: "Regenerate your refresh token using OAUTH2_SETUP.md",
        },
        { status: 401 }
      );
    }

    if (errorMessage.includes("Unauthorized")) {
      return NextResponse.json(
        {
          success: false,
          error: "Authentication failed",
          hint: "Check GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REFRESH_TOKEN",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  try {
    const transporter = await createTransporter();
    
    // Verify connection
    await transporter.verify();
    
    return NextResponse.json({
      status: "connected",
      message: "Mail transporter is working",
      gmail: process.env.GMAIL_USER,
    });
  } catch (error) {
    console.error("[API] Email transporter verification failed:", error);
    
    return NextResponse.json(
      {
        status: "disconnected",
        error: error instanceof Error ? error.message : "Connection failed",
      },
      { status: 500 }
    );
  }
}
