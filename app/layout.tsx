import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import AmbientBackground from "./components/AmbientBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "CodeBlue — AI Automation & n8n Specialists",
  description:
    "CodeBlue builds AI-powered workflows, n8n automations, chatbots, and business systems that eliminate repetitive work and connect the tools your business already uses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${body.variable} min-h-full flex flex-col`}
      >
        <AmbientBackground />
        {children}
      </body>
    </html>
  );
}
