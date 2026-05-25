// src/app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmotionCacheProvider from "@/components/EmotionCacheProvider";
import Layout from "@/components/Layout";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { getVsatIntakeFromSheet } from "@/lib/vsatSheet";

export const revalidate = 3600;
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://vedam.org"),
  title: {
    default: "Vedam School of Technology - Computer Science & AI Education",
    template: "%s | Vedam School of Technology",
  },
  description:
    "Vedam School of Technology - A new age college specializing in Computer Science and AI education. Empowering the next generation of tech innovators.",
  keywords: [
    "computer science",
    "artificial intelligence",
    "tech education",
    "AI education",
    "computer science college",
    "tech school",
    "machine learning",
    "data science",
    "AI engineering college",
    "top cs college in India",
    "BTech in AI",
    "Vedam tech school",
  ],
  authors: [{ name: "Vedam School of Technology", url: "https://vedam.org" }],
  openGraph: {
    title: {
      default: "Vedam School of Technology - Computer Science & AI Education",
      template: "%s | Vedam School of Technology",
    },
    description:
      "Join Vedam School of Technology — India's pioneering CS & AI college. Learn from industry leaders, build real-world projects, and launch your tech career.",
    url: "https://vedam.org",
    siteName: "Vedam School of Technology",
    images: [
      {
        url: "/img/Vedam_Final_Logo_White.webp",
        width: 1200,
        height: 630,
        alt: "Vedam School of Technology - Computer Science & AI Education",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({ children }) {
  const vsatIntake = await getVsatIntakeFromSheet();

  return (
    <html lang="en">
      <head>
        {/* LCP Image Preload */}
        <link
          rel="preload"
          as="image"
          href="/img/college-poster.webp"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={inter.className}>
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K7ZDF4K4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="gtm"
          ></iframe>
        </noscript>

        {/* Microsoft Clarity */}
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){
        (c[a].q=c[a].q||[]).push(arguments)
      };

      t=l.createElement(r);
      t.async=1;
      t.src="https://www.clarity.ms/tag/"+i;

      y=l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t,y);

    })(window, document, "clarity", "script", "r428jp90kq");
  `}
        </Script>

        {/* App */}
        <EmotionCacheProvider>
          <AnnouncementBanner
            applicationClosingEndMs={vsatIntake?.applicationClosingEndMs}
          />
          <Layout>
            <Navbar />
            {children}
            <Footer />
          </Layout>
        </EmotionCacheProvider>

        {/* Analytics */}
        <Analytics />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}
