import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
