import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suvedha K — Aspiring Data Analyst",
  description:
    "Portfolio of Suvedha K, an Information Science & Engineering student aspiring to become a Data Analyst with skills in Python, SQL, Data Analytics, Power BI, Machine Learning Fundamentals, and Generative AI.",
  keywords: [
    "Suvedha K",
    "Data Analyst",
    "Information Science & Engineering",
    "Python",
    "SQL",
    "Power BI",
    "Data Analytics",
    "Machine Learning",
    "Generative AI",
    "Portfolio",
  ],
  authors: [
    {
      name: "Suvedha K",
    },
  ],
  openGraph: {
    title: "Suvedha K — Aspiring Data Analyst",
    description:
      "Information Science & Engineering Student | Aspiring Data Analyst",
    type: "website",
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} relative overflow-x-hidden`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <SmoothScroll />
          <CustomCursor />
          <ScrollProgress />

          <div className="pointer-events-none fixed inset-0 -z-30 bg-aurora" />

          <div className="pointer-events-none fixed inset-0 -z-30 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

          <div className="pointer-events-none fixed inset-0 -z-20 noise" />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}