# Gmail OAuth2 Setup Guide

## Prerequisites
- Gmail account
- Google Cloud Console access

## Step 1: Create OAuth2 Credentials in Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable **Gmail API**:
   - Search for "Gmail API" in the search bar
   - Click "Enable"

4. Create OAuth2 credentials:
   - Go to **Credentials** > **Create Credentials** > **OAuth client ID**
   - Choose **Web application**
   - Add authorized redirect URIs:
     - Development: `http://localhost:3000`
     - Production: `your-domain.com`
   - Click **Create**
   - Save your **Client ID** and **Client Secret**

## Step 2: Get Refresh Token

### Option A: Use the Helper Function (Recommended)

1. Add to your `.env.local`:
```
GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REDIRECT_URL=http://localhost:3000
GMAIL_USER=your-email@gmail.com
```

2. Create a temporary API route `/api/auth/oauth-callback`:
```typescript
// app/api/auth/oauth-callback/route.ts
import { getRefreshToken } from "@/utils/get-oauth-token";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  
  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  try {
    const refreshToken = await getRefreshToken(code);
    return NextResponse.json({ refreshToken });
  } catch (error) {
    return NextResponse.json({ error: "Failed to get token" }, { status: 500 });
  }
}
```

3. Run dev server: `pnpm dev`

4. In another terminal, generate auth URL:
```typescript
import { getOAuth2Credentials } from "@/utils/get-oauth-token";
await getOAuth2Credentials();
```

5. Visit the printed URL in your browser
6. Grant permissions
7. You'll be redirected with a code, copy it
8. Visit: `http://localhost:3000/api/auth/oauth-callback?code=YOUR_CODE`
9. Copy the refresh token from the response

### Option B: Manual Method

1. Visit this URL (replace CLIENT_ID):
```
https://accounts.google.com/o/oauth2/v2/auth?
  scope=https://www.googleapis.com/auth/gmail.send&
  access_type=offline&
  response_type=code&
  client_id=YOUR_CLIENT_ID.apps.googleusercontent.com&
  redirect_uri=http://localhost:3000
```

2. Grant permission
3. Copy the `code` from redirect URL
4. Run:
```bash
curl -X POST https://oauth2.googleapis.com/token \
  -d "client_id=YOUR_CLIENT_ID.apps.googleusercontent.com" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "code=YOUR_CODE" \
  -d "grant_type=authorization_code" \
  -d "redirect_uri=http://localhost:3000"
```

5. Copy the `refresh_token` from response

## Step 3: Add to Environment Variables

Add to `.env.local`:
```
GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REDIRECT_URL=http://localhost:3000
GOOGLE_REFRESH_TOKEN=your_refresh_token
GMAIL_USER=your-email@gmail.com
```

## Step 4: Use the Transporter

```typescript
import { createTransporter } from "@/utils/mail-transporter";

async function sendEmail() {
  const transporter = await createTransporter();
  
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: "recipient@example.com",
    subject: "Hello",
    html: "<p>Test email</p>",
  });
}
```

## Troubleshooting

**"Invalid client" error**
- Check CLIENT_ID and CLIENT_SECRET are correct
- Ensure OAuth app is created for Web application

**"Invalid grant" error**
- Refresh token has expired or is invalid
- Generate a new refresh token

**"Scope error"**
- In Google Cloud Console, check Gmail API is enabled
- Regenerate credentials with proper scopes

**"Access denied" error**
- Less secure app access might be blocked
- Enable 2FA and create an App Password instead (alternative)

## Alternative: Using App Password

If OAuth2 is too complex, use Gmail's App Password:

1. Enable 2-Step Verification on your Google Account
2. Create an App Password (16-character password)
3. Use in `.env.local`:
```
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-16-char-app-password
```

4. Update mail-transporter.ts:
```typescript
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});
```

This is simpler but less secure than OAuth2.
