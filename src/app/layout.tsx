import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LotusRPA",
  icons: {
    icon: "/favicon.png",
  },
};

const geometria = localFont({
  src: [
    {
      path: "./fonts/geometria/Geometria-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/geometria/Geometria-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/geometria/Geometria-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/geometria/Geometria.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geometria",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geometria.variable}>{children}</body>
    </html>
  );
}
