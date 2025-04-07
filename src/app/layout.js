// src/app/layout.js (or _app.js)
import Navbar from "@/components/Navbar";
import EmotionCacheProvider from "../components/EmotionCacheProvider";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <EmotionCacheProvider>
          <Layout>
            <Navbar />
            {children}
            <Footer />
          </Layout>
        </EmotionCacheProvider>
      </body>
    </html>
  );
}
