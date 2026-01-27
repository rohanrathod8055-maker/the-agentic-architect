import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "./components/smooth-scroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Agentic Architect | Rohan Rathod",
  description: "19-Year-Old AI Agent Developer & Full Stack Architect.",
};

import { AudioProvider } from "./components/audio-provider";
import CustomCursor from "./components/ui/custom-cursor";
import Preloader from "./components/preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 cursor-none`}>
        <AudioProvider>
          <Preloader />
          <CustomCursor />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </AudioProvider>
      </body>
    </html>
  );
}
