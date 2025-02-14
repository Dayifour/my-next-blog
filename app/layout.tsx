import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manager Dayif's blog",
  description: "My personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="m-auto px-5 min-h-[100vh] flex flex-col justify-between 2xl:w-[1366px] xl:w-[1024px] xl:px-[50px] lg:w-[900px] md:w-[640px] sm:w-[475px]">
          <Navbar />
          {children}
          <Footer /> 
        </div>
      </body>
    </html>
  );
}
