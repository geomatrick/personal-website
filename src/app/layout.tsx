import type { Metadata } from "next";
import { Benne } from "next/font/google";
import "./globals.css";

const benne = Benne({
  variable: "--font-benne",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://geomatrick.io'),
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
        className={`${benne.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
