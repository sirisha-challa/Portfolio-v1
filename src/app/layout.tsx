import type { Metadata } from "next";
import { Heebo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Challa Sirisha | Data Engineer & Embedded Systems Developer",
  description:
    "Portfolio of Challa Sirisha - AWS Data Engineer Intern, Embedded Systems Developer, and ECE Graduate specializing in Cloud, IoT, and scalable data pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          heebo.variable,
          jetbrains.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
