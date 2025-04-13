// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import GoogleAnalytics from '@/components/google-analytics';
import EmotionCacheProvider from '@/components/EmotionCacheProvider';
import Layout from '@/components/Layout';
import AnnouncementBanner from '@/components/AnnouncementBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Vedam School of Technology - Computer Science & AI Education',
    template: '%s | Vedam School of Technology'
  },
  description: 'Vedam School of Technology - A new age college specializing in Computer Science and AI education. Empowering the next generation of tech innovators.',
  keywords: ['computer science', 'artificial intelligence', 'tech education', 'AI education', 'computer science college', 'tech school', 'machine learning', 'data science', 'AI engineering college', 'top cs college in India', 'BTech in AI', 'Vedam tech school'],
  authors: [{ name: 'Vedam School of Technology', url: 'https://vedam.org' }],
  openGraph: {
    title: {
      default: 'Vedam School of Technology - Computer Science & AI Education',
      template: '%s | Vedam School of Technology'
    },    
    description: 'Join Vedam School of Technology — India’s pioneering CS & AI college. Learn from industry leaders, build real-world projects, and launch your tech career.',
    url: 'https://vedam.org',
    siteName: 'Vedam School of Technology',
    images: [
      {
        url: '/img/Vedam_Final_Logo_White.png',
        width: 1200,
        height: 630,
        alt: 'Vedam School of Technology - Computer Science & AI Education',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body>
        <AnnouncementBanner/>
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