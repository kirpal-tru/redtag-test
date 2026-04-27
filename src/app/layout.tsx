import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/src/components/common/Header";
import Footer from "../components/common/Footer";
import { gibson } from "../utils/fonts";

export const metadata: Metadata = {
  title: "Redtag.ca | AI Travel",
  description: "Canada's AI-powered travel deal finder.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={gibson.variable}>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <Header /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}