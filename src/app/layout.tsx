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
    </html>
  );
}
