import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: '銅鑼銅鑼｜Dora Dora',
  description: '生活の中に銅鑼の音を',
  openGraph: {
    title: '銅鑼銅鑼｜Dora Dora',
    description: '生活の中に銅鑼の音を',
    url: 'https://www.doradora.app',
    siteName: '銅鑼銅鑼｜Dora Dora',
    images: [
      {
        url: '/doradora-chinese-character.png',
        width: 1200,
        height: 630,
        alt: 'Dora Dora Thumbnail',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
