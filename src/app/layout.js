import React from "react";
import NavBar from "@/components/NavBar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${montserrat.variable} font-sans bg-light w-full min-h-screen`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
