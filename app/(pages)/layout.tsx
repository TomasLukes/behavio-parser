import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Footer from "@/app/components/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "S-Expression visualization | Behavio",
  description: "Easily parse and visualize your s-expression.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative w-screen h-screen bg-grainy antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
