import type { Metadata } from "next";
import { Oswald, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const fontDisplay = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
});

const fontHeading = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

const fontBody = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "The Wedding Psalm | Best Photographers in Dehradun",
  description: "Capture the Magic of Your Wedding, Prewedding, Birthday, Baby Shower, or Special Event with Our Expert Photography Services.",
};

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontHeading.variable} ${fontBody.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
