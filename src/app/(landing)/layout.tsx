import React from "react";
import Navbar from "./_components/nav-bar";
import Footer from "./_components/footer";

export default function LandingPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
