// src/app/layout.js (or _app.js)
import Navbar from "@/components/Navbar";
import EmotionCacheProvider from "../components/EmotionCacheProvider";
import Footer from "@/components/Footer";
import "./globals.css";
import KeyDatesTable from "@/components/KeyDatesTable";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <EmotionCacheProvider>
          <Navbar />
          {children}
          <KeyDatesTable />
          <Footer />
        </EmotionCacheProvider>
      </body>
    </html>
  );
}
