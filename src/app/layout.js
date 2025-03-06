"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import NavBar from "@/components/NavBar";
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Reset body class to prevent style persistence
    document.body.className = ''; 
  }, [pathname]);

  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main key={pathname}>
          {children}
        </main>
        <Footer />
      </body>
      
    </html>
  );
}
