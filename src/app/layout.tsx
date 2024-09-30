import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

// Load Fredoka font
const fredoka = Fredoka({
  subsets: ["latin"], // You can specify the subsets you need
  weight: ["300","400", "500", "600", "700"], // Specify font weights you want to use
});

export const metadata: Metadata = {
  title: "Mrh's Portfolio",
  description: "This is my portfolio website",
  icons: "/icon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className}>{children}</body>
    </html>
  );
}
