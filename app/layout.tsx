import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "High Frequency PVC Welding Machines | Eagle Service Center",
  description:
    "Eagle Service Center offers high-frequency PVC welding machines designed for reliable sealing of tarpaulins, membranes, tents, and PVC fabrics using 27.12 MHz RF welding technology. Available in manual, pneumatic, and automatic formats. Contact us for models tailored to your industrial needs.",
  keywords: [
    "high frequency PVC welding machine",
    "HF PVC welding machine 27.12 MHz",
    "manual pneumatic automatic PVC welding machine",
    "PVC welding machine for tarpaulin tents",
    "PVC welding machine large format membranes",
    "RF welding PVC fabric machine",
    "hot air PVC welding alternatives",
    "industrial PVC welding solutions"
  ],
  openGraph: {
    title: "High-Frequency PVC Welding Machines | Eagle Service Center",
    description:
      "Durable and precise HF RF welding machines for PVC tarpaulins, tents, and membranes. High-efficiency sealing via 27.12 MHz electromagnetic welding. Available in automatic, pneumatic, or manual formats.",
    url: "https://yourdomain.com/pvc-welding-machines",
    siteName: "Eagle Service Center",
    images: [
      {
        url: "/og-pvc-welding.jpg",
        width: 1200,
        height: 630,
        alt: "High frequency PVC welding machine - Eagle Service Center",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Frequency PVC Welding Machines | Eagle Service Center",
    description:
      "Explore our HF PVC welding machines for robust welding of tarpaulins, PVC fabrics, and industrial membranes. RF technology, precise welds, tailored formats.",
    images: ["/twitter-pvc-welding.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <div className="mb-[80px]">
          <Navbar />
        </div>
        {children}

        <Footer />
      </body>
    </html>
  );
}
