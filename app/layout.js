import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Autocinetum",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-brown",
          fontSans.variable,
        )}
      >
        <Navbar />
        {children}
        <div className="mt-24">
          <Footer />
        </div>
      </body>
    </html>
  );
}
