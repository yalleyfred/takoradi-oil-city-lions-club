import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lions Clubs District 418 – Ghana | Serving Communities with Kindness",
  description:
    "Join Lions Clubs District 418 – Ghana, led by President Leo Fredrick Yalley and District Governor Lion Dr Helena Asamoah-Hassan, to transform lives through health, education, youth development, disaster relief, and sustainability initiatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
