// src/app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="icon" href="./favicon.ico" />
        <Suspense fallback={null}>
          {/* <GoogleAnalytics /> */}
        </Suspense>
        <Script
          id="gtm"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K7ZDF4K4');
            `,
          }}
        />

        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "r428jp90kq");
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K7ZDF4K4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="gtm"
          ></iframe>
        </noscript>
        <Script
          id="nopaperforms-tracker"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var npf_d='https://apply.vedam.org'; 
              var npf_c='6380'; 
              var npf_m='1';
              var s=document.createElement("script"); 
              s.type="text/javascript";
              s.async=true; 
              s.src="https://track.nopaperforms.com/js/track.js";
              document.body.appendChild(s);
            `,
          }}
        />
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
        <Analytics />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}
