import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TL2KT9EXMN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TL2KT9EXMN');
          `}
        </Script>
      </head>
      <body
        className={`${benne.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
