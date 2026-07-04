import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://challasirisha.dev"),
  title: "Challa Sirisha | AWS Data Engineer & Embedded Systems Developer",
  description:
    "Portfolio of Challa Sirisha - AWS Data Engineer Intern specializing in PySpark, Amazon Redshift, ETL workflows, and IoT Embedded Systems.",
  keywords: [
    "Challa Sirisha",
    "Data Engineer",
    "AWS",
    "PySpark",
    "Embedded Systems",
    "IoT",
    "Portfolio",
  ],
  authors: [{ name: "Challa Sirisha" }],
  openGraph: {
    title: "Challa Sirisha | Data Engineer & Embedded Systems Developer",
    description: "Building scalable data pipelines and smart embedded systems.",
    url: "https://challasirisha.dev",
    siteName: "Challa Sirisha Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Challa Sirisha | Data Engineer & Embedded Systems Developer",
    description: "Building scalable data pipelines and smart embedded systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
          "min-h-dvh bg-background font-sans antialiased",
          inter.variable,
          jetbrains.variable
        )}
      >
        <a
          href="#main-content"
          className="fixed top-0 left-0 -translate-y-full focus:translate-y-0 z-[100] px-4 py-2 bg-cyber-purple text-white text-sm font-medium transition-transform outline-none"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
