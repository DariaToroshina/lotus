import "./globals.css";
import { geometria } from "./fonts";

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
