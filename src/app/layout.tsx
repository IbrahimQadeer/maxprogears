import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
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
  metadataBase: new URL("https://maxprogears.com"),
  title: {
    default: "MAXPROGEARS | Premium Combat Sports Manufacturing",
    template: "%s | MAXPROGEARS",
  },
  description:
    "Luxury private label combat sports manufacturing for BJJ academies, MMA gyms, custom gis, rashguards, fight shorts, and academy apparel.",
  keywords: [
    "custom BJJ gis",
    "private label combat sports manufacturing",
    "rashguard manufacturer",
    "fight shorts manufacturer",
    "BJJ academy gear",
  ],
  openGraph: {
    title: "MAXPROGEARS | Premium Combat Sports Manufacturing",
    description:
      "Private label BJJ gis, rashguards, fight shorts, and academy apparel manufactured for serious combat sports programs.",
    url: "https://maxprogears.com",
    siteName: "MAXPROGEARS",
    images: [{ url: "/gallery/m1.PNG", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
