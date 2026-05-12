import React from 'react'
import Home from '../app/home/client/Home'

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "Vedam School of Technology",
  alternateName: "Vedam School",
  url: "https://www.vedam.org/",
  logo: "https://www.vedam.org/_next/image?url=%2Fimg%2Fvedam_logo.webp&w=256&q=75",
  sameAs: [
    "https://www.instagram.com/vedamschooloftechnology",
    "https://www.youtube.com/@vedamschooloftechnology",
  ],
};

export const metadata = {
  title: 'Vedam School of Technology | India’s Premier CS & AI College',
  description: 'Welcome to Vedam School of Technology - A premier institution for Computer Science and AI education. Discover our cutting-edge programs, expert faculty, and innovative learning environment.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Vedam School of Technology',
    'BTech in Computer Science',
    'AI engineering college in India',
    'best tech college in India',
    'computer science and AI education',
    'data science and machine learning degree',
    'top CS college with placements',
    'new age engineering college',
    'industry-aligned tech programs',
    'AI and machine learning BTech'
  ],
  openGraph: {
    title: 'Home - Vedam School of Technology',
    description: 'Welcome to Vedam School of Technology - A premier institution for Computer Science and AI education. Discover our cutting-edge programs, expert faculty, and innovative learning environment.',
    url: 'https://www.vedam.org/',
    siteName: 'Vedam School of Technology',
    type: 'website',
    images: [
      {
        url: '/img/Vedam_Final_Logo_White.webp',
        width: 1200,
        height: 630,
        alt: 'Vedam School of Technology - Computer Science & AI Education',
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Home />
    </>
  )
}

export default page
