import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Header } from "./components";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lovier's Beauty",
  description: "Lovier's Beauty ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Toaster />
        <Header />
        {children}
      </body>
    </html>
  );
}
