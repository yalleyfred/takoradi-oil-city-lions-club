import { google } from "googleapis";

/**
 * Helper function to get OAuth2 credentials from Google
 * Run this once to get your refresh token
 * 
 * Steps:
 * 1. Set up OAuth2 app in Google Cloud Console
 * 2. Get Client ID and Client Secret
 * 3. Set GOOGLE_REDIRECT_URL to http://localhost:3000
 * 4. Run this function to get authorization URL
 * 5. Visit the URL, grant permissions, and capture the auth code
 * 6. Get the refresh token and store in .env.local
 */

export async function getOAuth2Credentials() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URL
  );

  // Step 1: Get authorization URL
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/gmail.send"],
  });

  console.log("Visit this URL to authorize:");
  console.log(authUrl);

  // Step 2: After user grants permission, exchange auth code for tokens
  // You'll get a code in the redirect URL
  // const { tokens } = await oauth2Client.getToken(authCode);
  // const refreshToken = tokens.refresh_token;
  // Store refreshToken in .env.local
}

/**
 * Alternative: Generate auth code programmatically if you have user input
 */
export async function getRefreshToken(authCode: string) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URL
  );

  const { tokens } = await oauth2Client.getToken(authCode);
  return tokens.refresh_token;
}
