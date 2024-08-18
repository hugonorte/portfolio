import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Hugo Norte - Curriculum",
  description: "Backend and Front-end Developer",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-PCS90JZ2C5" />
    </html>
  );
}
