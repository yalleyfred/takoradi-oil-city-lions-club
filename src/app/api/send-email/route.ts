import React from "react";
import { NextRequest, NextResponse } from "next/server";
import { createTransporter } from "@/utils/mail-transporter";
import { AdminNotificationEmail } from "@/utils/templates/admin-templates";
import { UserConfirmationEmail } from "@/utils/templates/user-templates";
import { render } from "@react-email/components";

interface ContactFormRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  agreedToPrivacy: boolean;
}

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormRequest = await req.json();
    const { firstName, lastName, email, phone, message, agreedToPrivacy } =
      body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !message ||
      !agreedToPrivacy
    ) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          required: [
            "firstName",
            "lastName",
            "email",
            "phone",
            "message",
            "agreedToPrivacy",
          ],
        },
        { status: 400 }
      );
    }

    const transporter = await createTransporter();

    const adminEmailHtml = await render(
      React.createElement(AdminNotificationEmail, {
        firstName,
        lastName,
        email,
        phone,
        message,
        submittedAt: new Date().toLocaleString("en-US", {
          dateStyle: "full",
          timeStyle: "short",
        }),
      })
    );

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: adminEmailHtml,
      replyTo: email,
    });

    const userEmailHtml = await render(
      React.createElement(UserConfirmationEmail, { firstName })
    );

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "We Received Your Message - Takoradi Oil City Lions Club",
      html: userEmailHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully. Check your email for confirmation.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API] Email send error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
