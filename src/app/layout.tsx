import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Patrick Woodhead | Founder & CEO @ Space Meridian",
  description: "Founder & CEO @ Space Meridian, Ex Lab Lead @ Protocol Labs. Building Filecoin Beam, the access layer for Filecoin. Expertise in Mathematics, Cryptography, Engineering, and Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
