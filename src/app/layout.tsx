import "./globals.css";

//import { Inter } from "next/font/google";
import type { Metadata } from "next";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monad",
  description: " Local expertise, global technology, Empower Algerian industries with tailored AI solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
