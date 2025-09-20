import React from "react";
import Navbar from "./_components/nav-bar";
import Footer from "./_components/footer";

export default function LandingPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
