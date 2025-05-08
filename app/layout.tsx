import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Öreg Tölgy",
  description: "Öreg Tölgy Kastély-fogadó",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${inter.className} bg-[--background] overflow-x-hidden overflow-y-scroll`}
      >
        {children}
      </body>
    </html>
  );
}
