import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Banner from "./components/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.URL_PATH}`),
  title: {
    default : `${process.env.URL_PATH1}`,
    template : "%s - Try Out GoTO-0.2"
  },
  description: "Farmation Try Out Platform",
  openGraph: {
    title: "Platform Try Out Soal Soal Farmasi",
    description: "Platform Try Out Soal Soal Farmasi: Solusi anda untuk meningkatkan prestasi akademik Anda.",
    url: `${process.env.URL_PATH}`,
    type: "website",
    locale: "id_ID",
    siteName: "TRY OUT FARMASI",
    images: [
      {
        url: "https://res.cloudinary.com/dboexxeq0/image/upload/v1738074131/DALL_E_2025-01-18_21.47.26_-_A_realistic_logo_featuring_a_duck_wearing_a_graduation_cap_toga_hat_designed_in_a_circular_emblem_style._The_logo_uses_a_minimalist_color_scheme_of-Photoroom_lz8ahx.png",
        width: 800,
        height: 600,
        alt: "Try Out Farmasi",
      }
    ]
  }
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
        
        {children}
        <Banner/>
      </body>
    </html>
  );
}
